import "./Listagem.css";
import React, { useState } from "react";
import { Produtos } from "../Produtos/Produtos";

export function Listagem({ produtos }) {

  const [ordenacao, setOrdenacao] = useState("1"); // Estado para ordenação

  // Função para lidar com a mudança na seleção de ordenação
  const handleOrdenacaoChange = (e) => {
    setOrdenacao(e.target.value);
  };

  // Ordena os produtos com base no estado de ordenação
  const produtosOrdenados = [...produtos].sort((a, b) => {
    
    switch (ordenacao) {
      case "1":
        return a.valor - b.valor; // Crescente
      case "2":
        return b.valor - a.valor; // Decrescente
      default:
        return 0; // Nenhuma ordenação aplicada por padrão
    }

  });



  return (
    <section id="listagem">
      <select
        id="ordenacao"
        className="form-select"
        aria-label="Default"
        value={ordenacao}
        onChange={handleOrdenacaoChange}
      >
        <option value="1">Crescente</option>
        <option value="2">Decrescente</option>
      </select>
      <table className="table table-dark table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th scope="col">Nome</th>
            <th scope="col">Valor</th>
            <th scope="col">Disponibilidade</th>
            <th scope="col">Descrição</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {produtosOrdenados.map((produto) => (
            <Produtos
              key={produto.nome}
              nome={produto.nome}
              valor={produto.valor}
              disponibilidade={produto.disponibilidade}
              descricao={produto.descricao}
            />
          ))}
        </tbody>
      </table>

      <a href="#formulario" className="btn btn-primary m-5">
        +
      </a>
    </section>
  );
}
