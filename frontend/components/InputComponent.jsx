export const InputComponent = ({onChange,inputs}) =>{
    return <div className="pt-5">
    <label htmlFor="userInput" className="text-sm ">{inputs}</label><br />
    <input onChange={onChange} type="text" id="userInput" placeholder= ""  className="border-2 rounded-lg ... w-96 h-10 shadow-inner"/>
    </div>
}