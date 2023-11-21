import axios from "axios";
import { calculateComplitionCost } from "./utilities";

const handleFormSubmit = async (userData, setWorkoutData) => {
  try {

    const userDataString = JSON.stringify(userData);
    
    // Original
    // const prompt = `Generate a one week workout program based on these informations: "${userDataString}". 
    // In {type} write a summary of the workout (e.g. "Legs & Abs", "Back & Biceps", "Chest & Triceps).
    // For bodyweight exercices use "max" for the reps.
    // Format the output in a json similar to this:
    // {
    //   'day of the week': {
    //     'type': '',
    //     'exercises': {
      //       'exercise1': 'sets x reps',
      //       'exercise2': 'sets x reps',
      //       // other exercises
      //     }
      //   }`;

      
    // Works well
    // const prompt = `Based on the following user data: ${userDataString}, create a one-week workout program. Limit the program to ${userInput.daysPerWeek} days as specified by the user. Each day should have a workout type summary (e.g., "Legs & Abs", "Upper body", "Chest & Triceps") and a list of exercises. Use "max" for the number of reps in bodyweight exercises. Format the output as a JSON object, with each day of the week as a key, containing 'type' and 'exercises' (with 'sets x reps' format for each exercise).`;

    const prompt = `Generate a comprehensive workout program for this user: ${userDataString}. The program should run for ${userData.daysPerWeek} days per week, with each session lasting 1 hour. Each day should have a concice workout type summary and a list of exercises. Use "max" for the number of reps in bodyweight exercises. Format the output as a JSON object, with each day of the week as a key, containing 'type' and 'exercises' (with 'sets x reps' format for each exercise).`

    // const prompt = `Create a ${userInput.daysPerWeek}-day workout program for the following profile: ${userDataString}. Include a daily workout type (e.g., "Legs & Abs") and exercises list, using "max" reps for bodyweight exercises. Format as JSON with days as keys, specifying 'type' and 'exercises' (format: 'sets x reps').`;


    console.log(prompt);  

    const response = await axios.post("http://localhost:8000/generate-workout", {
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
