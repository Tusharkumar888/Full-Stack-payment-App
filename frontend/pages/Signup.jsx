import { useState } from 'react'
import { ButtonComponent } from '../components/ButtonComponent'
import {Heading} from '../components/Heading'
import { InputComponent } from '../components/InputComponent'
import { SubHeading } from '../components/SubHeading'
import axios from 'axios'
export const Signup= ()=>{
    const [username, setUsername] = useState("")
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [password, setPassword] = useState("")
    
    return (
        <div  className=" flex  box-border min-h-screen container mx-auto justify-center items-center font-serif "> 
            <div className=" flex flex-col px-9 pt-2 lg:h-[600px] lg:w-[450px] bg-white rounded-xl shadow-lg  shadow-slate-400 ">
                <Heading value ={"Sign Up"}></Heading>
                <SubHeading lable ="Already have an acount" inputText = "Sign In" to = "http://localhost:5173/signin"></SubHeading>
                <InputComponent onChange = {(e)=>{
                   setUsername(e.target.value)
                }} inputs = {"Email address"}></InputComponent>

                <InputComponent onChange = {(e)=>{
                   setFirstname(e.target.value)
                }} inputs = {"First Name"}></InputComponent>

                <InputComponent onChange = {(e)=>{
                   setLastname(e.target.value)
                }} inputs = {"Last Name"}></InputComponent>

                <InputComponent onChange = {(e)=>{
                   setPassword(e.target.value)
                }} inputs = {"Password"}></InputComponent>

                <ButtonComponent onClick = { ()=>{
                      axios.post("http://localhost:3000/api/v1/user/signup",{
                        username: username,
                        password: password,
                        firstName: firstname,
                        lastName: lastname
                    }).then(response=>{
                        localStorage.setItem("token","Bearer " + response.data.token)
                    })
                }
                }value={"Sign Up"}></ButtonComponent>
            </div>
        </div>
    )
    
}

