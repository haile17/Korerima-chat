import Home from  './pages/Home';
import Register from "./pages/Register";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./style.scss"
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';

function App() {

  const {currentUser} = useContext(AuthContext)

  const ProtectedRoute = ({childern}) =>{
    if(!currentUser){
      return <Navigate to="/login"/>
    }

    return childern
  };

  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>} />
          <Route path="login" element={<Login />} />
          <Route path="register" index element={<Register />} />    
        </Route>
      </Routes>    
    </BrowserRouter>
  );
}

export default App;
