# React News App

A React-based news application that fetches and displays real-time news articles using the NewsAPI. This project was developed as part of an internship to demonstrate modern React practices, including routing, custom hooks, error boundaries, and modular component design.

## Overview

The React News App provides users an intuitive interface to:
- Browse the latest news headlines.
- Filter articles by category (general, business, entertainment, etc.).
- Search for articles by keywords.
- View detailed news articles with images and content excerpts.

## Features

- **Real-Time News Fetching:** Integrates with NewsAPI to fetch up-to-date news.
- **Category Filtering:** Navigate news by various categories using URL query parameters.
- **Article Search:** Search functionality to explore news based on keywords.
- **Detailed Article View:** Each article provides a detailed view with additional information and a link to the full story.
- **Error Handling:** Implements an error boundary to gracefully handle runtime errors.

## Project Structure
react-news-app/
├── .env
├── package.json
└── src/
├── components/
│ ├── ErrorBoundary.jsx
│ ├── Navbar.jsx
│ ├── NewsItem.jsx
│ ├── NewsList.jsx
│ └── SearchBar.jsx
├── hooks/
│ └── useNewsApi.js
├── pages/
│ ├── Article.jsx
│ └── Home.jsx
├── App.js
└── index.js


- **components/**: Contains reusable UI components such as the Navbar, News List & Item, Search Bar, and Error Boundary.
- **hooks/**: Holds custom hooks, for instance, to fetch news using Axios.
- **pages/**: Contains main pages for navigation (Home and Article view).
- **.env:** Stores environment variables (e.g., NewsAPI key).

## Prerequisites

- Node.js (v12 or later)
- npm (or yarn)

## Getting Started

1. **Clone the Repository**

- git clone https://your-repository-url.git
- cd react-news-app


2. **Install Dependencies**

- npm install
  
This installs:
- **react & react-dom:** Core libraries for building the user interface.
- **react-router-dom:** For client-side routing.
- **axios:** For making HTTP requests to NewsAPI.

3. **Setup the `.env` File**

In the project root (same level as package.json), create a `.env` file and add your NewsAPI key:

- REACT_APP_NEWS_API_KEY=5668b0434cd54c26af8bab9666886098

Replace the above key with your actual NewsAPI key (obtainable from the NewsAPI website).

4. **Start the Development Server**

- npm start

The app will run locally at [http://localhost:3000](http://localhost:3000). Restart the server if you update the `.env` file.

## Building for Production

To create an optimized production build, run:

- npm run build

This command generates a production-ready version of your app in the `build/` directory.

## Additional Notes

- **Environment Variables:** If you're using Create React App, you do not need to install dotenv separately. Environment variables from the `.env` file in the root will be automatically available with the `REACT_APP_` prefix.
- **Styling:** You can adjust or integrate any CSS framework for a more polished look.
- **Error Boundaries:** The app includes an Error Boundary to help manage unexpected errors gracefully within the UI.

## License

This project is developed as part of an internship program and is intended for learning and development purposes.

Happy Coding!

