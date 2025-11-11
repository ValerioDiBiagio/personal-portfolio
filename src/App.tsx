import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactsPage from './pages/ContactsPage';
import DefaultLayout from './layouts/DefaultLayout';
import ProjectsDetailsCard from './pages/ProjectsDetailsCard';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<ProjectsPage />} />
          <Route path='/projects/:slug' element={<ProjectsDetailsCard />} />
          <Route path='/aboutme' element={<AboutPage />} />
          <Route path='/contacts' element={<ContactsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;