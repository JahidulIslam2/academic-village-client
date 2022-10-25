import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routes } from './components/routes/RouterProvider';

function App() {
  return (
    <div>
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
