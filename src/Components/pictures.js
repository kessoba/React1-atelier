import React, { Component, useEffect,useRef,useState, } from 'react'

import Picture from './picture';

export default function Pictures() {

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
      return images.map((name, index)=> <Picture imageName= {name}  
      index= {index} key={index} remooveImage = {handleRemooveImage}
       />)
    };

    function handleRemooveImage(index) {
      setImages(images.filter((image, i) => i != index ))
      
    }
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

    const inputToFocus = useRef(null);

    useEffect( ()=> {
    inputToFocus.current.focus();

  });
  const fruitsRef = useRef(null);
  const[fruitState,setFruitState] = useState(null);

    return(
      <div className='container mx-auto'>
      <div className='flex items-center justify-between flex-wrap '>
      <ImagesComponent/>
      </div>
      <button onClick={ () =>{ setFruitState('Mariama'); fruitsRef.current = 'Bah';}}>Ajouter une legende </button>
    <div>{fruitState} {fruitsRef.current} 
    </div>

      <div className='string'>
      <input ref={inputToFocus} type='text' className='border border-gray-600 rounded p-3 shadow mr-2 outline-none ' onChange={AjoutNom} />
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
