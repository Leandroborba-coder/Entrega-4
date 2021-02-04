import React from 'react';

import './styles.css';

function Grid(){
    return(

<div className="grid-container">

    <div className="horarios">
        <div className="hora">08:00</div>
        <div className="hora">10:00</div>
        <div className="hora">12:00</div>
        <div className="hora">13:00</div>
        <div className="hora">15:00</div>
        <div className="hora">17:00</div>
    </div>

    <table>

        <tr>
        
            <th>SEG</th>
            <th>TER</th>
            <th>QUA</th>
            <th>QUI</th>
            <th>SEX</th>
           
        </tr>

        <tr>
           <td></td>
           <td style={{backgroundColor:'rgb(51,225,248)'}}>intro ECA</td>
           <td></td>
           <td></td>
           <td></td>
        </tr>

        <tr>
            <td></td>
           <td></td>
           <td></td>
           <td></td>
           <td></td>
            
        </tr>

        <tr>
            <td></td>
           <td></td>
           <td></td>
           <td></td>
           <td></td>
            
        </tr>

        <tr>
            <td style={{backgroundColor:'rgb(255, 137, 206)'}}>ALG PROG</td>
           <td style={{backgroundColor:'yellow'}}>Quimica EE</td>
           <td style={{backgroundColor:'rgb(255, 137, 206)'}}>ALG PROG</td>
           <td style={{backgroundColor:'yellow'}}>Quimica EE</td>
           <td style={{backgroundColor:'rgb(255, 137, 206)'}}>ALG PROG</td>
            
        </tr>

        <tr>
            <td></td>
           <td></td>
           <td></td>
           <td></td>
           <td></td>
            
        </tr>

    </table>

</div>

    );




}

export default Grid;
