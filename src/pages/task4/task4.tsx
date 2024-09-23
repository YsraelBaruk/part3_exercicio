import { Link } from 'react-router-dom'
import { people } from './people'

export function Task4() {
  const sortedPeople = [...people].sort((a, b) => {
    if (a.profissao === 'chemist' && b.profissao !== 'chemist') {
      return -1
      // biome-ignore lint/style/noUselessElse: <explanation>
    } else if (a.profissao !== 'Químico' && b.profissao === 'Químico') {
      return 1
    }
    return 0
  })

  const listPeople = sortedPeople.map(person => (
    <li className="flex" key={person.id}>
      <img
        className="w-32"
        src={person.imgUrl}
        alt={`Foto de(a) ${person.nome}`}
      />
      <p>
        <b>{person.nome}:</b>
        {' ' + person.profissao}
        {' ' + person.complemento}
      </p>
    </li>
  ))

  return (
    <>
      <div className="flex flex-col items-center m-2 justify-center">
        <Link to={'/'}>
          <p className="rounded-lg bg-red-500 px-5">Voltar</p>
        </Link>

        <article>
          <h1 className="text-3xl p-10 font-bold">Scientists</h1>
          <ul className="flex flex-col indent-5 gap-10">{listPeople}</ul>
        </article>
      </div>
    </>
  )
}
