import { useState } from "react";
import "./QuoteApp.css";
import { useEffect } from "react";

const apiKey = import.meta.env.VITE_QUOTES_API;

function QuoteApp() {
  const [quote, setQuote] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  async function fetchQuote() {
    try {
      setIsLoading(true);
      const response = await fetch("https://api.api-ninjas.com/v1/quotes", {
        method: "GET",
        headers: {
          "X-Api-Key": apiKey,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok: " + response.statusText);
      }

      const result = await response.json();
      setQuote({
        text: result[0].quote,
        author: result[0].author,
      });
    } catch (error) {
      console.error("Error: ", error.message);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(function () {
    fetchQuote();
  }, []);

  return (
    <div className="container">
      <div className="quotes-app">
        <h1 className="quote-header">Quote.</h1>
        <i className="bx bxs-heart fav-icon"></i>
        {isLoading ? (
          <div className="loader">
            <div data-glitch="Loading..." className="glitch">
              Loading...
            </div>
          </div>
        ) : (
          <div className="quote">
            <i className="bx bxs-quote-alt-left left-quote"></i>
            <p className="quote-text">{quote.text}</p>
            <p className="quote-author">{quote.author}</p>
            <i className="bx bxs-quote-alt-right right-quote"></i>
          </div>
        )}
        <div className="circles">
          <div className="circle-1"></div>
          <div className="circle-2"></div>
          <div className="circle-3"></div>
          <div className="circle-4"></div>
        </div>
        <div className="buttons">
          <button className="btn btn-new" onClick={fetchQuote}>
            New Quote
          </button>
          <button className="btn btn-fav">Add to Favorites</button>
        </div>
      </div>
    </div>
  );
}

export default QuoteApp;
