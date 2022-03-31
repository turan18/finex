const FINNHUB_API_KEY = process.env.FINNHUB_API_KEY
const finnhub = require('finnhub');

const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = FINNHUB_API_KEY // Replace this
const finnhubClient = new finnhub.DefaultApi()

export default finnhubClient