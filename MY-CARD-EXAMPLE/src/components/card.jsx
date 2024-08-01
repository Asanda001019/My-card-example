import React from 'react'
import Background from "../assets/background.jpg"
import Section from './section1';
import { CiHeart } from "react-icons/ci";
import { IoBedOutline } from "react-icons/io5";
import { LiaBathSolid } from "react-icons/lia";
import Picture from "../assets/b.jpg";

const Card = () => {

    function Liked()  {
        console.log("is liked")


        
    }
        let isLiked = false;
        let iconColor = "WHITE"
    
    return (
      
       
        <>
        <div className="center-box">


        <div className="section1">
        {/* <img src={Background} alt='ssss' className='bg' /> */}
        


        <CiHeart size={50}  style={{color:iconColor}}  onClick={Liked} className='icon'/>

        
        {/* <CiHeart color={"red"} size={50} /> */}

        
        
    
        </div>
        <div className="section"><h5>DETACHED HOUSE . 5Y OLD</h5>
        <p>$750,000</p>
        <h4>742 Evergreen Terrace</h4>
        </div>

        <div className="section"><IoBedOutline className='bed'/>3 Bedrooms    <LiaBathSolid  className='bathroom'/>3 Bathrooms</div>
        <div className="section"><h3>REALTOR</h3>
        <img src={Picture} alt='ssss' className='b' />
        <h3 style={{color:"black"}}>Tiffany Heffner</h3>
        <h5>(555) 555-4321</h5>
        </div>


        </div>
         </>  
      
    );
  };
  
  export default Card;