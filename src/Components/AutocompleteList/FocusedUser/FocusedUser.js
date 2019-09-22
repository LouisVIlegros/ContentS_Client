import React from 'react';
import classes from './FocusedUser.module.css'



export default (props) => {
  console.log(props)
  return (
  
      <div className={classes.card}>
  <img src={props.focusUser.photo} alt="John" style={{width:'100%'}} />
  <h1>{props.focusUser.first_name} {props.focusUser.last_name}</h1>
  <p className={classes.title}>{props.focusUser.profil}</p>
  <p>{props.focusUser.profil}</p>
  <div>
<p>{props.focusUser.email}</p>
  </div>
  <p><button>Contact</button></p>
</div>
   


  );
}

