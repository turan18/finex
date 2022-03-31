const BASE_URL = 'https://api.stockdata.org/v1'
const API_KEY = process.env.STOCK_ORG_API_KEY
import finnhubClient from "./client-sdk"


async function getCompanies(){

    function getTechnology(){
        return new Promise((resolve,reject) => {
            finnhubClient.companyPeers("AAPL", (error, data, response) => {
                if(error){
                    return reject(error)
                }
                return resolve(data)
            })
        });
    }
    function getRetail(){
        return new Promise((resolve,reject) => {
            
            finnhubClient.companyPeers("WMT", (error, data, response) => {
                if(error){
                    return reject(error)
                }
                return resolve(data)
            })
        })
    }
    
    function getAutomotive(){
        return new Promise((resolve,reject) => {
            finnhubClient.companyPeers("F", (error, data, response) => {
                if(error){
                    return reject(error)
                }
                return resolve(data)
            })
        })
    }
    const tech = await getTechnology()
    const retail = await getRetail()
    const auto = await getAutomotive()
    return Array.from(new Set(...[tech.concat(retail).concat(auto)]))
  
}

async function getDashboardStocks(){
    const companies = (await getCompanies()).slice(0,5)
    const first_set = companies.slice(0,3)
    const second_set = companies.slice(3)
    const endpoint = '/data/quote'
    const symbols_1 = first_set.join(',')
    const symbols_2 = second_set.join(',')

    const params_1 = `?symbols=${symbols_1}&include_metadata=true&api_token=${API_KEY}`
    const params_2 = `?symbols=${symbols_2}&include_metadata=true&api_token=${API_KEY}`
;
    const response_1 = await fetch(BASE_URL + endpoint + params_1,{
        headers : {
            'Accept': 'application/json'
        }
    })
    const json_1 = await response_1.json()

    const response_2 = await fetch(BASE_URL + endpoint + params_2,{
        headers : {
            'Accept': 'application/json'
        }
    })
    const json_2 = await response_2.json()
    
    try{
        const data = json_1.data.concat(json_2.data)
    }
    catch(err){
        console.log(err);
        return []
    }
    return data
}

async function getTimeSeriesDataForOneDay(symbol, interval="1"){
    const todaysDate = Math.floor(Date.now() / 1000)
    const yesterdayDate = Math.floor((Date.now() / 1000)) - 86400
    
    const data = await new Promise((resolve,reject) => {
        finnhubClient.stockCandles(symbol,interval,yesterdayDate,todaysDate,(error, data, response) => {
            if(error){
                return reject(error)
            }else{
                return resolve(data)
            }
        });
    })
    return data
}



export default {getTimeSeriesDataForOneDay,getCompanies,getDashboardStocks}


//`https://finnhub.io/api/logo?symbol=${}`