import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { useSelector } from 'react-redux'

function UpdateProduct() {
  const data = useSelector((state) => state.Raducer1.data)
  console.log("Update product get data", data);
  return (
    <div>
      <Header />
      <h1>UpdateProduct</h1>
      {/* <h1>UpdateProduct</h1>
      {data.length ? data.map((item, i) => <div key={i}>
        <h1>{item.name}</h1>
      </div>) : null
      } */}
      <h1>{data.id}</h1>
      <h1>{data.name}</h1>
      <h1>{data.price}</h1>




      <Footer />
    </div>
  )
}

export default UpdateProduct