import axios from "axios";
import { calculateComplitionCost } from "./complementaries";

const generateWorkout = async (userData, setWorkoutData, setLoading) => {
  try {

    setLoading(true);

    const userDataString = JSON.stringify(userData);
    
    // Fist version
    // const prompt = `Generate a one week workout program based on these informations: "${userDataString}". 
    // In {type} write a summary of the workout (e.g. "Legs & Abs", "Back & Biceps", "Chest & Triceps).
    // For bodyweight exercices use "max" for the reps.
    // Example of one day (just see the structure):
    // {
    //   "Monday": {
    //     "type": "Full Body Strength Training",
    //     "exercises": {
    //       "Squats": "3x10",
    //       "Push-ups": "3xmax",
    //       "Pull-ups": "3xmax",
    //       "Deadlifts": "3x10",
    //       "Bench Press": "3x10",
    //       "Plank": "3x1 minute"
    //     }
    //   }
    // }
    
    // Works ok
    // const prompt = `Based on the following user data: ${userDataString}, create a one-week workout program. Limit the program to ${userInput.daysPerWeek} days as specified by the user. Each day should have a workout type summary (e.g., "Legs & Abs", "Upper body", "Chest & Triceps") and a list of exercises. Use "max" for the number of reps in bodyweight exercises. Format the output as a JSON object, with each day of the week as a key, containing 'type' and 'exercises' (with 'sets x reps' format for each exercise).`;

    const prompt = `Generate a comprehensive workout program for this user: ${userDataString}. Carefully analize the user. The program should run for ${userData.daysPerWeek} days per week, with each session lasting 1 hour max. Each day should have a concice workout type summary and a list of exercises. Use "max" for the number of reps in bodyweight exercises. Format the output as a JSON object, with each day of the week as a key, containing 'type' and 'exercises' (with 'sets x reps' format for each exercise).
    Structure of one day:
    {
      "Day of the week": {
        "type": "summary",
        "exercises": {
          "exercise n": "sets x reps/time",
        }
      }
    }`

    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    
    const response = await axios.post(`${backendUrl}/generate-workout`, {
      model: 'gpt-3.5-turbo-1106',
      message: prompt,
      response_format: { "type": "json_object" },
      max_tokens: 500,
    });

    const data = await response.data.choices[0].message.content.trim();
    
    console.log('Workout generated!');

    setWorkoutData(data);
    setLoading(false);
    
    // Cost calculation
    const modelUtilized = response.data.model;
    calculateComplitionCost(response.data, modelUtilized);

  } catch (error) {
    console.error("Error:", error);
    setLoading(false);
  }
};

export default generateWorkout;
