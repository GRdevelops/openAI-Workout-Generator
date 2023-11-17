import { useState } from "react";
import axios from "axios";
import "./App.css";

// Components
import WorkoutForm from "./components/WorkoutForm";
import Heading from "./components/Heading";
import WorkoutResult from "./components/WorkoutResult";

function App() {
  const [workoutData, setWorkoutData] = useState("");

  const handleFormSubmit = async (userInput) => {
    const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;
    
    async function queryOpenAI(prompt) {
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      };

      const data = {
        prompt: prompt,
        max_tokens: 100,
        temperature: 0.7,
      };

      try {
        const response = await axios.post(
          "https://api.openai.com/v1/engines/text-davinci-003/completions",
          data,
          { headers },
        );
        return response.data.choices[0].text.trim();
      } catch (error) {
        console.error("Error making request:", error);
        return null;
      }
    }

    const finalPrompt = `Can you generate a one week workout program based on theses informations: "${userInput}"`;

    const response = await queryOpenAI(finalPrompt);
    setWorkoutData(response);
  };

  return (
    <>
      <Heading />
      <WorkoutForm onSubmit={handleFormSubmit} />
      <WorkoutResult data={workoutData} />
    </>
  );
}

export default App;
