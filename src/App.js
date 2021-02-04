
import './App.css';
import Header from './components/Header/index';
import Main from './components/Main/index';
import Portal from './components/Portal/index';


function App() {
  return (
    <>

      <div>

<Portal portal="Portal UFRJ" nome="Rosana Borges" aluna="Aluna"/>

<Header title1="Documentos" title2="Inscrição em Disciplinas" title3="Grades" title4="Dados Pessoais" title5="Pesquisa Avaliativa" title6="Requerimentos" title7="Ajuda"/>

<Main textstandard="Visualização de Inscrição em Disciplinas" name="Leandro Borba" course="Curso: Engenharia Mecânica" periodo="1" nivel="Graduação"/>

      </div>
    </>
  );
}

export default App;
