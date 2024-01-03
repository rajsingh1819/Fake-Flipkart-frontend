import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import Header from '../Components/Header';
import "../Containers/CommonStyle.css"
import { Button } from 'react-bootstrap';
import AutoSwiper from '../Components/Swiper/AutoSwiper';
import Footer from '../Components/Footer';
function CardItem() {
    const [valid, setValid] = useState(false);
    const navigate = useNavigate();
    const data = useSelector((state) => state.Raducer1.data);

    console.log(data);

    const userAction = () => {
        console.log("userAction target")

        if (localStorage.getItem('user-info')) {
            setValid(true)

        }
        else {
            setValid(false)
            navigate("/login")
            alert("User is not login So Please login !!!")
        }
    }

    function orderPlace() {
        if (window.confirm("CLICK OK for Confirm") == true) {
            alert("The order has been placed successfully !!!")

        }
        else {
            alert("You have concelled Your order")
        }
    }

    return (
        <div>
            <Header />

            <h1 className='CradHeader' >CardItem</h1>
            <AutoSwiper />


            {
                data !== undefined ?


                    <div className='cardFirst mt-5 mb-40'>
                        <div className='imgaeStyle'>
                            <img src={`http://localhost:5000/products/get/${data.image}`} className='cardImg' alt="Data doesn't available" />

                        </div>


                        <div className='cardSecond' >
                            <h4>{data.name}</h4>
                            <h4>₹{data.price}/-</h4>
                            <h4>{data.comment}</h4>
                            <div>
                                <Button className=' mb-3' onClick={() => userAction()}>Buy</Button>
                                <Button variant="danger mb-3">Add to cart</Button>

                            </div>





                        </div>

                        {
                            valid == true ?
                                <div className='cardThird' >
                                    <h3 className='mb-3'>Add Your Home Address</h3>
                                    <input type='text' className='form-control mb-3' placeholder='name' value={data.name} />
                                    <input type='text' className='form-control mb-3 ' placeholder='price' value={data.price} />
                                    <textarea placeholder='enter your full address' className='form-control mb-3' />

                                    <Button variant="success mb-3" onClick={() => orderPlace()} >Order Place</Button>
                                    <Button variant='warning' onClick={() => setValid(false)} >Cancel</Button>
                                </div>
                                : null
                        }

                    </div>



                    : navigate("/list")
            }


        </div>

    )
}

export default CardItem