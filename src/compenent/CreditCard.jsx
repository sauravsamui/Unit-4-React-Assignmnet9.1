import React from 'react'
import styles from "./Card.module.css"
const CreditCard = ({showDetails:{cname,cnumber,month,year,ccv}}) => {
  let first,second,third,fourth;
  cnumber = Number(cnumber)
   if(!cnumber){
      first =0;
      second = 0;
      third =0;
     fourth=0
   }
   else{
     fourth = cnumber%10000;
    cnumber = parseInt(cnumber/10000)
    third = cnumber%10000;
    cnumber = parseInt(cnumber/10000)
    second = cnumber%10000;
    cnumber = parseInt(cnumber/10000)
    first = cnumber%10000 
   }
  
  return (
    <div className={styles.cardDiv}>
 <div className={styles.shadowDiv}>
      
      </div>
     <div className={styles.card}>
       <div className={styles.visa}>
         <img className={styles.head} src='https://cdn-user-icons.flaticon.com/72264/72264074/1653830785818.svg?token=exp=1653831688~hmac=bf8c7f144b6d79ef6d1310a358a69a2d'/>
       </div>
       <div className={styles.imgDiv}>
         <img className={styles.img} src="https://cdn-icons-png.flaticon.com/512/3876/3876951.png" alt="emv" />
       </div>
       <div className={styles.numberDiv}>
         <h3>{first +"    "+ second +"     "+ third+"      "+fourth}</h3>
       </div>
       <div className={styles.detailsDiv}>
         <div className={styles.nameDiv}>
         <p>CARD HOLDER</p>
         <h4>{cname}</h4>
         </div>
         <div className={styles.expires}>
           <p>EXPIERS</p>
           
         <h4>{month}/{year%100}</h4>
         </div>
        <div className={styles.ccv}>
          <p>CCV</p>
          <h4>{ccv}</h4>
        </div>
       </div>
     </div>
    
    </div>
  )
}

export default CreditCard