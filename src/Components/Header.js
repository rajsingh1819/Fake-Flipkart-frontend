import React, { useState } from 'react'
import "../Components/Common.css"

import { Navbar, Nav, NavDropdown } from 'react-bootstrap'


import { Link, useNavigate } from 'react-router-dom'
function Header() {

    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("user-info"))
    function logout() {
        localStorage.clear();
        navigate('/list')

    }




    return (
        <div className='header'> <Navbar bg="dark" data-bs-theme="dark">

            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto  nav_bat_wraper"   >

                {
                    localStorage.getItem('user-info') ?
                        <>
                            {
                                user.role === "admin" ? <> <Link to="/add" className='borderStyle'>Add Product</Link>
                                    <Link to="/update" className='borderStyle'>Update Product</Link> </> : null
                            }
                            <Link to="/list" className='borderStyle'>Product List</Link>

                        </> :
                        <>
                            <Link to="/list" className='borderStyle'>Product List</Link>
                            <Link to="/login" className='borderStyle' >Login</Link>
                            <Link to="/register" className='borderStyle' >Register</Link>
                        </>
                }



            </Nav>
            {localStorage.getItem('user-info') ?
                <Nav style={{ marginRight: 40 }}  >
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



