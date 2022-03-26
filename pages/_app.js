import { useRouter } from "next/router"
import {useState,useEffect,React} from "react" 
import UserContext from "../context/UserContext"
import AuthService from "../services/AuthService"
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [user,setUser] = useState(null)
  const router = useRouter()
  
  useEffect(async () => {
    const user = await AuthService.getUser()
    if(!user && pageProps.protected){
      console.log('YESSIR');
      router.push('/login')
    }
    if(user && (router.pathname === '/login' || router.pathname === '/signup')){
      router.push('/dashboard')
    }
    else if(user!=null){
      setUser(user)
    }
  }, [router.asPath]);


  if (pageProps.protected && !user) {
    return (
      <div>Loading...</div>
    )
  }

  const login = async (existingUser,data) => {
    if(existingUser){
      const path = await AuthService.loginUser(data)
      router.push(path)
    }else{
      const path = await AuthService.createUser(data)  
      router.push(path) 
    }
  }
  const logout = async () =>  {
    const path = await AuthService.logoutUser()
    router.push(path)
  }

  
  return (
    <UserContext.Provider value={{user,login,logout}}>
      <Component {...pageProps} />
    </UserContext.Provider>
  )
}

export default MyApp
