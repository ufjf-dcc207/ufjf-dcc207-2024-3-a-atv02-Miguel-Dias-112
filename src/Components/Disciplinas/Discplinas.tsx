import { Disciplina } from '../../App'
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
  export default Disciplinas