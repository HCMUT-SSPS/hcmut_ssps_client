import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { AdminRoutes, UserRoutes } from './routes';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<UserRoutes />} />
          <Route path='/admin/*' element={<AdminRoutes />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
