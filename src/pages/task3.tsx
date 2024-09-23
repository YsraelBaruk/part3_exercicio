import { Link } from 'react-router-dom';

const baseUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/';
const person = {
  name: 'Machado de Asis',
  theme: {
    backgroundColor: 'bg-zinc-700',
    color: 'text-white',
    imageSize: 'size-2/6',
  },
  imageId:
    'Machado_de_Assis_by_Marc_Ferrez.jpg/800px-Machado_de_Assis_by_Marc_Ferrez.jpg',
};

export function Task3() {
  return (
    <div className="flex flex-col items-center m-2 justify-center">
      <Link to={'/'}>
        <p className="rounded-lg bg-red-500 px-5">Voltar</p>
      </Link>

      <div
        className={`${person.theme.backgroundColor} w-5/6 px-10 py-5 rounded-xl m-5 ${person.theme.color}`}
      >
        <h1 className='text-xl'>{person.name}'s Todos</h1>
        <img
          src={`${baseUrl}${person.imageId}`}
          className={`rounded-full ${person.theme.imageSize}`}
          alt={person.name}
        />
        <ul className="list-disc">
          <li>Realismo psicológico profundo</li>
          <li>Narrativa inovadora e não confiável</li>
          <li>Crítica social e política incisiva</li>
        </ul>
      </div>
    </div>
  );
}
