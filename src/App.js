import './App.css';
import { Routes, Route } from "react-router-dom";
import Register from './components/pages/Register'
import Login from './components/pages/Login'
import Home from './components/pages/Home'
import Favourites from './components/pages/Favourites'
import Mylist from './components/pages/MyList'
import AuthRoute from './components/AuthRoute';
import Header from './components/templates/Header/Header'
import PasswordReset from './components/pages/PasswordReset'

export default function App() {
  return (
    <>
        <div className="content_wrapper">
        <Header />
          <div className='inside'>
            <Routes>
              <Route element={<AuthRoute />}>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/favourites" element={<Favourites />} />
                <Route path="/my-list" element={<Mylist />} />
              </Route>
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/passwordreset" element={<PasswordReset />} />
            </Routes>
          </div>


        </div>
    </> 
  )
}
