import React, { useState, useEffect } from 'react'
import Header from './Header'
import { useNavigate } from 'react-router-dom';
import Footer from './Footer'
import { Button, Form } from 'react-bootstrap'

function AddProduct() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [file, setFile] = useState('');
    const [price, setPrice] = useState('');
    const [comment, setComment] = useState('');


    // error
    const [fileError, setFileError] = useState('')

    useEffect(() => {



        if (localStorage.getItem('user-info')) {
            let value = JSON.parse(localStorage.getItem("user-info"));
            // console.log("Add product user", value.name);
            value && value.name === "Admin" ? navigate("/add") : navigate('/list');
        }

    }, [])


    const submit = async (e) => {
        e.preventDefault();
        if (!name || !file || !price || !comment) {
            alert("Somthing wrong : Please Check your Input field !!!")

        }
        else {
            const formData = new FormData();
            formData.append("name", name);
            formData.append("image", file);
            formData.append("price", price);
            formData.append("comment", comment);




            // console.log(formData);
            const data = { name, file, price, comment };
            console.log(data);
            const url = "http://localhost:5000/products/post"

            let result = await fetch(url, {
                method: 'POST',
                body: formData,
            })
            result = await result.json();
            if (result) {
                alert(result.message);
                setName('');
                setFile('');
                setPrice('');
                setComment('');


            }
            else {
                alert("somthing went wrong")
                console.log(result.error);

            }


        }

    }


    return (
        <> <Header />
            <div className="col-sm-4 container text-center" >


                <h1>AddProduct</h1>
                <Form >
                    <input type='text' className="form-control mb-3" placeholder='product name' value={name} onChange={(e) => setName(e.target.value)} />
                    <input type='file' placeholder="uplode image only" className="form-control mb-1" onChange={(e) => setFile(e.target.files[0])} />
                    {fileError == file ? <p className="Erorr">please select image !!</p> : null}
                    <input type='text' className="form-control mb-3 mt-3" value={price} placeholder='price' onChange={(e) => setPrice(e.target.value)} />

                    <textarea className="form-control mb-3" value={comment} placeholder="Leave a comment here" onChange={(e) => setComment(e.target.value)} />
                    <Button onClick={(e) => submit(e)}>Add Data</Button>

                </Form >

            </div>
            <Footer />
        </>

    )
}

export default AddProduct