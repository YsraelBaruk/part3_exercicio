import { Link } from 'react-router-dom';

export function App() {
  return (
    <>
      <div className="flex flex-col mt-10 space-y-10 items-center justify-center">
        <Link to={'/task1'}>
          <p className="rounded-lg bg-red-500 px-5">Atividade 1</p>
        </Link>
        <Link to={'/task2'}>
          <p className="rounded-lg bg-red-500 px-5">Atividade 2</p>
        </Link>
        <Link to={'/task3'}>
          <p className="rounded-lg bg-red-500 px-5">Atividade 3</p>
        </Link>
        <Link to={'/task4'}>
          <p className="rounded-lg bg-red-500 px-5">Atividade 4</p>
        </Link>
      </div>
    </>
  );
}
