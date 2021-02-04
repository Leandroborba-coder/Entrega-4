import React from 'react';
import './styles.css';

function Header({title1, title2, title3, title4, title5, title6, title7}){
    return(
    <div className='header'>

    
      <h2>{title1}</h2>
      <h2>{title2}</h2>
      <h2>{title3}</h2>
      <h2>{title4}</h2>
      <h2>{title5}</h2>
      <h2>{title6}</h2>
      <h2>{title7}</h2>

    </div>

    )
  
  }
  
  export default Header;
