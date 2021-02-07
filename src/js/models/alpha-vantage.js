function AlphaVantageModel(){
    this.apiBaseUrl = 'https://www.alphavantage.co/query?function=OVERVIEW&symbol='

    this.search = function(search){
        let url = new URL (this.apiBaseUrl + search + '&apikey=IM93V6X6OXWLN65O')
        const req = fetch(url);
        const res = req.json();
        console.log(url);
        console.log(res);
        return res;
    }
}
export default AlphaVantageModel;