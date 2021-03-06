import {useState,React} from 'react'
import useUser from '../hooks/useUser'

export default function login() {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const {login} = useUser()

    async function loginHandler(e){
        e.preventDefault()
        login(true,{username,password})

    }

    return (
        <div className='w-screen h-screen bg-landing bg-no-repeat bg-center bg-fixed bg-cover flex flex-col justify-center items-center gap-y-6'>
            <div className='h-60 w-2/3 lg:w-1/5 md:w-5/12 bg-slate-800 text-white p-4 rounded-xl flex flex-col shadow-md shadow-indigo-600'>
                <div className='flex justify-center'>
                    <p className='text-3xl font-extrabold'>Login and enjoy.</p>
                </div>
    
                <div className='flex-1'>
                    <form method='post' className='h-full flex flex-col justify-evenly' onSubmit={loginHandler}>
                        <div className='flex flex-col font-bold'>
                            <input type={'text'} className='py-3 px-2 rounded-sm outline-0 border-0 focus:border-b-2 focus:border-b-slate-600 bg-slate-700' placeholder='Username' name='username' onChange={(e) => setUsername(e.target.value)} required></input>
                        </div>
                        <div className='flex flex-col font-bold'>
                            <input type={'password'} className='py-3 px-2 rounded-sm outline-0 border-0 focus:border-b-2 focus:border-b-slate-600 bg-slate-700' placeholder='Password' name='password' onChange={(e) => setPassword(e.target.value)} required></input>
                        </div>
    
                        <div className='flex items-center justify-center mt-6'>
                            <button type={'submit'} className='w-2/3 px-2 py-3 rounded-lg bg-indigo-800 text-white'>Login</button>
                        </div>
                    </form>
                </div>
                
            </div>
        </div>  
        )
    
}

export async function getStaticProps(context) {
    return {
      props: {
        protected: false
      }
    };
}
