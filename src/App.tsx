
type Aluno = {
  nome: string
  matricula: number
  idade: number
  curso: string
  periodoLetivo: number
}
type Disciplina = {
  code: string,
  nome: string,
  dia: string,
  horaInicio: string,
  horaFim: string,
}
function DadosAluno(aluno: Aluno) {
  return (
    <div>
      <div>
        <h1>Matricula</h1>
        <h1>Situação</h1>
        <h1>Nome</h1>
        <h1>Curso</h1>
        <h1>Periodo</h1>
      </div>
      <div>
        <p>{aluno.matricula}</p>
        <p>{aluno.idade}</p>
        <p>{aluno.nome}</p>
        <p>{aluno.curso}</p>
        <p>{aluno.periodoLetivo}</p>
      </div>

    </div>
  )
}
function Disciplinas({ disciplinas }: { disciplinas: Disciplina[] }) {
  
  return (
    <div>
      <div>
        {disciplinas.map((disciplina) => (
          <div>
            <h2>{disciplina.code}</h2>
            <p>{disciplina.nome}</p>
            <p>{disciplina.dia}</p>
            <p>{disciplina.horaInicio}</p>
            <p>{disciplina.horaFim}</p>
          </div>
        ))}
      </div>
    </div>
  )
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
