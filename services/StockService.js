const BASE_RECOMMENDATIONS_URL = 'https://yfapi.net/v6/finance'
const YAHOO_API_KEY = process.env.YAHOO_API_KEY

const BASE_URL = 'https://api.stockdata.org/v1'
const API_KEY = process.env.STOCK_API_KEY





async function getCompanies(){
    const endpoint = '/recommendationsbysymbol'
    const params = '/AMZN%2CGOOG%2CBAC%2CWMT%2CINTC%2CNKE%2CDIS%2CCMCSA%2CUPS'
    const response = await fetch(BASE_RECOMMENDATIONS_URL + endpoint + params,{
        headers : {
            'Accept': 'application/json',
            'X-API-KEY' : YAHOO_API_KEY
        }
    })
    const json = await response.json()
    const companies = new Set()
    for(let company of json.finance.result){
        companies.add(company.symbol)
        for(let r of company.recommendedSymbols){
            companies.add(r.symbol)
        }
    }  
    return Array.from(companies)
}

async function getTopFiveStock(){
    const c1 = await getCompanies()
    console.log(c1);
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
    

    const data = json_1.data.concat(json_2.data)
    return data

}

async function getTimeSeriesDataToday(symbol, interval='minute'){
    const endpoint = '/data/intraday'
    const todayDate = new Date().toJSON().slice(0,10)
    const params = `?symbols=${symbol}&interval=${interval}&date=${todayDate}&api_token=${API_KEY}`
    const response = await fetch(BASE_URL + endpoint + params,{
        headers : {
            'Accept': 'application/json'
        }
    })
    const json = await response.json()
    const data = json.data
    return data
}



export default {getTimeSeriesDataToday,getCompanies,getTopFiveStock}