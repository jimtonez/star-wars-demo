import { useRecoilState } from "recoil"
import { profileState } from "@/atoms/profileAtom"
import Missions from "./profile/Missions"
import Badges from "./profile/Badges"
import Delete from "./profile/Delete"

export default function Dashboard () {

    const [currentTab, setCurrentTab] = useRecoilState(profileState)

    const renderTab = () => {
        if (currentTab === "Missions") {
            return (
                <Missions />
            )
        } else if (currentTab === "Badges") {
            return (
                <Badges />
            )
        } else if (currentTab === "Delete") {
            return (
                <Delete />
            )
        }
    }

    return (
        <>
        <div className="flex flex-col items-center justify-center md:justify-start w-full h-full">
            {renderTab()}
        </div>
        </>
    )
}