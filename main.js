    "use strict";
    document.addEventListener("DOMContentLoaded", function () {
      const quoteDisplay = document.getElementById("quoteDisplay");
      const getQuoteBtn = document.getElementById("getQuoteBtn");
      const saveQuoteBtn = document.getElementById("saveQuoteBtn");
      const savedListEl = document.getElementById("savedList");
      const exportJSONBtn = document.getElementById("exportJSONBtn");
      const exportCSVBtn = document.getElementById("exportCSVBtn");
      const exportSQLBtn = document.getElementById("exportSQLBtn");

      // Create error message element
      const errorMsg = document.createElement("div");
      errorMsg.style.color = "#a00";
      errorMsg.style.marginTop = "10px";
      errorMsg.style.fontSize = "0.9rem";
      document.querySelector(".container").appendChild(errorMsg);

      // Array to store saved quotes
      let savedQuotes = [];

      // Using thingproxy.freeboard.io as a proxy to bypass CORS restrictions
      const proxyUrl = "https://thingproxy.freeboard.io/fetch/";
      const targetUrl = "https://zenquotes.io/api/random";

      // Function to fetch a random quote from the ZenQuotes API via the proxy
      function fetchQuote() {
        errorMsg.textContent = ""; // Clear previous errors
        fetch(proxyUrl + targetUrl)
          .then(response => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.json();
          })
          .then(data => {
            if (Array.isArray(data) && data.length > 0) {
              const quoteData = data[0];
              // Expected properties: 'q' for quote text and 'a' for author
              quoteDisplay.innerHTML = `<p>"${quoteData.q}"</p><p>&mdash; ${quoteData.a}</p>`;
            } else {
              throw new Error("Invalid data format received");
            }
          })
          .catch(error => {
            quoteDisplay.textContent = "Unable to fetch quote. Please try again.";
            errorMsg.textContent = error.message;
            console.error("Error fetching the quote:", error);
          });
      }

      // Function to update the saved quotes list on the UI
      function updateSavedList() {
        savedListEl.innerHTML = "";
        savedQuotes.forEach((quote, index) => {
          const li = document.createElement("li");
          li.textContent = quote;
          savedListEl.appendChild(li);
        });
      }

      // Function to save the current quote to the list
      function saveCurrentQuote() {
        let currentQuote = quoteDisplay.innerText.trim();
        // Only save if the quote is not the default text and not empty
        if (currentQuote && !currentQuote.includes("Click the button below")) {
          savedQuotes.push(currentQuote);
          updateSavedList();
        }
      }

      // Helper function to trigger file download
      function downloadExport(data, filename, type) {
        const blob = new Blob([data], { type: type });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.style.display = "none";
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      }

      // Export saved quotes as JSON
      function exportAsJSON() {
        const data = JSON.stringify(savedQuotes, null, 2);
        downloadExport(data, "quotes.json", "application/json");
      }

      // Export saved quotes as CSV
      function exportAsCSV() {
        let csv = "Quote\n";
        savedQuotes.forEach(quote => {
          const safeQuote = quote.replace(/"/g, '""');
          csv += `"${safeQuote}"\n`;
        });
        downloadExport(csv, "quotes.csv", "text/csv");
      }

      // Export saved quotes as SQL INSERT statements
      function exportAsSQL() {
        let sql = "";
        savedQuotes.forEach(quote => {
          const safeQuote = quote.replace(/'/g, "''");
          sql += `INSERT INTO quotes (quote) VALUES ('${safeQuote}');\n`;
        });
        downloadExport(sql, "quotes.sql", "text/plain");
      }

      // Event listeners for buttons
      getQuoteBtn.addEventListener("click", fetchQuote);
      saveQuoteBtn.addEventListener("click", saveCurrentQuote);
      exportJSONBtn.addEventListener("click", exportAsJSON);
      exportCSVBtn.addEventListener("click", exportAsCSV);
      exportSQLBtn.addEventListener("click", exportAsSQL);

      // Optionally, fetch a quote when the page loads
      fetchQuote();
    });
