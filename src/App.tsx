import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../src/components/Header';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactsPage from './pages/ContactsPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header sitename="VDB" />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/projects' element={<ProjectsPage />} />
        <Route path='/projects/:slug' />
        <Route path='/aboutme' element={<AboutPage />} />
        <Route path='/contacts' element={<ContactsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;