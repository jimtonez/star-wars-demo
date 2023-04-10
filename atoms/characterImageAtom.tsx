import { atom } from "recoil";
import vercel from "../public/vercel.svg"

export const characterImageState = atom({
    key: 'CharacterImageState',
    default: vercel,
})