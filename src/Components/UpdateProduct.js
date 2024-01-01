import React, { useState, useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Button, Form } from 'react-bootstrap'

function UpdateProduct() {
  const data = useSelector((state) => state.Raducer1.data)
  // console.log("Update product get data", data);

  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [file, setFile] = useState('');
  const [price, setPrice] = useState('');
  const [comment, setComment] = useState('');
  const [productId, setProductId] = useState(null);

  useEffect(() => {
    setProductId(data.id);
    setName(data.name);
    setPrice(data.price);
    setComment(data.comment);
    if (localStorage.getItem('user-info')) {
      let value = JSON.parse(localStorage.getItem('user-info'))
      value && value.name === 'Admin' ? navigate('/update') : navigate('/list')

    }
  }, [])

  const update = async () => {

    console.log('update work');
    if (!name || !price || !file || !comment) {
      alert("Somthing wrong : Please Check your Input field !!!")


    }
    else {
      console.log({ productId, name, price, comment })
      const formData = new FormData();
      formData.append("name", name);
      formData.append("image", file);
      formData.append("price", price);
      formData.append("comment", comment);
      const url = "http://localhost:5000/products/update"
      let result = await fetch(`${url}/${productId}`, {
        method: 'PUT',
        body: formData
      })

      result = await result.json();
      if (result) {
        alert(result.message);
        setName('');
        setPrice('');
        setComment('');
        navigate('/list')

      }
      else {
        alert(result.error);
      }

    }


  }


  return (
    <div>
      <Header />
      <h1 className="text3">UpdateProduct</h1>

      <div className="col-sm-4 container text-center ">
        <Form >
          <input type='text' className="form-control mb-3" placeholder='product name' value={name} onChange={(e) => setName(e.target.value)} />
          <input type='file' placeholder="uplode image only" className="form-control mb-3" onChange={(e) => setFile(e.target.files[0])} />
          <input type='text' className="form-control mb-3" value={price} placeholder='price' onChange={(e) => setPrice(e.target.value)} />

          <textarea className="form-control mb-3" value={comment} placeholder="Leave a comment here" onChange={(e) => setComment(e.target.value)} />
          <Button onClick={(e) => update(e)}>Update Product</Button>
        </Form >
      </div>



      <Footer />
    </div>
  )
}

export default UpdateProduct