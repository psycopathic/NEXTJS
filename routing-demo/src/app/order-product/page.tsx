"use client"
import { useRouter } from "next/navigation"
export default function orderProduct(){
    const router = useRouter();

    const handleClick = ()=>{
        console.log("you have ordered something")   
        router.replace("/"); //forword() and back()
    }
    return<>
      <h1>you have ordered a product</h1>
      <button onClick={handleClick} style = {{cursor:"pointer"}}>click</button>
    </> 
    
}