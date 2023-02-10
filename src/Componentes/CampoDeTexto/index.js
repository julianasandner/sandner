import './CampoDeTexto.css'

const CampoDeTexto = (props) => {

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} placeholder={props.placeholder}></input>
        </div>
    )
}

export default CampoDeTexto;