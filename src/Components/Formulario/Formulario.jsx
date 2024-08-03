import "./Formulario.css";
import { useState } from "react";

export function Formulario({ onProdutoCadastrado }) {

  // Definindo estados usando o hook useState
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");
  const [disponibilidade, setDisponibilidade] = useState("1");

  function cadastraProduto(e) {
    e.preventDefault();
    // Cria um objeto com os dados do novo produto
    const novoProduto = {
      nome,
      descricao,
      valor: parseFloat(valor),
      disponibilidade: disponibilidade === "1" ? "Sim" : "Não"
    };

    // Chama a função de callback onProdutoCadastrado passando o objeto novoProduto.
    onProdutoCadastrado(novoProduto);
    // Reseta os inputs do forms
    setNome("");
    setDescricao("");
    setValor("");
    setDisponibilidade("1");
  }

  return (
    <section id="formulario">
      <form className="form animated-border" onSubmit={cadastraProduto}>
        <div className="mb-3">
          <label htmlFor="protudo_nome" className="form-label">
            Nome Do Produto
          </label>
          <input
            id="protudo_nome"
            type="text"
            className="form-control"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="produto_decricao" className="form-label">
            Descrição Do Produto
          </label>
          <textarea
            id="produto_decricao"
            className="form-control"
            rows="5"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="produto_valor" className="form-label">
            Valor Do Produto
          </label>
          <input
            id="produto_valor"
            className="form-control"
            type="number"
            inputMode="numeric"
            value={valor}
            onChange={(e) => setValor(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="produto_disponivel" className="form-label">
            Disponível Para Venda
          </label>
          <select
            id="produto_disponivel"
            className="form-select"
            value={disponibilidade}
            onChange={(e) => setDisponibilidade(e.target.value)}
            required
          >
            <option value="1">Sim</option>
            <option value="2">Não</option>
          </select>
        </div>

        <button type="submit" className="btn">
          Enviar
        </button>
      </form>
    </section>
  );
}
