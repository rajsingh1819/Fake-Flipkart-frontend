import React from 'react'
import "../Components/Common.css"
import { Link } from 'react-router-dom';

function help() {
    return (
        <div className='App'>
            <ul >
                <li><h1> You can use</h1></li>
                <li>Admin email : Admin@gmail.com</li>
                <li>   Password :  admin</li>

            </ul>
            <ul>
                <li><h3>You need to setup the backend first</h3></li>
                <li>Go to backend and check : .env file </li>
                <li>
                    <li>MySQL DataBase</li>

                    <li><p>DB_PASSWORD = write your MySQL Password || Keep Empty</p></li>
                    <li>DB_NAME = ecom</li>
                </li>
                <li>You can check : table.sql</li>

            </ul>
            <Link to="/login" >Got To Login Page</Link>
        </div>
    )
}

export default help;