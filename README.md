# Random Quote Generator 💬✨ | WebAPP

**Author:** Bocaletto Luca  
**License:** GNU GPL v3

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![API](https://img.shields.io/badge/API-ZenQuotes-9cf?style=flat-square&logo=data)

[![Test Online](https://img.shields.io/badge/Test%20Online-Click%20Here-brightgreen?style=for-the-badge)](https://bocaletto-luca.github.io/Random-Quote-Generator/)

---

## Overview 🚀

**Random Quote Generator** is a sleek, client-side web application designed to fetch motivational and inspiring quotes from the [ZenQuotes API](https://zenquotes.io/) using a proxy service to overcome CORS restrictions. This app not only displays random quotes but also allows you to **save your favorite quotes** in an intuitive list and **export** them in various formats, including JSON, CSV, and SQL. Built with HTML5, CSS3, and vanilla JavaScript, this project boasts a modern, responsive interface that looks great on both desktop and mobile devices.

---

## Features 💡

- **Dynamic Quote Fetching**  
  ➡️ Retrieve a new inspirational quote on demand via the **Get Quote** button.

- **Save Favorite Quotes**  
  ➡️ Click **Save Quote** to add the currently displayed quote to your personal list. The saved list updates in real time.

- **Export Options**  
  ➡️ Easily export your saved quotes in multiple formats:  
  - **JSON:** For seamless data interchange.  
  - **CSV:** Ideal for spreadsheets and data analysis.  
  - **SQL:** Generates INSERT statements for database integration.

- **Responsive & Modern UI**  
  ➡️ A clean, user-friendly design crafted with HTML5 and CSS3, ensuring a great experience on any device.

---

## How It Works 🔧

1. **Fetch a Quote:**  
   - When the page loads or you click the **Get Quote** button, the application uses a proxy service (e.g., Thingproxy) to fetch a random quote from the ZenQuotes API.
   - The returned JSON data is then parsed to display both the quote text and the author.

2. **Save & Export:**  
   - Use the **Save Quote** button to add the current quote to an on-screen list.
   - Export your saved quotes using the provided export buttons (JSON, CSV, SQL), which dynamically generate and download the file in your chosen format.

3. **User Experience:**  
   - Enjoy immediate feedback with smooth transitions and clear typography that enhance readability and engagement.

---

## Technologies Used 🔥

- **Frontend:** HTML5, CSS3, Vanilla JavaScript  
- **API:** [ZenQuotes API](https://zenquotes.io/) (accessed via a proxy to manage CORS issues)  
- **Proxy Service:** Thingproxy (e.g., `https://thingproxy.freeboard.io/fetch/`)

---

## Installation & Usage ⚙️

1. **Clone or Download:**  
   Clone the repository or download the source code.

2. **Open the Application:**  
   Open the `index.html` file in your preferred web browser.

3. **Start Generating:**  
   Click **Get Quote** to fetch a random motivational quote. Save your favorites and export the list in your desired format.

---

## Contributing 🤝

Contributions are welcome!  
If you have ideas for enhancements or bug fixes, please fork the repository, make your changes, and open a pull request. For issues or feature requests, feel free to create a new issue.

---

This project is intended for developers who love clean, practical solutions and want to integrate inspiring functionality into their web applications. Happy coding!  
