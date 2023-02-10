import { useState } from 'react'
import Botao from '../Botao';
import CampoDeTexto from '../CampoDeTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css'

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [brinco, setBrinco] = useState('')
    const [imagem, setImagem] = useState('')
    const [classificacao, setClassificacao] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.animalCadastrado({
            nome,
            brinco,
            imagem,
            classificacao
        })
        setNome('')
        setBrinco('')
        setImagem('')
        setClassificacao('')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha todos os campos abaixo com as informações:</h2>
                <CampoDeTexto 
                    label="Nome"
                    placeholder="Digite o nome do animal"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoDeTexto 
                    label="Número do brinco"
                    placeholder="Digite o número do brinco"
                    valor={brinco}
                    aoAlterado={valor => setBrinco(valor)} 
                />
                <CampoDeTexto 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)} 
                />
                <ListaSuspensa 
                    label="Classificação"
                    itens={props.classificacao}
                    valor={classificacao}
                    aoAlterado={valor => setClassificacao(valor)}
                />
                <Botao>
                    Criar Botão
                </Botao>
            </form>
        </section>
    )
}

export default Formulario;