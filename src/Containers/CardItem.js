import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import Header from '../Components/Header';
import "../Containers/CommonStyle.css"
import { Button } from 'react-bootstrap';
function CardItem() {
    const navigate = useNavigate();
    const data = useSelector((state) => state.Raducer1.data);
    console.log(data);
   
    return (
        <div>
            <Header/>
            <h1 style={{textAlign:'center'}} >CardItem</h1>
            

            {
                data !==undefined ? 
                
               
                    <div style={{display:'flex', width:'50%'}}>
                        
                        <img  src={`http://localhost:5000/products/get/${data.image}`} height={400} width={400}  alt="Data doesn't available"/>
                       
                        <div  style={{display:'flex', flexDirection:'column',justifyContent:'center'}}>
                            <h4>{data.name}</h4>
                            <h4>{data.price}</h4>
                            <h4>{data.comment}</h4>
                            <div>
                                <Button>Buy</Button>
                                <Button variant="danger mt-3">Add to cart</Button>

                            </div>
    
                       </div>
    
                    </div>
            
             
    
                  : navigate("/list")
            }
           
           
        </div>

    )
}

export default CardItem