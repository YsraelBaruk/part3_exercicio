import { Link } from 'react-router-dom';

export function Task4() {
  return (
    <>
      <div className="flex flex-col items-center m-2 justify-center">
        <Link to={'/'}>
          <p className="rounded-lg bg-red-500 px-5">Voltar</p>
        </Link>
      </div>
    </>
  );
}
