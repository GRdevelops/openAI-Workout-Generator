# OpenAI Workout Generator

This is a dynamic and user-friendly fitness application built with React. 
This app leverages OpenAI LLM and its API to retrieve information such as workout exercises and their ideal combinations based on user goals, equipment and preferences. 

User info is collected through a form where the state is updated with each input. 
User Data is then collected as a state object and used as a reference during API communication. 
OpenAI LLM (Language Learning Model) is given the instruction to respond in a JSON format, the response is then converted into a javascript object.
The output has an expected structure, with days as the first keys and exercises as children objects. This allows me to store specific data into variables and map each day to dynamically populate UI elements only if needed and as I visually want.

## Technologies

- **REACT**
- **OPENAI API**
- **EMOTION**, CSS-in-JS styling
- **VITE**, Bundler
- **AUTH0**, Authentication

## Deployment

This project is live at https://open-ai-workout-generator.vercel.app/.

<img src="./public/homepage-screen.png" alt="Component Map" width="500"/>

## Key Features

- **Dynamic experience**: Footer and User Profile after login change based on user's fitness goals.
- **Workout data dynamically populates the UI**: UI tables are generated only if there is data for that day and variables are extracted from the response and displayed on the tables with a defined structure.
- **Modular Software Design**: Each component is crafted to be as modular as possible, ensuring a clean separation of concerns and responsibilities between components. Custom Hooks and functions like "useOutsideClicks" are reused across different components.
- **Emotion & Reusable Styles**: To avoid the clutter and inconvenience of traditional CSS, I used Emotion. It allowed me to style components directly within their files and integrate them with a theme styles file.
- **Serverless Functions with Vercel**: Inside the API folder you can see the serverless functions I used to make the calls to Openai API, which usually would require a dedicated server, which I successfully implemented before discovering the convenience of serverless (see server repository in my profile).
- **Authentication with Auth0**: Minimum setup to implement authentication.

## Learning Journey

This project was a learning curve in understanding what it takes to build a functional product from 0 to 1. The journey involved:

- Understanding the flow and management of states in React.
- Understanding the purpose of isolation and responsibility in the codebase, towards the end of the project I had to make many tiny changes and that's where I saw first-hand the importance of modularity.
- Balancing between styling and JavaScript logic.
- Implementing authentication.
- Implementing a little server with Heroku, which got me some headaches and was not even in the scope of the front end. After successfully implementing it, I then went on using Vercel serverless functions for cost convenience.

The mantra for this project: Connect data seamlessly, and keep logic distinct and modular.

## Components Map

```
App.jsx/
│
├─ MetaData.jsx
│
├─ Header.jsx
│   ├── AuthenticationButton.jsx
│         ├── ProfileImage.jsx
│         └── ProfileInfo.jsx
│
├─ MainHeading.jsx
│
├─ WorkoutForm.jsx
│
├─ WorkoutResult.jsx
│   └── WorkoutProgram.jsx
│         └── DailyTables.jsx
│  
├─ WorkoutForm.jsx
│   ├── RadioButton.jsx
│   ├── Multiselection.jsx
│   ├── Slider.jsx
│   └── OtherInputs.jsx
│         ├── Bodyweight
│         ├── Selection
│         └── TextArea
│  
└── Footer.jsx
```

## Conclusion

The OpenAI Workout Generator was a big learning experience. 

Managing the flow of states and keeping data connected between different components was one of the most fascinating tasks. 

The beginning is straightforward and flows well. I noticed It was towards the end, where I had to make some tweaks that you really get a feel of how important modularity is. 

I did enjoy keeping the code as clean as possible with Emotion and a few comments. 

This was a project that I wanted to build before even knowing how to code. Seeing it becoming a reality from a thought was fulfilling and rewarding. 

Moving forward, I am excited to widen and deepen my knowledge in the front end (and why not, also AI engineering), along with a strong attention to User Experience.
