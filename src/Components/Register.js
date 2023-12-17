import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'

import "../Components/Common.css"

import { Link, useNavigate } from 'react-router-dom';
import Header from './Header';
function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('user-info')) {
            let value = JSON.parse(localStorage.getItem("user-info"));
            console.log("Add product user", value.name);
            value && value.name === "Admin" ? navigate("/add") : navigate('/list');
        }

    }, [])

    const signUp = async (e) => {



        e.preventDefault()
        let data = { name, email, password }
        console.log(data);
        const url = "http://localhost:5000/user/signup";

        let result = await fetch(url, {
            method: 'post',
            headers: {
                "Active": "application/json",
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
        result = await result.json();


        if (result.message === "Register Successfully !!!") {
            alert(result.message);

            setEmail('');
            setName('');
            setPassword('');
            navigate('/login')




        }
        else {
            alert(result.message);

        }


    }



    return (
        <> <Header />
            <div className="signup">

                <h1 className="text1"> Create Account </h1>
                <form className='formColor  FormData'>
                    <label className="text2">Name :  </label>
                    <input type="text" className='form-control' placeholder='Enter your name....' value={name} onChange={(e) => setName(e.target.value)} />
                    <label className="text2">Email:  </label>
                    <input type="text" className='form-control' placeholder='Enter your email....' value={email} onChange={(e) => setEmail(e.target.value)} /><br />
                    <label className="text2">Password : </label>
                    <input type="text" className='form-control' placeholder='Enter your password....' value={password} onChange={(e) => setPassword(e.target.value)} />
                    <Button className='button1' onClick={(e) => signUp(e)}>Register</Button>
                    <p>Already have an account ? <Link to="/login"> Login</Link> </p>
                </form>

            </div>
        </>
    )
}

export default Register