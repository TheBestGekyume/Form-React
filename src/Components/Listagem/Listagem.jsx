import "./Listagem.css";
import { Produtos } from "../Produtos/Produtos";

export function Listagem({ produtos }) {
  const produtosOrdenados = [...produtos].sort((a, b) => a.valor - b.valor);

  return (
    <section id="listagem">
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

      <a href="#formulario" className="btn btn-primary m-5">+</a>
    </section>
  );
}
