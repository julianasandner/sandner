import Animal from '../Animal';
import './Classificacao.css'

const Classificacao = (props) => {

    return (
        props.animais.length > 0 && <section className="classificacao" style={{ backgroundColor: props.corSecundaria }}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className="animais">
                {props.animais.map( animal => <Animal corDeFundo={props.corPrimaria} key={animal.nome} nome={animal.nome} brinco={animal.brinco} classificacao={animal.classificacao} imagem={animal.imagem} />)}
            </div>
        </section>
    )
}

export default Classificacao;