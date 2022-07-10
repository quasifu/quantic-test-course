import { Routes, Route } from 'react-router-dom';
import style from './App.module.scss';
import Header from './components/Header';
import Home from './pages/Home';
import { OrderContextProvider } from './context/OrderContext';

function App() {
  return (
    <div className={style.pageContainer}>
      <OrderContextProvider>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </OrderContextProvider>
    </div>
  );
}

export default App;
