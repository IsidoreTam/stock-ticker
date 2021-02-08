import regeneratorRuntime from "regenerator-runtime";

function AlphaVantageModel(){
    this.apiBaseUrl = 'https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol='

    this.search = async function(search){
        let url = new URL (this.apiBaseUrl + search + '&apikey=IM93V6X6OXWLN65O')
        const req = await fetch(url);
        const res = await req.json();
        return res;
    }
}
export default AlphaVantageModel;