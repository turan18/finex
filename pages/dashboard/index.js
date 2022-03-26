import { useRouter } from 'next/router';
import {React} from 'react'
import useUser from '../../hooks/useUser';



export default function dashboard() {
    
    const {user,logout} = useUser()

    function handleLogout(){
        logout() 
    }
    return (
        <div>
            <h1>Hello, {user.username}</h1>
            <button className='p-2 bg-red-600 text-white' onClick={handleLogout}>Logout</button>
        </div> 
    )
}


export async function getStaticProps(context) {
    return {
      props: {
        protected: true
      }
    };
}
