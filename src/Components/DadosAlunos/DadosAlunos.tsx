import { Aluno } from '../../App'

function Dado({nome, valor}: {nome: string, valor: string | number}) {
    return (
     <div>
       <h1>{nome}</h1>
       <p>{valor}</p>
     </div>
    )
 }
 
 function DadosAluno(aluno: Aluno) {
    return (
      <div>
        {Object.entries(aluno).map(([nome, valor]) => {
          return <Dado nome={nome} valor={valor} />
        })}
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
export default DadosAluno