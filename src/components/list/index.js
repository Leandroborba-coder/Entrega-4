import React from 'react';
import './styles.css';

export default function List({class1, hora1, class2, hora2, class3, hora3}){
    return(
        <div className="list">
      

            <ul className="aula1">
                <li>{class1}</li>
                <li>{hora1}</li>

            </ul>

            <ul className="aula2">
                <li>{class2}</li>
                <li>{hora2}</li>

            </ul>
                
            <ul className="aula3">
                <li>{class3}</li>
                <li>{hora3}</li>
            </ul>

        </div>




    )


}