

// fetch data for currency rate
let currOne = 'USD - United States Dollar';
let currTwo = 'EUR - Euro';

async function fetchData (cOne: string = currOne, cTwo: string = currTwo) {
    try {
        const url = `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${cOne.slice(0,3)}&to_currency=${cTwo.slice(0,3)}&apikey=${process.env.API_KEY}`;
        const response = await fetch(url);
        const data = await response.json();
        const rate = data['Realtime Currency Exchange Rate']['5. Exchange Rate'];
        return rate;
        
    } catch (error) {
        return error
    }
}

export default fetchData