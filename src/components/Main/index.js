import React from 'react';
import './styles.css';
import Grid from '../Grid/index';
import List from '../list/index';


function Main({textstandard, name, course, periodo, nivel}){
    return(

                
<div className='main'>

    <div className="textopadrao">
        <h1>Visualização de Inscrição em Disciplina</h1>
        
    </div>
    

    <div className='main-header'>
        
        <div className="main-header-container1">
            <div>
                <div className="margemh4">{textstandard}</div>
                <div className="margemh4">{name}</div>
                <div className="margemh4">{course}</div>
            

            </div>
    
            <div className="infolateral">
                <div className="margemh4">{periodo} Período</div>
        
                <div className="margemh4"> Nível: {nivel}</div>

            </div>

        </div>

        <div className="main-header-container2">
            <div className="margemh4" >créditos 11</div>

        </div>
        
    </div>

    <div className="main-container">
        <Grid/>
        <List class1="Introdução à Engenharia e Controle de Automação" hora1="Ter - 8:00 às 10:00" class2="Algoritimos e Programação" hora2="Seg, Qua, Sex - 13:00 às 15:00" class3="Química EE" hora3="Ter, Qui - 13:00 às 15:00"/>

    </div>


</div>


    )

}

export default Main;