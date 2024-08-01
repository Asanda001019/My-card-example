import { useState } from 'react'
import './App.css'
import Card from './components/card'
import Liked from './components/liked'
// import Statevariable from './components/state-variable'
// import Icon from './components/icon'



// import Section from './components/section1'




function App() {

  // localStorage.setItem("myCat", "Tom", ) {
         
          
        

  //         // Output: { a: 1, b: 2, c: 3 }
 
  // }


  const house = {
    
    house: "Evergreen",
    age:1434,
    bedrooms: 4,
    bathrooms: 2,
    fullname: "Tiffanny",
    cellphone:"55555"
  };







  return (
   <>
   {/* <Icon/>  */}
   <Card/>
   <Liked/> 
   {/* <Statevariable/> */}
   
   </>
  )

}

export default App
