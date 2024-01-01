import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import Header from '../Components/Header';

function CardItem() {
    const navigate = useNavigate();
    const data = useSelector((state) => state.Raducer1.data);
    console.log(data);
    useEffect(()=>{
            // navigate('/list')
            if(data){
                navigate('/card')
            }
            else{
                navigate('/list')
            }

    },[])
    return (
        <div>
            <Header/>
            <h1>CardItem</h1>
            {/* `http://localhost:5000/products/get/${item.image}` */}

            {
                data !==undefined ? 
                
               
                    <div style={{display:'flex', width:'50%'}}>
                        
                        <img src={`http://localhost:5000/products/get/${data.image}`} height={400} width={300}  alt={data.image}/>
                       
                        <div  style={{display:'flex', flexDirection:'column',justifyContent:'center'}}>
                            <h4>{data.name}</h4>
                            <h4>{data.price}</h4>
                            <h4>{data.comment}</h4>
    
                       </div>
                       {/* flex-direction: column-reverse;
    justify-content: center; */}
    
                    </div>
            
             
    
                  : navigate("/card")
            }
           
           
        </div>

    )
}

export default CardItem