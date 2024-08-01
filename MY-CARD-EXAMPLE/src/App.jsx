import { useState } from 'react'
import './App.css'
import Card from './components/card'
import Liked from './components/liked'
// import Statevariable from './components/state-variable'
// import Icon from './components/icon'



// import Section from './components/section1'




function App() {

  




  let house =
  {
    url:"https://images.unsplash.com/photo-1527181987506-69e789b4c7bb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type:"DETACHED House",
    age:5,
    price:"$750,000",
    address:"742 Evergreen Terrace",
    bedRooms:3,
    bathRooms:2,
    relter : {img:"", Name:"Tiffany ",cellPhone:"(555)-555-4321"},
}

let housesForSales =
[   
  
  
  {
    
    url: "https://images.unsplash.com/photo-1584738766473-61c083514bf4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  type:"Guest Room",
  age:5,
  price:"1Million",
  address:"Durban",
  bedRooms:3,
  bathRooms:2,
  



},  {url: "https://media.istockphoto.com/id/1516938158/photo/3d-render-of-forest-house-with-large-windows-at-night.jpg?s=1024x1024&w=is&k=20&c=5PDIlJWllBu4cM0EGckn6exbw1FLdqXstecQbSSdzJg=",
  type:"BednBreakfast",
  age:21,
  price:"R750,000",
  address:"Richmond",
  bedRooms:13,
  bathRooms:2,
  
},

{url:"https://images.unsplash.com/photo-1526000130-b9ea509bfbf3?q=80&w=1550&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  type:"Hotel",
  age:21,
  price:"R750,000",
  address:"Richmond",
  bedRooms:13,
  bathRooms:2,
  
},


{url: "https://media.istockphoto.com/id/1516938158/photo/3d-render-of-forest-house-with-large-windows-at-night.jpg?s=1024x1024&w=is&k=20&c=5PDIlJWllBu4cM0EGckn6exbw1FLdqXstecQbSSdzJg=",
  type:"GuestHouse",
  age:5666,
  price:"R750,000",
  address:"Pietermaritzburg",
  bedRooms:15,
  bathRooms:4,
},{
url: "https://images.unsplash.com/photo-1584738766473-61c083514bf4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
type:"Guest Room",
age:5,
price:"billion",
address:"Mlazi",
bedRooms:5,
bathRooms:7,




}


];



//  localStorage.setItem("house items", JSON.stringify(housesForSales) ) 

//  const storedhousesForSales = localStorage.getItem("house items")

// console.log(storedhousesForSales)



//DELETE
function Delete(){
  localStorage.removeItem("house items")
  console.log("item deleted")
}
Delete();


//RETRIEVE
localStorage.setItem("house items", JSON.stringify(housesForSales) ) 

const storedhousesForSales = localStorage.getItem("house items")

console.log(storedhousesForSales)

  return (
   <>
   {/* <Icon/>  */}
   <Card accommodation={house}/>
   <Card accommodation={housesForSales[0]}/>
   <Card accommodation={housesForSales[3]}/>
   <Card accommodation={housesForSales[2]}/>
   
   
   
  
   <Liked/> 
   {/* <Statevariable/> */}


   
   

 
   
   </>
  )

}

export default App
