import React, { Component, useEffect,useState } from 'react'



export default function Picture() {

    // const  [myTimer,setMyTimer] = useState(null)
   const [images,setImages] = useState(
     [
        'logo.jpeg',
        'logo1.jpeg',
        'logo2.jpeg',
        'logo3.jpeg'
  
      ]
   )

   const [image,setImage]= useState(null);
   function AjoutNom(event) {
    setImage(event.target.value)

   };
    function ImagesComponent(){
      return images.map((name, index)=>{
        return (
          <div className='relative' key={index}>
              <button className='bg-white w-5 h-5 pb-2 font-thin rounded-xl text-center flex justify-center items-center absolute text-red-500 right-0 text-sm focus:outline-none'
               onClick={() =>  setImages(images.filter((image, i) => i != index ))}  
               >X</button>
            <img src={name} className="w-40 mx-auto" alt=""></img>
          </div>
        
        )
      })
    };
    function AjoutImageNom() {
      let newImage= [...images,image]
      setImages(newImage)
      
    }
    useEffect( () =>{

        const myTimer = setInterval( () =>{
            console.log('timer appelé')

        },1000)
        return()=> clearInterval(myTimer)
    })

    return(
      <div className='container mx-auto'>
      <div className='flex items-center justify-beetwen flex-wrap '>
      <ImagesComponent/>
      </div>
      <div className='string'>
      <input type='text' className='border border-gray-600 rounded p-3 shadow mr-2 outline-none ' onChange={AjoutNom} />
      <button type='submit' className='border border-gray-600 rounded p-3 shadow mr-2 text-white bg-blue-500 ' onClick={AjoutImageNom}>Ajouter image</button>
      </div>
      </div>
    )
    
}
// export default class Picture extends Component {
//     constructor(props){
//         super(props) ;
//         this.state = { timer : null} 
      
//       }

//     componentDidMount(){
//         this.setState({
//             timer: setInterval(()=>{
//                 console.log('timer component')
//             },1000)
//         })
//     }
//     componentWillUnmount(){
//         console.log('component picture')
//         clearInterval(this.state.timer)
//     };
    
//   render() {
//     console.log('render jsx')
//     return (
//         <img src="logo.jpeg" className="w-40 mx-auto" alt=""></img>

//     )
//   }
// }
