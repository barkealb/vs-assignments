import { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Auth from './components/Auth';
import Public from './components/Public';
import Nav from './components/Nav';
import { UserContext } from './context/UserProvider';
import ProtectedRoute from './components/ProtectedRoute';



function App() {

  const { token } = useContext(UserContext)

  return (
    <div className="App">
      <Nav/>
      {token && <Public/>}
      <Routes>
`       <Route 
          path='/'
          element= {!token && <Auth/>}
        />
      </Routes>
      
    </div>
  );
}

export default App;
