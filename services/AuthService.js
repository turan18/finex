async function createUser(data,router){
    const response = await fetch('/api/user/signup', {
        method : 'post',
        body : JSON.stringify(data),
        headers: new Headers({
            'Content-Type': 'application/json',
            Accept: 'application/json',
        }), 
      })
    if(response.status != 201){
        console.log('Cannot signup.');
    }else{
        router.push('/dashboard')
    }
}

async function loginUser(data,router){
    const response = await fetch('/api/user/login', {
        method: 'post',
        body : JSON.stringify(data),
        headers: new Headers({
            'Content-Type': 'application/json',
            Accept: 'application/json',
        }), 
    })
    if(response.status != 200){
        console.log('Cannot login.');
    }else{
        router.push('/dashboard')
    }
}

export default {createUser,loginUser}
