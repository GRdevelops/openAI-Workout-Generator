import { useState } from "react";
import "./App.css";

// Components
import WorkoutForm from "./components/WorkoutForm";
import Heading from "./components/Heading";
import WorkoutResult from "./components/WorkoutResult";

// Functions
import handleFormSubmit from './functions/handleFormSubmit';

function App() {
  const [workoutData, setWorkoutData] = useState("");

  const handleSubmit = (userInput) => {
    handleFormSubmit(userInput, setWorkoutData);
  };

  

  return (
    <>
      <Heading />
      <WorkoutForm onSubmit={handleSubmit} />
      <WorkoutResult data={workoutData} />
    </>
  );
}

export default App;
