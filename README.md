# OIM3690 — Web Development with AI

This repository contains my coursework, experiments, projects, and weekly learning notes for OIM3690.

## About This Repository

In this course I am learning how websites work and how artificial intelligence can support the development process.

The goal is not only to generate working code, but also to understand, evaluate, test, debug, and improve the code that AI produces.

As the course has progressed, I have also started using JavaScript to make webpages interactive, store data, respond to user actions, work with arrays and loops, and build small browser-based tools.

## Topics Covered So Far

- Git and GitHub
- GitHub Pages
- How the web works
- HTML
- Semantic HTML
- Markdown
- Prompting
- Reading AI-generated code
- AI-assisted development
- Agentic coding workflows
- Reviewing and refactoring AI-generated code
- CSS essentials
- CSS selectors and classes
- CSS layout
- CSS Grid
- Flexbox
- Responsive design
- AI-assisted debugging
- Browser DevTools
- HTML forms
- Form validation
- JavaScript fundamentals
- Variables with `const` and `let`
- JavaScript data types
- Strings, numbers, and booleans
- Arrays and objects
- Functions and parameters
- `return`
- Conditionals
- `if`, `else if`, and `else`
- Comparison operators
- Logical operators such as `&&` and `||`
- Event listeners
- DOM manipulation
- `querySelector()`
- `createElement()`
- `textContent`
- JavaScript arrays and loops
- Array indexes
- `for` loops
- Filtering, searching, counting, and totaling data
- `localStorage`
- `JSON.parse()`
- `JSON.stringify()`
- Filtering data
- Updating page content from JavaScript state

## Pages and Exercises

- `index.html` — main course homepage
- `hello.html` — HTML exercise for reading and understanding AI-generated code
- `about-me.html` — About Me page styled with CSS
- `contact.html` — class form exercise with required name, email, and message fields
- `todo.html` — JavaScript To-Do application
- `converter.html` — Celsius-to-Fahrenheit JavaScript converter
- `discount.html` — Member Discount exercise using a cart total, membership checkbox, and conditional logic
- `playlist.html` — Playlist page that displays songs from a JavaScript array
- `css/styles.css` — shared stylesheet
- `css/todo.css` — styling for the To-Do application
- `js/todo.js` — JavaScript for adding, completing, deleting, saving, and filtering tasks
- `js/playlist.js` — JavaScript array of songs and a `for` loop that adds each song to the page

## JavaScript Practice

### To-Do App

The To-Do App helped me practice how JavaScript state connects to what appears on a webpage.

The application can:

- Add tasks
- Mark tasks as complete
- Delete tasks
- Save tasks in `localStorage`
- Restore tasks after refreshing the page
- Filter tasks using All, Open, and Done
- Display different empty-state messages depending on the selected filter

### Temperature Converter

I created a Celsius-to-Fahrenheit converter to practice JavaScript functions and returning calculated values.

The converter uses a `toFahrenheit()` function and displays the result on the page with JavaScript.

### Member Discount

I created a Member Discount exercise to practice JavaScript conditionals and functions.

The page includes:

- A cart total input
- A membership checkbox
- A `getDiscount()` function
- Conditional logic using `if` and `else`
- A result that displays the discount on the page

This exercise helped me understand how a function can receive values, make a decision using conditions, and return a result.

### Playlist

I created a simple Playlist exercise to practice JavaScript arrays and loops.

The JavaScript contains an array of song titles and uses a `for` loop to visit each song in the array.

For each song, JavaScript creates a new list item with `createElement()`, adds the song title using `textContent`, and appends it to the playlist on the page.

This exercise helped me understand how arrays store multiple values and how loops can repeat the same action for every item in an array.

## Weekly Notes

My weekly reflections are stored in the `logs` folder:

- `logs/wk01.md`
- `logs/wk02.md`
- `logs/wk03.md`
- `logs/wk04.md`
- `logs/wk05.md`
- `logs/wk06.md`
- `logs/wk07.md`
- `logs/wk08.md`

These notes document what I worked on, problems I encountered, things I learned, observations about working with AI, and my progress understanding JavaScript.

Week 6 also includes my **Predict Before You Delete** exercise, where I predicted what would happen when specific JavaScript code was removed and then tested the result.

Week 7 focuses on reviewing and understanding JavaScript conditionals, logical operators, AI-generated code, and the Member Discount exercise.

Week 8 covers Mini Project 2 progress, walkthrough preparation, JavaScript arrays and loops, filtering and counting patterns, and the Playlist exercise.

---

# Mini Project 1

## Reid Begelman Portfolio

For Mini Project 1, I created a professional three-page portfolio website for Reid Begelman.

The purpose of the project is to give Reid a professional online presence where recruiters, employers, and professional contacts can quickly learn about his background, view his resume, and contact him.

The project includes:

- An About / Home page
- A Resume page
- A Contact page
- Reid's professional photograph
- Babson College background
- Marketing concentration
- Strategy and Consulting concentration
- Professional and leadership experience
- Restaurant Brands International internship experience
- RBI visual branding
- Full-time return offer information
- Resume PDF
- Phone number
- Email address
- LinkedIn profile
- Responsive design for desktop and mobile
- Consistent navigation across all pages
- Semantic HTML
- CSS Grid and Flexbox
- One shared external stylesheet
- An RB favicon
- Client feedback documentation
- Showcase feedback documentation

### Project Repository

[Reid Begelman Portfolio Repository](https://github.com/ashmohaghegh05/reid-begelman-portfolio)

### Live Website

[View the Reid Begelman Portfolio](https://ashmohaghegh05.github.io/reid-begelman-portfolio/)

---

# Mini Project 2

## Internship Application Tracker

For Mini Project 2, I created an interactive JavaScript tool for tracking internship applications.

The tool is designed to help me keep all of my internship applications in one place and quickly understand how my application process is going.

Instead of only displaying the information I enter, the tracker stores application data and calculates useful information from the full application state.

The project includes:

- Add Application form
- Company and role tracking
- Date applied
- Application status
- Notes
- Follow-up tracking
- Editable application statuses
- Editable follow-up checkboxes
- Delete application functionality
- Status filtering
- Reset All functionality
- Custom invalid-input messages
- Empty state
- No-results filter state
- After-reset state
- `localStorage` so data survives a page refresh
- Dynamic application rendering
- Responsive design
- Semantic HTML
- Plain HTML, CSS, and JavaScript with no framework or outside API

The tracker calculates:

- Total applications
- Active applications
- Interviews
- Offers
- Applications needing follow-up

### JavaScript State

The main application data is stored in an array of objects.

Each application remembers information such as:

- Company
- Role
- Date applied
- Status
- Follow-up status
- Notes
- Unique ID

The tracker saves this state to `localStorage` so applications remain after the browser is refreshed.

The main application flow is:

**User action → change state → save state → calculate updated results → render the page**

### Design Process

Before building the final interface, I compared three different design directions:

- Editorial Career Intelligence
- Precision Command Center
- Swiss Career Dossier

I selected **Swiss Career Dossier** because it made the calculated application progress easy to see while keeping the interface professional and distinctive.

The final design uses large typography, strong grid lines, numbered application records, a warm background, and a single blue accent.

### Project Repository

[Internship Application Tracker Repository](https://github.com/ashmohaghegh05/internship-application-tracker)

### Live Website

[View the Internship Application Tracker](https://ashmohaghegh05.github.io/internship-application-tracker/)
