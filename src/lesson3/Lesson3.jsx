//  import React from 'react'

import button from "daisyui/components/button"
import { useState } from "react";


//  function Lesson3() {

// //     // — ReactJS nima?
// // — CRA va Vite farqini tushuntirib bering.
// // — Babel nima?
// // — JSX formati haqida ma'lumot bering.
// // — Nimaga React SPA deyiladi?
// // — Virtual DOM nima?
// // — Real DOM va Virtual DOM farqlarini tushuntirib bering.
// // — React file structure haqida ma'lumot bering.
// // — Strict Mode nima?
// // — Yuqoridagi savollarga javob beruvchi video darslik tayorlang.

//  let a= fetch("url").then().catch().finally()
//          name()
//  function name(params) {
    
//  } 


 let obj = {
    nmae:"ds",
    child:{
        name:"saliim"
    }
 }
  let a = {...obj}


   a.child.name = "hilijon"


//  a
// var a; a = 10
//    return (
//      <div>Lesson3</div>
//    )
//  }

//  export default Lesson3

//  function Button(params) {
//     return <button></button>
//  }

// let arr = ["olma","behi","olcha"]
//   let [a,b,c] = arr


function App() {
    const [data,setData] =  useState(0)  
   console.log(data);
   
    function add(n) {
         setData(prev=>prev + n)
         
    }

    return <>
        <p>{data}</p>
        <i class="fi fi-rr-user"></i>
        <button onClick={()=>add(2)}> ADD 2 </button>
        <button onClick={()=>add(5)}> ADD 5 </button>
    </>
}
export default App