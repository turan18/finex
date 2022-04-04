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
    const one_day = await getTimeSeriesData(json.data.coins[0].uuid,'24h')
    const one_month = await getTimeSeriesData(json.data.coins[0].uuid,'30d')
    const three_years = await getTimeSeriesData(json.data.coins[0].uuid,'3y')
    const five_years = await getTimeSeriesData(json.data.coins[0].uuid,'5y')

    return [json.data.coins.slice(0,5),{one_day,one_month,three_years,five_years}]
}

async function getCryptoByID(currencyId){
    const response = await fetch(BASE_URL + `/coin/${currencyId}`, {
        headers : {
            'X-Access-Token' : API_KEY,
            'Accept': 'application/json'
        }
    })
    const json = await response.json()
    const one_day = await getTimeSeriesData(currencyId,'24h')
    const one_month = await getTimeSeriesData(currencyId,'30d')
    const three_years = await getTimeSeriesData(currencyId,'3y')
    const five_years = await getTimeSeriesData(currencyId,'5y')
    return [json.data.coin,{one_day,one_month,three_years,five_years}]
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
    const response = await fetch(BASE_URL + `/coin/${currencyId}/history?timePeriod=${timePeriod}`, {
        headers : {
            'X-Access-Token' : API_KEY,
            'Accept': 'application/json'
        }
    })
    const json = await response.json()

    const data = json.data.history.filter(obj => obj.price != null).map(obj => {
        return [obj.timestamp * 1000,parseFloat(obj.price).toFixed(2)]
    })
    return data
}   


export default {getTopTwentyCrypto,getDashboardCrypto,getCryptoByID,getCryptoByName,getTimeSeriesData}
