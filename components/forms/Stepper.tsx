"use client"
import { useState } from 'react'
import { useRecoilState } from "recoil"
import Factions from "./Factions"
import Characters from "./Characters"
import { formState } from '@/atoms/formAtom'
import Colors from './Colors'

function Stepper () {

    const [currentStep, setCurrentStep] = useRecoilState(formState)

    const renderStep = () => {
        if (currentStep === "Factions") {
            return (
                <Factions />
            )
        } else if (currentStep === "Characters"){
            return (
                <Characters />
            )
        } else if (currentStep === "Ships"){
            return (
                <Ships />
            )
        }
    }

    return (
        <>
        {renderStep()}
        </>
    )
}

export default Stepper