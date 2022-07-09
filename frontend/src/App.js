import { Routes, Route } from 'react-router-dom';
import style from './App.module.scss';
import Header from './components/Header';
import Home from './pages/Home';
function App() {
  return (
    <div className={style.pageContainer}>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
