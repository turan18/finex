const BASE_URL = "https://api.coinranking.com/v2"
const API_KEY = process.env.COIN_API_KEY


async function getTopTwentyCrypto(){
    const response = await fetch(BASE_URL + '/coins', {
        headers : {
            'X-Access-Token' : API_KEY,
            'Accept': 'application/json'
        }
    })
    const json = await response.json()
    return json.data.coins.slice(0,20)
}

async function getDashboardCrypto(){
    const response = await fetch(BASE_URL + '/coins', {
        headers : {
            'X-Access-Token' : API_KEY,
            'Accept': 'application/json'
        }
    })
    const json = await response.json()
    const chart = await getTimeSeriesData(json.data.coins[0].uuid)
    return [json.data.coins.slice(0,5),chart]
}

async function getCryptoByID(currencyId){
    const response = await fetch(BASE_URL + `/coin/${currencyId}`, {
        headers : {
            'X-Access-Token' : API_KEY,
            'Accept': 'application/json'
        }
    })
    const json = await response.json()
    return json.data.coins.slice(0,5)
}

async function getCryptoByName(name){
    const allCrpyto = getTopTwentyCrpyto()
    const crpyto = allCrpyto.filter((currency) =>  currency.name.toLowerCase() === name.toLowerCase())
    if(crpyto){
        return crpyto
    }else{
        return null
    }
}
async function getTimeSeriesData(currencyId,timePeriod="30d"){
    const response = await fetch(BASE_URL + `/coin/${currencyId}/history?timePeriod=30d`, {
        headers : {
            'X-Access-Token' : API_KEY,
            'Accept': 'application/json'
        }
    })
    const json = await response.json()
    return json.data.history
}   


export default {getTopTwentyCrypto,getDashboardCrypto,getCryptoByID,getCryptoByName,getTimeSeriesData}
