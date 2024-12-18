import { useState } from "react"
import {Users} from "../components/Users"
export const Dashboard= ()=>{
    return <>
        <div className="font-serif ... ">
            <header className="flex justify-between h-14 border-b-2 w-screen items-center pl-2 pr-2 ">
                <div className="font-bold text-lg">
                    <h2>Money Dash</h2>
                </div>
                <div  className="flex items-center">
                <h2>Hello</h2>
                <div className="h-10 w-10 bg-gray-300 rounded-3xl flex justify-center items-center ml-10 hover:bg-gray-400 cursor-pointer">U</div>
                </div>
            </header>
            <Users></Users>
        </div>
    </>
}

