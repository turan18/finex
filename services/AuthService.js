
async function createUser(data){
    const response = await fetch('/api/user/signup', {
        method : 'post',
        body : JSON.stringify(data),
        headers: new Headers({
            'Content-Type' : 'application/json',
            Accept: 'application/json',
        }), 
    })
    if(response.status == 201){
        return '/dashboard'
    }else{
        return '/signup'
    }
}

async function loginUser(data){
    const response = await fetch('/api/user/login', {
        method: 'POST',
        body : JSON.stringify(data),
        headers: new Headers({
            'Content-Type': 'application/json',
            Accept: 'application/json',
        }), 
    })
    if(response.status == 200){
        return '/dashboard'
    }else{
        return '/login'
    }
    
}

async function getUser(){
    const response = await fetch('/api/user/retrieve')
    if(response.status == 200){
        const user = await response.json()
        return user
    }else{
        return null
    }
    
}

async function logoutUser(){
    const response = await fetch('/api/user/logout')
    const pathObject = await response.json()
    return pathObject.path
}
export default {createUser,loginUser,getUser,logoutUser}
