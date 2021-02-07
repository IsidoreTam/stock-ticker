import regeneratorRuntime from "regenerator-runtime";

function SearchController (model, searchView, resultsView){
    this.model = model;
    this.searchView = searchView;
    this.searchView.setController(this);

    //config listeners
    this.configListeners =  () => {
        this.searchView.view.addEventListener("submit", this.onHandleSubmit)
    }
    // config the initial ui from data
    this.configUI = function(){
    }
    // submit button handler
   this.onHandleSubmit = async (e) => {
    e.preventDefault();
    const searchResponse = await this.model.search(e.currentTarget.searchTerm.value)
    console.log(searchResponse);
    resultsView.renderStocks(searchResponse);
    }
    
    this.configListeners();
    return this
}
export default SearchController