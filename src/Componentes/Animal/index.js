import './Animal.css'

const Animal = ({ nome, imagem, brinco, classificacao, corDeFundo}) => {
    return (
        <div className="animal">
            <div className="cabecalho" style={{ backgroundColor: corDeFundo}}>
            <img src={imagem} alt={nome}/>
            </div>
            <div className="rodape">
                <h4>{nome}</h4>
                <h4>{brinco}</h4>
                <h5>{classificacao}</h5>
            </div>
        </div>

    )
}

export default Animal;