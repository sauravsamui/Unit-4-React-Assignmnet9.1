import React from 'react';
import styles from "./Form.module.css"
import {
    FormControl,
    Input,
    Button,
  } from '@chakra-ui/react'
import { useState } from 'react';
import { useRef } from 'react';
function FormikExample({show}) {

  const [details,setDetails] = useState({
    cname:"",
    cnumber:"",
     month:"",
     year:"",
     ccv:""
  })
  const ref = useRef()

   let handleSubmit =(e)=>{
       e.preventDefault()
       if(details.cnumber.length!=16){
        alert("please provide 16 digits");
        ref.current.focus();
        return
      }
      show(details)
      setDetails({
        cname:"",
        cnumber:"",
         month:"",
         year:"",
         ccv:""
      })
       console.log(details)
   }

   let handleChange =(e)=>{
     let {value,name} = e.target 
    
     setDetails({
       ...details,
       [name]:value
     })
   }


    return(
        <>
         <div className={styles.formDiv}>
           <h1  className={styles.header}>Payment Details</h1>
    <FormControl>
     
        <form onSubmit={handleSubmit}>
        <div className={styles.name}>
    <label className='label' htmlFor="">CARDHOLDER NAME</label>
  <div className={styles.iconD}><i className="material-icons">perm_identity</i><Input name="cname" value={details.cname} id='first-name' placeholder='CARDHOLDER NAME'
  onChange={handleChange}
  /></div>
  </div>
  <div className={styles.name}>
  <label className='label' htmlFor="">CARD NUMBER</label>
  <div className={styles.iconD}><i className="material-icons">credit_card</i><Input ref={ref} name="cnumber" type={details.cnumber} id='first-name' placeholder='CARD NUMBER'  
   onChange={handleChange}
  /></div>
  </div>
  <div className={styles.name1}>
    <div className={styles.expiry}>
    <label className='label' htmlFor="">EXPIRY MONTH</label>
  <div className={styles.secondiconD}><i className="material-icons">date_range</i><Input type="number" name="month" value={details.month} id='first-name' placeholder='MONTH' 
   onChange={handleChange}
  /></div>
    </div>
    <div className={styles.expiry}>
    <label className='label' htmlFor="">EXPIRY YEAR</label>
  <div className={styles.secondiconD}><i className="material-icons">date_range</i><Input name="year" value={details.year} id='first-name' placeholder='YEAR' 
   onChange={handleChange}
  /></div>
    </div>
    <div className={styles.expiry}>
    <label className='label' htmlFor="">CCV</label>
  <div className={styles.secondiconD}><i className="material-icons">lock_outline</i><Input name="ccv" value={details.ccv} id='first-name' placeholder='CCV' 
   onChange={handleChange}
  /></div>
    </div>
  </div>
  <div className={styles.payDiv}>
  <h1 className={styles.header}>Payment Amount : <span>₹ 12,300</span></h1>
  <Button id='button'
  size='md'
  height='48px'
  width='180px'
  color="white"
  fontSize="larger"
  backgroundColor={"rgb(243, 73, 101)"}
  type='submit'
>
  PAY
  </Button>
  </div>
  
  </form>
 
  
 
</FormControl>
</div>
    </>
    )
  }

export default FormikExample