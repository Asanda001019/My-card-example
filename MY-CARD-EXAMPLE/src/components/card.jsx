import React from 'react'
import Background from "../assets/background.jpg"
import Section from './section1';
import { CiHeart } from "react-icons/ci";
import { IoBedOutline } from "react-icons/io5";
import { LiaBathSolid } from "react-icons/lia";
import Picture from "../assets/b.jpg";

const Card = ({accommodation}) => {

console.log(accommodation)
console.log(accommodation.address)
console.log(accommodation.price)
console.log(accommodation.type)
console.log(accommodation.age)
console.log(accommodation.url)




    function Liked()  {
        console.log("is liked")


        
    }
        let isLiked = false;
        let iconColor = "WHITE"
    
    return (
      
       
        <>
        <div className="center-box">


        <div className="section1">
        <img src={accommodation.url}alt='ssss' className='bg' />
        


        <CiHeart size={50}  style={{color:iconColor}}  onClick={Liked} className='icon'/>

        
        {/* <CiHeart color={"red"} size={50} /> */}

        
        
    
        </div>
        <div className="section"><h5>{accommodation.type} {accommodation.age}</h5>
        <p>{accommodation.price}</p>
        <h4>{accommodation.address}</h4>
        </div>

        <div className="section"><IoBedOutline className='bed'/>3 Bedrooms    <LiaBathSolid  className='bathroom'/>3 Bathrooms</div>
        <div className="section"><h3>REALTOR</h3>
        <img src=  {accommodation.url} alt='ssss' className='b' />
        <h6 style={{color:"black"}}>Tiffany Heffner</h6>
        <h6>(555) 555-4321</h6>
        </div>


        </div>
         </>  
      
    );
  };
  
  export default Card;