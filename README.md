# OpenAI Workout Generator

This is a dynamic and user-friendly fitness application built with React. 
This app leverages OpenAI LLM and its API to retrieve information such as workout exercises and their ideal combinations based on user goals, equipment and preferences. 

User info is collected through a form where the state is updated with each input. 
User Data is then collected as a state object and used as a reference during API communication. 
OpenAI LLM (Language Learning Model) is given the instruction to respond in a JSON format, the response is then converted into a javascript object. 
Given the expected structure of the output, we can map its items and populate UI elements as desired.

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

- **Modular Design**: Each component is crafted to be as modular as possible, ensuring a clean separation of concerns and responsibilities between components.
- **Emotion & Reusable Styles**: To avoid the clutter and inconvenience of traditional CSS, we use Emotion. It allows us to style components directly within their files, maintaining modularity and integrating seamlessly with our most-used styles. We have also stored the most common styles in a file and used them throughout components. [View `styles.js`](#).
- **Custom Hooks**: Our `useOutsideClicks` hook is a versatile tool used across multiple components like multi-selections and menus, enhancing UX by handling clicks outside an element. [View `useOutsideClicks`](#)
- **Serverless Functions with Vercel**: Inside the API folder you can see the serverless functions I used to make the calls to Openai API, which usually would require a dedicated server, which I did before discovering the convenience of serverless (see server repository in my profile).
- **Authentication with Auth0**: The minimum setup to implement authentication functionality.

## Learning Journey

This project was a learning curve in understanding what it takes to build a functional product from 0 to 1. The journey involved:

- Understanding the flow and management of states in React.
- Understanding the purpose of isolation and responsibility in the codebase, towards the end of the project I had to make many tiny changes and that's where I saw first-hand the importance of modularity.
- Balancing between styling and JavaScript logic.
- Implementing authentication.
- Implementing a little server with Heroku, which provoked some headaches and was not even in the scope of the front end. After successfully implementing it, I then went on using Vercel serverless functions for cost convenience.

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

The OpenAI Workout Generator was a big learning experience. Managing the flow of states and keeping data connected between different components was one of the most fascinating things. The beginning is straightforward and flows well. I noticed It was towards the end, where I had to make some tweaks that you really get a feel of how important modularity is. I did enjoy keeping the code as clean as possible with Emotion and a few comments. This was a project that I wanted to build before even knowing how to code. Seeing it becoming a reality from being a thought was fulfilling and rewarding. Moving forward, I am excited to widen and deepen my knowledge in the front end (and why not, also AI engineering), along with impeccable User Experience.
