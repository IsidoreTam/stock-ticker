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
    // form submit button handler
   this.onHandleSubmit = function(e) {
    e.preventDefault();
    const searchResponse = this.model.search(e.currentTarget.searchTerm.value)
    resultsView.renderStocks(searchResponse);
    }
    
    this.configListeners();
    return this
}
export default SearchController