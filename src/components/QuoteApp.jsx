import "./QuoteApp.css";

function QuoteApp() {
  return (
    <div className="container">
      <div className="quotes-app">
        <h1 className="quote-header">Quote.</h1>
        <i className="bx bxs-heart fav-icon"></i>
        <div className="quote">
          <i className="bx bxs-quote-alt-left left-quote"></i>
          <p className="quote-text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt
            mollitia aperiam doloribus, nostrum debitis asperiores?
          </p>
          <p className="quote-author">xyz</p>
          <i className="bx bxs-quote-alt-right right-quote"></i>
        </div>
        <div className="circles">
          <div className="circle-1"></div>
          <div className="circle-2"></div>
          <div className="circle-3"></div>
          <div className="circle-4"></div>
        </div>
        <div className="buttons">
          <button className="btn btn-new">New Quote</button>
          <button className="btn btn-fav">Add to Favorites</button>
        </div>
      </div>
    </div>
  );
}

export default QuoteApp;
