export const ButtonComponent = ({onClick,value}) =>{
    return <>
        <button onClick={onClick} className=" mt-7 mx-auto w-80 h-12 bg-purple-500 border-2 rounded-3xl text-white hover:bg-purple-600">{value}</button>
    </>
}