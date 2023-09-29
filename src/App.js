import './App.css';
import { Routes, Route } from "react-router-dom";
import Register from './components/pages/Register'
import Login from './components/pages/Login'
import Home from './components/pages/Home'
import AuthRoute from './components/AuthRoute';
import Header from './components/templates/Header/Header'
// console.log(process.env.REACT_APP_SUPABASE_URL)
// console.log(process.env.REACT_APP_SUPABASE_KEY)

//process.env.REACT_APP_SUPABASE_URL
export default function App() {
  /*
  const [session, setSession] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
    return () => subscription.unsubscribe()
  }, [])

  if (!session) {
    return (
    <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />
    )
  }
  
  else {
    return (
      <div className='content_wrapper'>
         <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signup" element={<Login />} />
          </Routes>
        </BrowserRouter>
        <Header 
          supabaseClient={supabase} 
          session={session} 
        />
        <Home />
      </div>
      
    )
  }
  */
  return (
    <>
      {/*
      <div className='content_wrapper'>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
       </AuthProvider>
      </BrowserRouter>
      <Header />
          </div>
      */}
        <div className="content_wrapper">
        <Header />
          <Routes>
            <Route element={<AuthRoute />}>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
            </Route>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>

        </div>
    </> 
  )
}
