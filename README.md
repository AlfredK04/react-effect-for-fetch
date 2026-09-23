# React Effect with Fetch

## Learning Objectives
- Explain the method signature of React’s effect hook
- Build a component with an effect hook that requests data from an API only on component mounting
- Build a component that has a state and an effect hook
- Build a component with an effect hook that watches for changes to a given value and triggers the effect
- Build a component that is passed data via props with an effect hook that watches for changes to a props value

## Set up
1. Fork this repository
2. Clone the forked repository onto your local machines
3. In the root directory, type `npm ci`, which installs dependencies for the project
4. Finally, type `npm run dev`, which starts a development server that runs your website in the browser.

## Instructions
The aim of the exercise is to practice fetching data and rendering lists.

Your goal is to build an app which looks something like this:
![](./assets/example_output.png)

In the `sections` folder you will find three sections (contained in sub-folders) to complete for this exercise. You 
have `Art`, `Users` and `Advice`.

Inside each sub-folder you will find:
- an `index.jsx` file for the logic of each section **build everything here and then break it down into components**
- a `template.html` that shows you an example of what your React components should create. Take note of `className` to get the styling working.
- a `components` folder with suggested components to create so you can practice props.

For each section you will need to make a fetch request using the following APIs:
- Art - https://boolean-uk-api-server.fly.dev/art
  - Note: Combine the base URL with an artworks "imageURL" property to form a complete URL to an image ( e.g. https://boolean-uk-api-server.fly.dev/images/self-portrait.jpg )
- Users - [https://boolean-uk-api-server.fly.dev/api-docs/#/contact/getAllContacts](https://boolean-uk-api-server.fly.dev/api-docs/#/contact/getAllContacts)
  - Note: The API URL looks like `https://boolean-uk-api-server.fly.dev/YOUR_GITHUB_USERNAME/contact` - replace `YOUR_GITHUB_USERNAME` with your actual github username
- Advice - https://api.adviceslip.com/

## Core Deliverables

The `Art` list should render:
- An image of the artwork
- The title of the artwork
- The artist's name
- The complete publication history as an unordered list

The `Users` list should render:
- A profile image
- The full name of the user
- The background colour of each list item should be set the the person's favourite colour
- The email of the user

> The `Advice` section is for the **Extension** only.

### Extension 1

The `Advice` slip section should render:
- A single random advice slip
- A list of favourtie advice slips

The `Advice` slip section should allow users to:
- Fetch another advice slip using a button
- Save an advice slip to favourites using a button
