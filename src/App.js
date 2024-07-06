import React from 'react'
// import {Route,Routes,useNavigate} from 'react-router-dom';
// import Home from './componets/home';
// import About from './componets/about';
// import Conatact from './componets/conatact';
// import Useeffect from './componets/useeffect'
// import "./css/style.css"
// import props from './componets/props'
import Qrcodeproject from './componets/qrcodeproject'
// import Props from './componets/props'
// import Useeffect from './componets/useeffect'
// import Reactformusestate from './componets/reactformusestate'
// import Flourish from './componets/flourish'
const App = () => {
  // const navigate= useNavigate();
  // const nagvigateToNext = (currentpath) =>{
  //   switch(currentpath){
  //     case '/':
  //       navigate('/about');
  //       break;
  //     case '/about':
  //       navigate('/contact');
  //       break;
  //       default:
  //         navigate('/');
  //   }
  // }
  return (
    <>
    {/* <Useeffect  name="krithick" city="chennai" online="true" /> */}
     <Qrcodeproject />
     {/* <Props /> */}
     {/* <Useeffect /> */}
     {/* <Reactformusestate /> */}
     {/* <Flourish /> */}
     {/* <h1>hello</h1>
      <Routes >
        <Route path="/" element={()=> <Home nagvigateToNext={()=> nagvigateToNext('/')}/>}/>
        <Route path="/about" element={()=> <About nagvigateToNext={()=>nagvigateToNext('/about')} />} />
        <Route  path="/contact" element={Conatact} />
        </Routes> */}
     </>
  )
}

export default App
