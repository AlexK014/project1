
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dialogs from './Components/Header/Dialogs/Dialogs';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';

function App() {
  return (
    <div className="app">
      <Header />
      <Navbar />
      

      <div className='content'>
        <Routes>
          <Route path={'/profile'} element={<Profile/>}/>
          <Route path={'/dialogs'} element={<Dialogs />}/>

        </Routes>
        
      </div>
    </div>


  );
}

export default App;
