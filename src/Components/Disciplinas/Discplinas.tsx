import { Disciplina } from '../../App'
import './Disciplinas.css'
function Disciplinas({ disciplinas }: { disciplinas: Disciplina[] }) {
  
    return (
      
        <div className='disciplinasContainer'>
          {disciplinas.map((disciplina) => (
            <div className='disciplinaData'>
              <h2>{disciplina.code}</h2>
              <p>{disciplina.nome}</p>
              <p>{disciplina.dia}</p>
              <p>{disciplina.horaInicio}</p>
              <p>{disciplina.horaFim}</p>
            </div>
          ))}
        </div>
    
    )
  }
  export default Disciplinas