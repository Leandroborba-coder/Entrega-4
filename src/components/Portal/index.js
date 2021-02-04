import React from 'react';
import './styles.css';
import logoufrj from '../../assets/logoufrj.PNG';
import logousuario from '../../assets/logousuario.PNG';

export default function Portal({portal, nome, aluna}){
    return(
<div className='portal-principal'>

    <div className="portal-principal2">
        <div className='portal'>
            <img src={logoufrj}/>
            <h1>{portal}</h1>
        </div>
    
        <div className="login-container">

            <div className='login'>
                <h4>{nome}</h4>
                <h6>{aluna}</h6>

            </div>

            <div className='simbolo-login'>
                <img src={logousuario}/>
            </div>
        </div>

    </div>
        
</div>
    );
}