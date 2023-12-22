import React, { useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import image from "../Components/1780200.png"
import "../Components/Common.css"
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { listComponentData } from '../services/Action/action'
import { useNavigate } from 'react-router-dom'






function Product_List() {
    const user = JSON.parse(localStorage.getItem('user-info'));
    // console.log(data1.name);
    const navigate = useNavigate();
    const [data, setData] = useState([]);

    const dispatch = useDispatch();

    const editForm = (item) => {
        dispatch(listComponentData(item))
        navigate('/update')

    };



    const getData = async () => {
        const url = "http://localhost:5000/products/get"
        let result = await fetch(url);
        result = await result.json();
        console.log(result);

        if (result) {
            setData(result);
        }
    }
    const deleteData = async (id) => {
        const url = "http://localhost:5000/products/delete"

        if (window.confirm("Press a button for delete the data !!!") == true) {
            let result = await fetch(`${url}/${id}`, {
                method: 'DELETE',
            })
            result = await result.json();
            try {

                console.log(result);
                alert(result.message);
                getData();


            }
            catch {
                alert(result.error)

            }

        }







    }

    useEffect(() => {
        getData();


    }, [])

    console.log(data);



    return (

        <div>
            <Header />


            <h1>ProductList</h1>
            <div className='card'>
                <div className='form-row'>



                    {
                        data.map((item, i) =>
                            <div key={i} className='form-col'>

                                <img className='img' src={`http://localhost:5000/products/get/${item.image}`} alt={item.image} />
                                <p className='coloum'>{item.name}  </p>
                                <p className='coloum'> {item.price} </p>
                                <p className='Comment'> {item.comment} </p>
                                {
                                    user && user.name === "Admin" ? <div className='Action'>
                                        <Button variant="danger mb-3" onClick={() => deleteData(item.id)} >Delete</Button>
                                        <Button variant="primary" onClick={() => editForm(item)}>Edit</Button>

                                    </div> : null
                                }
                            </div>



                        )
                    }

                </div>
            </div>


            <div />
            <Footer />



        </div>



    )
}

export default Product_List