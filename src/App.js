import './App.css';
import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import Header from './components/templates/Header/Header'
import Home from './components/pages/Home'

const supabase = createClient(process.env.REACT_APP_SUPABASE_URL, process.env.REACT_APP_SUPABASE_KEY)
//process.env.REACT_APP_SUPABASE_URL
export default function App() {
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
        <Header />
        <Home />
      </div>
      
    )
  }
}
