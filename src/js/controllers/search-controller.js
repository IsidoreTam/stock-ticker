function SearchController (model, searchView, resultsView){
    this.model = model;
    this.searchView = searchView;
    this.resultsView = resultsView;

    // configUI this is the inital setup for the controller
    this.configUI = async function(){
        const data = await model.init();
    // pass the data to the view
        this.resultsView.configUI(data.results[0])
    }
    this.onCheckedHandler = (e)=> { console.log(this) }
    this.configUI()
    return this
}
export default SearchController