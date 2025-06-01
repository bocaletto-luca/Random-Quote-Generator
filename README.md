# Random Quote Generator

**Author:** Bocaletto Luca  
**GitHub:** [bocaletto-luca](https://github.com/bocaletto-luca)  
**License:** GNU GPL v3  

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![API](https://img.shields.io/badge/API-ZenQuotes-9cf?style=flat-square&logo=data)

## Overview

**Random Quote Generator** is a single‑page web application that fetches motivational and inspiring quotes from the [ZenQuotes API](https://zenquotes.io/) (using a proxy to overcome CORS issues). In addition to retrieving random quotes, the app allows users to:
- **Save** their favorite quotes in a list.
- **Export** the saved quotes in various formats: JSON, CSV, and SQL.
- Enjoy a clean, responsive interface with a centered footer that displays "Bocaletto Luca".

## Features

- **Random Quote Fetching:**  
  Retrieve a new motivational quote on demand via the "Get Quote" button.
  
- **Saving Quotes:**  
  Add the currently displayed quote to a saved list by clicking the "Save Quote" button.
  
- **Export Options:**  
  Export your saved list of quotes as:
  - **JSON** for data interchange.
  - **CSV** for use in spreadsheets or data analysis.
  - **SQL** as a series of `INSERT` statements for database import.
  
- **Responsive Design:**  
  The app is designed to look great on both desktop and mobile devices.
  
- **Footer:**  
  Displays “Bocaletto Luca” centered at the bottom of the page.

## How It Works

1. **Get a Quote:**  
   When you click the **"Get Quote"** button, the app uses the [thingproxy.freeboard.io](https://thingproxy.freeboard.io/) proxy to fetch a random quote from the ZenQuotes API.

2. **Display the Quote:**  
   The retrieved quote (including both the quote text and the author) is displayed in the main content area.

3. **Save the Quote:**  
   Clicking **"Save Quote"** adds the current quote to a list shown below the main content. Only non-default quotes are saved.

4. **Exporting:**  
   Use the export buttons to download your saved quotes in your preferred format (JSON, CSV, or SQL).

## Technologies Used

- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **API:** [ZenQuotes API](https://zenquotes.io/) (accessed via a proxy)
- **Proxy Service:** [thingproxy.freeboard.io](https://thingproxy.freeboard.io/)

## How to Run

1. Clone or download this repository.
2. Open the `index.html` file in your preferred web browser.
3. Click the **"Get Quote"** button to begin fetching random quotes.
4. Save your favorite quotes and export the list using the provided options.

## Enjoy WebApp | By Bocaletto Luca
