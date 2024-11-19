import DadosAluno from "./Components/DadosAlunos/DadosAlunos"
import Disciplinas from "./Components/Disciplinas/Discplinas"
export type Aluno = {
  nome: string
  matricula: number
  idade: number
  curso: string
  periodoLetivo: number
}
export type Disciplina = {
  code: string,
  nome: string,
  dia: string,
  horaInicio: string,
  horaFim: string,
}


function App() {
  const aluno = {
    nome: 'Fulano',
    matricula: 123456,
    idade: 18,
    curso: 'Ciência da Computação',
    periodoLetivo: 2021,
  }
  const disciplinas:Disciplina[] = [
    {
      code: 'CC123',
      nome: 'Introdução a Ciência da Computação',
      dia: 'Segunda',
      horaInicio: '14:00',
      horaFim: '16:00',
    },
    {
      code: 'CC124',
      nome: 'Introdução a Programação',
      dia: 'Terça',
      horaInicio: '14:00',
      horaFim: '16:00',}]
  return (
    <div>
      <DadosAluno {...aluno} />
      <Disciplinas disciplinas={disciplinas} />
    </div>  )
}

export default App
