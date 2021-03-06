import AlphaVantageModel from './models/alpha-vantage'
import SearchController from './controllers/search-controller'
import SearchView from './views/search-view'
import ResultsView from './views/results-view'
 
window.addEventListener('load', function(e){
    const model = new AlphaVantageModel()
    const searchView = new SearchView('#search')
    const resultsView = new ResultsView('#search')
    const controller = new SearchController(model, searchView, resultsView);
    controller.configUI()
})