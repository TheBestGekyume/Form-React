import "./styles/App.css";
import "./styles/reset.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Formulario } from "./Components/Formulario/Formulario.jsx";
import { Listagem } from "./Components/Listagem/Listagem.jsx";

function App() {
  const [produtos, setProdutos] = useState([]);

  const handleProdutoCadastrado = (novoProduto) => {
    // console.log('Vetor de produtos:', produtos);
    setProdutos([...produtos, novoProduto]);
    console.log('Vetor de produtos atualizado:', produtos);
    
  };

  return (
    <div id="app">
      <Formulario onProdutoCadastrado={handleProdutoCadastrado} />
      <Listagem produtos={produtos} />
    </div>
  );
}

export default App;
