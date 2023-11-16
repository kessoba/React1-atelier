import React, { useEffect, useRef, useState } from 'react'
import Picture from './picture';

 function App(){
      const [title,setTitle] = React.useState('coucou les amis');
      const[show,setShow] = React.useState(false);
      const isShowInitialize = useRef(false);

       useEffect( () => console.log('component monte'),[])
      function handleClick() {
        setShow(!show)
      }
      useEffect( ()=>{
        if(isShowInitialize.current){
          console.log('show mis à jour')

        }else{
          isShowInitialize.current = true

        }

      },[show])

  return(  
      <div>
      <h1 className='text-4xl text-green-700  my-5'>{title} </h1>
      <button className="bg-blue-900 text-white rounded py-4 px-3 " 
      onClick={handleClick} >Click</button>

      {show? < Picture/> :null}

    </div>
  );
}
 export default (App);
// class App extends React.Component{

//       constructor(props){
//         super(props) ;
//         this.state = { show :false , title : 'Bonjour'} 
      
//       }

//       componentDidMount(){
        
//         this.setState({title : "Asseyez-vous"})

//       }

//       componentDidUpdate(){

//         console.log('compenent update')
//       }

//     render(){
//       console.log('render appellé')
//         return <div>
//           <h1 className='text-4xl text-green-700  my-5'>{this.state.title} </h1>
//           <button className="bg-blue-900 text-white rounded py-4 px-3 " 
//           onClick={()=>this.setState({show: !this.state.show})} >Click</button>

//           {
//              this.state.show?
//              < Picture/>
//             :null
//           }
        
//         </div>
//     }
// }

// export default App