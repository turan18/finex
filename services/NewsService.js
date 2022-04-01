import finnhubClient from "./client-sdk"

async function getDashboardNews(){
  
    const data = await new Promise((resolve,reject) =>{
        finnhubClient.marketNews("general", {}, (error, data, response) => {
            if(error){
                return reject(error)
            }
            return resolve(data)
        });
    })
    return JSON.parse(JSON.stringify(data.slice(0,5)))
}

async function getAllNews(){
  
    const data = await new Promise((resolve,reject) =>{
        finnhubClient.marketNews("general", {}, (error, data, response) => {
            if(error){
                return reject(error)
            }
            return resolve(data)
        });
    })
    return JSON.parse(JSON.stringify(data.slice(0,20)))
}



export default {getDashboardNews,getAllNews}