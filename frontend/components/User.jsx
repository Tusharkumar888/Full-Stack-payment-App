import { ButtonComponent } from "./ButtonComponent"
import { ButtonComponent2 } from "./ButtonComponent2"

export const User = ({user}) =>{
    
 return <div className="flex justify-between box-border  items-center ">
    <div className="flex items-center ">
        <h2 className="flex rounded-full items-center justify-center bg-green-500 w-12 h-12 mr-3">{user.username[0]}</h2>
        <h2>{user.username}</h2>
    </div>
    <div>
        <ButtonComponent2 value={"Send Mony"}></ButtonComponent2>
    </div>
 </div>
}