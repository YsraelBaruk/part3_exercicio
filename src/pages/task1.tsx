import { Link } from 'react-router-dom';

const person = {
  name: 'Machado de Asis',
  theme: {
    backgroundColor: 'bg-zinc-700',
    color: 'text-white',
  },
};

export function Task1() {
  return (
    <div className="flex flex-col items-center m-2 justify-center">
      <Link to={'/'}>
        <p className="rounded-lg bg-red-500 px-5">Voltar</p>
      </Link>

      <div
        className={`${person.theme.backgroundColor} w-5/6 px-10 py-5 rounded-xl m-5 ${person.theme.color}`}
      >
        <h1>{person.name}'s Todos</h1>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Machado_de_Assis_by_Marc_Ferrez.jpg/800px-Machado_de_Assis_by_Marc_Ferrez.jpg"
          className="rounded-full w-1/2"
          alt="foto do Machado de Assis"
        />
        <ul className="list-disc">
          <li>Improve the videophone</li>
          <li>Prepare aeronautics lectures</li>
          <li>Work on the alcohol-fuelled engine</li>
        </ul>
      </div>
    </div>
  );
}
