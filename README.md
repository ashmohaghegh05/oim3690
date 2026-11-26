# OIM3690 — Web Development with AI

This repository contains my coursework, exercises, projects, and weekly learning notes for OIM3690.

## About This Repository

In this course, I am learning how websites work and how artificial intelligence can support the development process.

The goal is not only to generate working code, but also to understand, evaluate, test, debug, and improve the code that AI produces.

As the course has progressed, I have used JavaScript to make webpages interactive, store data, respond to user actions, work with APIs, and build browser-based tools and Chrome extensions.

## Topics Covered So Far

- Git and GitHub
- GitHub Pages
- How the web works
- HTML and semantic HTML
- Markdown
- Prompting and reading AI-generated code
- AI-assisted development and agentic coding workflows
- Reviewing and refactoring AI-generated code
- CSS essentials, selectors, and classes
- CSS layout, Grid, Flexbox, and responsive design
- AI-assisted debugging and Browser DevTools
- HTML forms and form validation
- JavaScript fundamentals
- Variables with `const` and `let`
- JavaScript data types, strings, numbers, and booleans
- Arrays and objects
- Functions, parameters, and `return`
- Conditionals, comparison operators, and logical operators
- Event listeners and DOM manipulation
- `querySelector()`, `createElement()`, and `textContent`
- JavaScript arrays, indexes, and `for` loops
- Filtering, searching, counting, and totaling data
- `localStorage`, `JSON.parse()`, and `JSON.stringify()`
- APIs, JSON responses, and `fetch()`
- `async` and `await`, `try/catch`, and `response.ok`
- GET and POST requests
- API keys and environment variables
- Serverless functions and Vercel deployment
- Calling an LLM API
- Chrome extensions and Manifest V3

## Pages and Exercises

- `index.html` — course homepage
- `hello.html` — exercise in reading and understanding AI-generated HTML
- `about-me.html` — About Me page styled with CSS
- `contact.html` — form exercise with required name, email, and message fields
- `todo.html` — JavaScript To-Do application
- `converter.html` — Celsius-to-Fahrenheit converter
- `discount.html` — Member Discount exercise using a cart total, checkbox, function, and conditionals
- `playlist.html` — page displaying songs from a JavaScript array
- `post-message.html` — Message Board exercise using a POST request
- `fetch-fun.html` — exercise that fetches API data and displays part of the response
- `ai-chat.html` — Ask AI exercise that sends a question to a serverless function
- `api/ask.js` — Vercel serverless function for the Ask AI exercise
- `buzzword-meter/` — Chrome extension exercise that counts buzzwords on job postings at `jobs.lever.co`
- `css/styles.css` — shared stylesheet
- `css/todo.css` — To-Do app stylesheet
- `js/todo.js` — To-Do app functionality
- `js/playlist.js` — playlist array and loop that adds songs to the page

## JavaScript Practice

### To-Do App

The To-Do App helped me practice how JavaScript state connects to what appears on a webpage.

The application can:

- Add tasks
- Mark tasks as complete
- Delete tasks
- Save tasks in `localStorage`
- Restore tasks after a refresh
- Filter tasks using All, Open, and Done
- Display different empty-state messages depending on the selected filter

### Temperature Converter

The Celsius-to-Fahrenheit converter helped me practice functions and returned values. It uses a `toFahrenheit()` function and displays the result on the page.

### Member Discount

The Member Discount exercise helped me practice functions and conditional logic. The page uses a cart total and membership checkbox to determine the discount returned by `getDiscount()`.

### Playlist

The Playlist exercise helped me practice arrays and loops. JavaScript goes through an array of song titles, creates a list item for each song, and adds it to the page.

### Message Board

The Message Board exercise helped me practice sending data to an API with a POST request. It includes a text box and button and uses my GitHub username as the token for the course API.

### Fetch Something Fun

This exercise helped me practice `fetch()`, `async` and `await`, JSON, and error handling. When the user clicks a button, the page fetches data from an API and displays a field from the response. The request uses `try/catch` and checks `response.ok`.

### Ask AI

The Ask AI exercise sends a question to an LLM through a Vercel serverless function. The API key is stored as a Vercel environment variable rather than in the public repository.

**Live Ask AI page:** [Open Ask AI](https://oim3690-kohl.vercel.app/ai-chat.html)

## Weekly Notes

My weekly notes are stored in the `logs` folder. They record my coursework, challenges, learning, and observations about working with AI.

- `logs/wk01.md`
- `logs/wk02.md`
- `logs/wk03.md`
- `logs/wk04.md`
- `logs/wk05.md`
- `logs/wk06.md`
- `logs/wk07.md`
- `logs/wk08.md`
- `logs/wk09.md`
- `logs/wk10.md`
- `logs/wk11.md`
- `logs/wk12.md`

Week 6 includes my Predict Before You Delete exercise, where I predicted what would happen when JavaScript code was removed and then tested the result.

Week 7 focuses on JavaScript conditionals, logical operators, AI-generated code, and the Member Discount exercise.

Week 8 covers Mini Project 2, walkthrough preparation, arrays and loops, filtering and counting, and the Playlist exercise.

Week 9 covers APIs, JSON, `fetch()`, asynchronous JavaScript, error handling, the Message Board, Fetch Something Fun, and my Mini Project 3 ideas.

Week 11 includes my questions for Mario Finocchiaro and the ideas I considered for Mini Project 4.

Week 12 includes my API mashup sentence.

## Mini Project 1 — Reid Begelman Portfolio

For Mini Project 1, I created a professional three-page portfolio website for Reid Begelman. It gives recruiters and professional contacts a place to learn about his background, view his resume, and contact him.

The project includes an About/Home page, a Resume page, a Contact page, responsive styling, semantic HTML, shared CSS, and a favicon.

- **Repository:** [Reid Begelman Portfolio](https://github.com/ashmohaghegh05/reid-begelman-portfolio)
- **Live website:** [View the portfolio](https://ashmohaghegh05.github.io/reid-begelman-portfolio/)

## Mini Project 2 — Internship Application Tracker

For Mini Project 2, I created an interactive JavaScript tool for tracking internship applications.

The tracker stores applications and calculates totals for all applications, active applications, interviews, offers, and follow-ups. It supports adding applications, editing statuses, marking follow-ups, filtering, deleting, resetting, and saving data in `localStorage`.

The main application flow is:

**User action → update state → save state → calculate results → render the page**

I compared three visual directions and chose **Swiss Career Dossier** for the final design.

- **Repository:** [Internship Application Tracker](https://github.com/ashmohaghegh05/internship-application-tracker)
- **Live website:** [Open the tracker](https://ashmohaghegh05.github.io/internship-application-tracker/)

## Mini Project 3 — Weather Outfit Planner

For Mini Project 3, I created a weather-based outfit planner that helps a user decide what to wear for a particular location, date, and occasion.

The planner uses Open-Meteo to retrieve weather information and gives a specific outfit recommendation based on conditions such as temperature, feels-like temperature, humidity, precipitation, snow, and wind.

- **Repository:** [Weather Outfit Planner](https://github.com/ashmohaghegh05/weather-outfit-planner)
- **Live website:** [Open the planner](https://ashmohaghegh05.github.io/weather-outfit-planner/)

## Mini Project 4 — Replay Lab

For Mini Project 4, I created **Replay Lab — The Study Time Machine**, a Chrome extension for students and other people learning from educational videos on YouTube.

The extension lets learners save a video moment, add timestamped notes, replay a saved section, and mark moments as understood. It stores each video’s bookmarks and notes separately using Chrome extension storage.

- **Repository:** [Replay Lab](https://github.com/ashmohaghegh05/youtube-replay-lab)
- **Live website and installation instructions:** [Open Replay Lab](https://ashmohaghegh05.github.io/youtube-replay-lab/)

## Mini Project 4 Class Exercise — Buzzword Meter

The `buzzword-meter/` folder contains the Chrome extension exercise from class. The extension counts buzzwords on job postings at `jobs.lever.co` and applies a design direction from the browser-extension lesson.

## Checkpoint 6 Weekly Note Exercises

The required writing for the weekly-note exercises is included in:

- `logs/wk11.md` — two questions for Mario Finocchiaro, one unexpected thing he said, and three Mini Project 4 ideas under `## MP4 Wish List`, with the selected idea marked
- `logs/wk12.md` — the API mashup sentence under `## API mashup`
