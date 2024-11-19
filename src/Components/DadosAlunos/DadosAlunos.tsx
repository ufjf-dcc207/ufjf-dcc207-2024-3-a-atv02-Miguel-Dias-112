import { Aluno } from '../../App'
import './DadosAluno.css'
 function DadosAluno(aluno: Aluno) {
    return (
      <div className='dadosContainer'>
        {Object.entries(aluno).map(([nome, valor]) => {
          return (
            <div className='dadosData'>
              <h1>{nome}</h1>
              <p>{valor}</p>
            </div>
          )
          
        })}
       
  
      </div>
    )
  }
export default DadosAluno