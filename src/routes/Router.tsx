import { Routes, Route } from 'react-router-dom';
// import { routes } from '../constants/routes';

import Home from '../pages/home';
import About from '../pages/about';
import Contact from '../pages/contact';
import Login from '../pages/login';
import Modality from '../pages/modality';
import Schedule from '../pages/schedule';
import Student from '../pages/student';
import NotFound from '../pages/NotFound';

const Router = () => (
  <Routes>
    <Route path={'/'} element={<Home />} />
    <Route path={'/about'} element={<About />} />
    <Route path={'/contact'} element={<Contact />} />
    <Route path={'/login'} element={<Login />} />
    <Route path={'/modality'} element={<Modality />} />
    <Route path={'/schedule'} element={<Schedule />} />
    <Route path={'/student'} element={<Student />} />
    <Route path={'*'} element={<NotFound />} />
  </Routes>
);

export default Router;
