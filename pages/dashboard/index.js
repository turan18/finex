import {React} from 'react'
import { useRouter } from 'next/router';
import * as jwt from 'jsonwebtoken'

async function handleLogout(router){
    const response = await fetch('api/user/logout')
    const goTo = await response.json()
    router.push(goTo.path)   
}

export default function dashboard(props) {
  const router = useRouter()
  return (
      <div>
        <h1>Hello, {props.user.username}</h1>
        <button className='p-2 bg-red-600 text-white' onClick={() => handleLogout(router)}>Logout</button>
      </div> 
  )
}

export async function getServerSideProps(context){
    const user = jwt.decode(context.req.cookies['jwtToken'])
    return {
        props: {
            user
        }
    }
}
