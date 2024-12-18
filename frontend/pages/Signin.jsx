import axios from 'axios'
import { ButtonComponent } from '../components/ButtonComponent'
import {Heading} from '../components/Heading'
import { InputComponent } from '../components/InputComponent'
import { SubHeading } from '../components/SubHeading'
import { useState } from 'react'

export const Signin =()=>{
    const [oldusername, setOldUsername] = useState("")
    const [oldpassword, setOldPassword] = useState("")
    return (
        <div  className=" flex  box-border min-h-screen container mx-auto justify-center items-center font-serif "> 
            <div className=" flex flex-col px-9 pt-2 lg:h-[350px] lg:w-[450px] bg-white rounded-xl shadow-lg  shadow-slate-400 ">
                <Heading value = {"Sign In"}></Heading>
                <SubHeading lable ="Don't have an acount" inputText = "Sign Un" to = "http://localhost:5173/signup"></SubHeading>
                <InputComponent onChange = {(e)=>{
                   setOldUsername(e.target.value)
                }} inputs = {"Email address"}></InputComponent>
                <InputComponent onChange = {(e)=>{
                   setOldPassword(e.target.value)
                }} inputs = {"Password"}></InputComponent>
                <ButtonComponent onClick={()=>{
                     axios.post("http://localhost:3000/api/v1/user/signin",
                        {
                            username:oldusername,
                            password:oldpassword
                        }

                ).then(response=>{
                    localStorage.setItem("token","Bearer " + response.data.token)
                })
                }} value={"Sign In"}></ButtonComponent>
            </div>
        </div>
    )
}

