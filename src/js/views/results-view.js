import ejs from "ejs";

const stockView=`
<aside class ="stock">
    <header><h3 class="symbol"><%= stock.symbol %></h3></header>

    <ul class = "details">
        <li>Name: <span><%= stock.name %></span> </li>
        <li>Price: <span><%= stock.price %></span> </li>
        <li>Currency: <span><%= stock.currency %></span> </li>
        <li>Exchange: <span><%= stock.exchange %></span> </li>
        <li>Country: <span><%= stock.country %></span>  </li>
        <li>Date: <span><%= stock.date %></span> </li>
    </ul>
</aside>`;
const noResultsView = `
<aside class="error">
  <header>
    <h3> There are no results matching this search</h3>
 <header>
</aside>
`;

function ResultsView(viewId) {
  var elem;

  this.container = document.querySelector(viewId);

  this.configUI = function (stock) {
    elem = ejs.render(stockview, { stock });
    this.container.insertAdjacentHTML("afterbegin", elem);
  };

  this.renderStocks = function (stocks){
    // if there are no people in the results
    this.removeChildElements();
    if (stocks.results.length === 0) {
      elem = ejs.render(noResultsView);
      this.container.insertAdjacentHTML("afterbegin", elem);
    }
    // search returns results
    else if (stocks.results !== 0){
      stocks.results.forEach((stock) => {
        elem = ejs.render(stockView, { stock });
      });
      this.container.insertAdjacentHTML("afterbegin", elem);
    }
  }
}