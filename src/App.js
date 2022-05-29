
import './App.css';
import CreditCard from './compenent/CreditCard';
import FormikExample from './compenent/Form';
import  { useState } from 'react';

function App() {
const [showDetails,setShowDetails] = useState({cname:"",
    
month:"",
year:"",
ccv:""})

let show =(value)=>{
  setShowDetails(value)
}


  return (
    <div className="App">
      <CreditCard showDetails={showDetails}/>
      <FormikExample show={show}/>
    </div>
  );
}

export default App;
