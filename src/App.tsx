import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../src/components/Header';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header sitename="Valerio Di Biagio" />
      <Routes>
        <Route path='/' />
        <Route path='project' />
        <Route path='project/:slug' />
        <Route path='aboutme' />
        <Route path='contacts' />
      </Routes>
    </BrowserRouter>
  );
};

export default App;