function SearchController (model, searchView, resultsView){
    this.model = model;
    this.searchView = searchView;
    this.resultsView = resultsView;

    // config the initial ui from data
    this.configUI = async function(){
        const data = await model.init();     
        resultsView.configUI(data.results[0]);
   }
    // form submit button handler
   this.onHandleSubmit = async (e)=> {
    e.preventDefault();
    // skipping over validation

    const searchResponse = await this.model.search(e.currentTarget.searchTerm.value)
    }
    this.configListeners();
    return this
}
export default SearchController