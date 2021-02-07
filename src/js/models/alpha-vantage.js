function AlphaVantageModel(){
    this.apiBaseUrl = 'https://www.alphavantage.co/query?function=OVERVIEW&symbol='

    this.query = async function(url){
        const req = await fetch(url);
        const res = await req.json();
        return res
    }

    this.search = function(search){
        let url = new URL (this.apiBaseUrl + search + '&apikey=IM93V6X6OXWLN65O')

        return this.query(url)
    }
}