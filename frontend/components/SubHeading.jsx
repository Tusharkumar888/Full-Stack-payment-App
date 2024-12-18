import { Link } from "react-router-dom"

export const SubHeading = ({lable,inputText,to}) =>{

        return <>
        <div className="text-sm text-gray-700 leading-snug w-80 pt-2 "> 
            {lable} <Link className="cursor-pointer underline text-cyan-500 hover:text-cyan-600"  to= {to}>{inputText}</Link>
        </div>
        
        </>
}