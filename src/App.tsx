
type Aluno = {
  nome: string
  matricula: number
  idade: number
  curso: string
  periodoLetivo: number
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
function App() {
  const aluno = {
    nome: 'Fulano',
    matricula: 123456,
    idade: 18,
    curso: 'Ciência da Computação',
    periodoLetivo: 2021,
  }
  return (
    <div>
      <DadosAluno {...aluno} />
    </div>  )
}

export default App
