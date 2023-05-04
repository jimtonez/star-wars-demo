"use client"
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import FeedProfile from "./FeedProfile";

export default function UsersFeed () {

    const { data: session} = useSession()
    const [appUsers, setAppUsers] = useState([])
    const router = useRouter()

    useEffect(() => {
        if (session) {
            const getUser = async () => {
                const res = await fetch(`/api/users`, {
                    method: "GET",
                    cache: 'no-store',
                });
                const users = await res.json();
                if (users) {
                    setAppUsers([
                        ...users
                    ]);
                } else {
                  return
                }
            }
            getUser()
        } else {
            router.push('/auth/signin')
        }
      },[session])
    return (
        <>
        <div className="flex flex-col items-center justify-start w-full h-full overflow-y-scroll scrollbar-hide space-y-4">
            {appUsers.map((user, i) => (
                <FeedProfile key={i} username={user.user_name} name={user.character_name} email={user.user_email} image={user.image} shipImage={user.ship_url} color={user.color} />
            ))}
        </div>
        </>
    )
}