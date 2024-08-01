import React, { useState } from 'react';
import { CiHeart } from "react-icons/ci";

function Liked()  {

    const [isLiked, setIsLiked] = useState(false);


let iconColor = "RED";

if (isLiked );
console.log('NOT LIKED');
iconColor = "white";



if (!isLiked );
console.log("LIKED");
iconColor = "red";


function isChanged(){

  return (
    <>
       <button onClick={isChanged}
>

<CiHeart color={"red"} size={50}/>
        
        </button>

       
        
    
{/* <CiHeart style={{color:iconColor}} /> */}

    </>
  )
}
}
export default Liked