import { BrowserRouter } from "react-router-dom";
import { AppRouter } from './routes'
import './App.css';

export const App = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}
