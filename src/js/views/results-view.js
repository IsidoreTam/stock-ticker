import ejs from "ejs";

const stockView=`
<aside class ="stock">
    <header><h3 class="symbol"><%= stock.symbol %></h3></header>

    <ul class = "details">
        <li>Name: <span><%= stock.Name %></span> </li>
        <li>Price: <span><%= stock.Price %></span> </li>
        <li>Currency: <span><%= stock.Currency %></span> </li>
        <li>Exchange: <span><%= stock.Exchange %></span> </li>
        <li>Country: <span><%= stock.Country %></span>  </li>
        <li>Date: <span><%= stock.Date %></span> </li>
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

  this.configUI = function (stock) {
    const elem = ejs.render(stockview, { stock });
    this.container.insertAdjacentHTML("afterbegin", elem);
  };

  this.renderStocks = function (stock){
    // if there are no people in the results
    this.removeChildElements();

    console.log(stock);

    if (!stock) {
      const elem = ejs.render(noResultsView);
      this.container.insertAdjacentHTML("afterbegin", elem);
    }
    // search returns results
    else{
      const elem = ejs.render(stockView, { stock });
      this.container.insertAdjacentHTML("afterbegin", elem);
    }
  }
  this.removeChildElements = function () {
    this.container.querySelectorAll("aside").forEach((person) => {
      console.log("remove")
      console.log(person)
      this.container.removeChild(person);
    });
  };
  return this;
}
export default ResultsView;