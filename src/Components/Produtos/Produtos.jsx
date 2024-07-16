import './Produtos.css'
import PropTypes from 'prop-types'
export function Produtos({nome, valor, disponibilidade, descricao}){
    return(
        <tr>    
            <td>{nome}</td>
            <td>R$ {valor}</td>
            <td>{disponibilidade}</td>
            <td>{descricao}</td>
          </tr>
    )
}

Produtos.propTypes = {  
    nome: PropTypes.string,
    valor: PropTypes.number,
    disponibilidade: PropTypes.string,
    descricao: PropTypes.string
};