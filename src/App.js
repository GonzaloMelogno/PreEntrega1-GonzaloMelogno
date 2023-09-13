import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner';
import NavBar from './components/NavBar/NabBar';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div id= "carro">
      <NavBar  />
      <ItemListConteiner 
greetings= {'Aca voy a mostrar ropita'}  />
    </div>
  );
}

export default App;
