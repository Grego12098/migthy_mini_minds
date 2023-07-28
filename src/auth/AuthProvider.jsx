import { useContext, createContext, useState, useEffect } from "react";
import { createClient } from '@supabase/supabase-js'


const supabase = createClient('https://gnxwynegvjpucphirksk.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdueHd5bmVndmpwdWNwaGlya3NrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA0OTgzNDcsImV4cCI6MjAwNjA3NDM0N30.c-ZQg_QsPwD2eJhd8BkNQpZh7MqJxTl9fWafVsMvVqQ')

const AuthContext = createContext();

export function AuthProvider({children}) {
  const [session, setSession] = useState(null);
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

  return (
    <AuthContext.Provider value={{session, supabase}}>
      {children}
    </AuthContext.Provider>
  );
}


export {AuthContext};
// export const useAuth = () => useContext(AuthContext);



