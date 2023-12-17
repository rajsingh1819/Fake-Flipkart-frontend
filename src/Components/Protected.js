import React, { useEffect } from "react"
import Header from "./Header";
import { useNavigate } from "react-router-dom";



const Protected = (props) => {
    let {Cmp} =props
    let navigate = useNavigate();

    useEffect(()=>{
       
        if(!localStorage.getItem('user-info')){
              navigate('/register')
        }
    
    },[])
    

    return (
        <div>
            {/* <Header/>
            <h1>Protected Component</h1> */}
            <Cmp/>
        </div>
    )

}
export default  Protected;