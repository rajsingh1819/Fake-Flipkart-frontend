import React, { useState } from 'react'
import "../Components/Common.css"

import { Navbar, Nav, NavDropdown } from 'react-bootstrap'


import { Link, useNavigate } from 'react-router-dom'
function Header() {

    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("user-info"))
    function logout() {
        localStorage.clear();
        navigate('/login')

    }




    return (
        <div className='header'> <Navbar bg="dark" data-bs-theme="dark">

            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto  nav_bat_wraper"   >

                {
                    localStorage.getItem('user-info') ?
                        <>
                            {user.name === "Admin" ? <> <Link to="/add">Add Product</Link> </> : null}
                            <Link to="/list">Product List</Link>
                            <Link to="/update">Update Product</Link>
                        </> :
                        <>
                            <Link to="/login" >Login</Link>
                            <Link to="/register" >Register</Link>
                        </>
                }





                {/* <Link to="/add">Add Product</Link>
                <Link to="/update">Update Product</Link>
                <Link to="/login" >Login</Link>
                <Link to="/register" >Register</Link> */}


            </Nav>
            {localStorage.getItem('user-info') ?
                <Nav style={{ marginRight: 40 }}>
                    <NavDropdown title={user && user.name}>
                        <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                        <NavDropdown.Item>Profile</NavDropdown.Item>
                    </NavDropdown>
                </Nav> : null

            }



        </Navbar>

        </div>
    )
}

export default Header



