function AlphaVantageModel(){
    this.apiBaseUrl = 'https://www.alphavantage.co/query?function=OVERVIEW&symbol='

    this.query= async function(url){
        const req = await fetch(url);
        const res = await req.json();
        return res
     }
}