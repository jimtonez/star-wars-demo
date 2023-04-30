import { useSession } from 'next-auth/react'

export async function useUser() {
    const { data: session } = useSession()
    const email = session!.user?.email
    console.log(email)
    const res = await fetch(`/api/users`, {
        method: "POST",
        cache: 'no-store',
        body: email
    });
    const dbuser = await res.json();
    return dbuser
}