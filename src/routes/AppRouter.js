import { Routes, Route } from "react-router-dom";

import { NotesPage, Login, Register } from '../pages';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={ <NotesPage /> } />
      <Route path='/login' element={ <Login /> } />
      <Route path='/register' element={ <Register /> } />
    </Routes>
  );
}
