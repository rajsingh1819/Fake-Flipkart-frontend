import React, { useEffect, useState } from 'react'
import Header from "./Header";
import { Link, useNavigate } from 'react-router-dom';

import { Button } from 'react-bootstrap'

import "../Components/Common.css"

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let navigate = useNavigate();

    useEffect(() => {


        if (localStorage.getItem('user-info')) {
            let value = JSON.parse(localStorage.getItem("user-info"));

            value && value.name === "Admin" ? navigate("/add") : navigate('/list');
        }

    }, [])

    const login = async (e) => {
        e.preventDefault();
        const data = { email, password }

        const url = "http://localhost:5000/user/login";
        let item = await fetch(url, {
            method: 'post',
            headers: {
                "Active": "application/json",
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
        item = await item.json();






        if (item.token) {
            localStorage.setItem("user-info", JSON.stringify({ name: item.name }));

            alert("Login Successfully !!!")


            let value = JSON.parse(localStorage.getItem("user-info"));
            value && value.name === "Admin" ? navigate("/add") : navigate('/list');


            setEmail('');
            setPassword('');

        }
        else {
            alert(item.message)
        }



    }


    return (
        <div>
            <Header />
            <h1 className="text3">Login</h1>
            <form className='formColor FormData'>

                <label className="text2">Email:  </label>
                <input type="text" className='form-control' placeholder='Enter your email....' value={email} onChange={(e) => setEmail(e.target.value)} /><br />
                <label className="text2">Password : </label>
                <input type="text" className='form-control' placeholder='Enter your password....' value={password} onChange={(e) => setPassword(e.target.value)} />
                {/* <button >Login</button> */}
                <Button className='button1' onClick={(e) => login(e)}>Login</Button>
                <p>Don't have an account ? <Link to="/register"> Create Account</Link> </p>
            </form>


        </div>
    )

}
export default Login;