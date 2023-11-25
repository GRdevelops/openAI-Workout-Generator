import axios from "axios";
import { calculateComplitionCost } from "./complementaries";

const generateUserDescription = async (userData, setUserDescription) => {
  try {

    const gender = userData.gender;
    const fitnessLevel = userData.fitnessLevel;
    const goal = userData.goal;

    const prompt = `Based on the user data with gender as ${gender}, fitness level as ${fitnessLevel}, goal as ${goal}, provide a user description in a maximum of four words.`

    // Example1:
    // gender: male
    // fitness level: beginner
    // goal: build-muscle
    // your response: Muscle-Building Novice Man
    // Example2:
    // gender: male
    // fitness level: advanced
    // goal: increase-strength
    // your response: Strength-Seeking Seasoned Man
    // Example3:
    // gender: female
    // fitness level: intermediate
    // goal: get-leaner
    // your response: Lean Pursuit with Zest

    // console.log('prompt:', prompt);

    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    
    const response = await axios.post(`${backendUrl}/generate-workout`, {
      message: prompt,
    });

    const data = response.data.choices[0].message.content.trim();

    console.log('response:', data);
    
    setUserDescription(data);

    // Cost calculation
    calculateComplitionCost(response.data);

  } catch (error) {
    console.error("Error:", error);
  }
};

export default generateUserDescription;
