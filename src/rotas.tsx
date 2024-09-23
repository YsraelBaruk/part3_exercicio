import { createBrowserRouter } from 'react-router-dom';
import { App } from './App';
import { Task1 } from './pages/task1';
import { Task2 } from './pages/task2';
import { Task3 } from './pages/task3';
import { Task4 } from './pages/task4/task4';

export const Rotas = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/task1',
    element: <Task1 />,
  },
  {
    path: '/task2',
    element: <Task2 />,
  },
  {
    path: '/task3',
    element: <Task3 />,
  },
  {
    path: '/task4',
    element: <Task4 />,
  },
]);
