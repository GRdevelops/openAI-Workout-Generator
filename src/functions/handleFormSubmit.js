import axios from "axios";
import { calculateComplitionCost } from "./utilities";

const handleFormSubmit = async (userInput, setWorkoutData) => {
  try {
    const prompt = `Generate a one week workout program based on these informations: "${userInput}". 
    In {type} write a summary of the workout (e.g. "Legs & Abs", "Back & Biceps", "Chest & Triceps).
    Format the output in a json similar to this:
    {
      'day of the week': {
            'type': '',
            'exercises': {
              'exercise1': 'sets x reps',
              'exercise2': 'sets x reps',
              // other exercises
            }
      }`;

    const response = await axios.post("http://localhost:8000/completions", {
      message: prompt,
    });

    console.log(response.data.choices[0].message.content.trim());

    setWorkoutData(response.data.choices[0].message.content.trim());

    // Cost calculation
    calculateComplitionCost(response.data);
  } catch (error) {
    console.error("Error:", error);
  }
};

export default handleFormSubmit;
