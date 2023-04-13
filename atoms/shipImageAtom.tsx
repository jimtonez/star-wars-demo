import { atom } from "recoil";
import vercel from "../public/vercel.svg"

export const shipImageState = atom({
    key: 'ShipImageState',
    default: "",
})