import React from 'react'
import Background from "../assets/background.jpg"
import Section from './section1';
import { CiHeart } from "react-icons/ci";

const Card = () => {
    
    return (
      
       
        <>
        <div className="center-box">


        <div className="section1">
        {/* <img src={Background} alt='ssss' className='bg' /> */}

        <CiHeart className='icon' />

        
        <div className='heart-button'></div>
    
        </div>
        <div className="section">Section 2</div>
        <div className="section">Section 3</div>
        <div className="section">Section 4</div>


        </div>
         </>  
      
    );
  };
  
  export default Card;