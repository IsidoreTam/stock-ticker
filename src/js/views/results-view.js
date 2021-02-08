import ejs from "ejs";

const stockView=`
<aside class ="stock">
    <header><h3 class="symbol"><%= sView.symbol %></span> </h3></header>
    <ul class = "details">
        <li>Price: <span><%= sView.price %></span> </li>
        <li>Date: <span><%= sView.date %></span> </li>
        <li>Previous Close: <span><%= sView.pClose %></span> </li>
        <li>Change: <span><%= sView.change %></span> </li>
        <li>Change Percent: <span><%= sView.cPercent %></span>  </li>
    </ul>
</aside>
`;
const noResultsView = `
<aside class="error">
  <header>
    <h3> There are no results matching this search</h3>
 <header>
</aside>
`;
function ResultsView(viewId) {
  this.container = document.querySelector(viewId);

  this.renderStocks = function (stock){
    // if there are no people in the results
    this.removeChildElements();

    let sView = {
      "symbol": stock.["Global Quote"].["01. symbol"],
      "price": stock.["Global Quote"].["05. price"],
      "date": stock.["Global Quote"].["07. latest trading day"],
      "pClose": stock.["Global Quote"].["08. previous close"],
      "change": stock.["Global Quote"].["09. change"],
      "cPercent": stock.["Global Quote"].["10. change percent"]
    }

    if (!stock) {
      const elem = ejs.render(noResultsView);
      this.container.insertAdjacentHTML("afterbegin", elem);
    }
    // search returns results
    else{
      const elem = ejs.render(stockView, { sView });
      this.container.insertAdjacentHTML("afterbegin", elem);
    }
  }
  this.removeChildElements = function () {
    this.container.querySelectorAll("aside").forEach((stock) => {
      this.container.removeChild(stock);
    });
  };
  return this;
}
export default ResultsView;