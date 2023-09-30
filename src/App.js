import './App.css';
import { Routes, Route } from "react-router-dom";
import Register from './components/pages/Register'
import Login from './components/pages/Login'
import Home from './components/pages/Home'
import AuthRoute from './components/AuthRoute';
import Header from './components/templates/Header/Header'
import PasswordReset from './components/pages/PasswordReset'

export default function App() {
  return (
    <>
        <div className="content_wrapper">
        <Header />
          <Routes>
            <Route element={<AuthRoute />}>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
            </Route>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/passwordreset" element={<PasswordReset />} />
          </Routes>

        </div>
    </> 
  )
}
