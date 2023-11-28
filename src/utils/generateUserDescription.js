import axios from "axios";
import { calculateComplitionCost } from "./complementaries";

const generateUserDescription = async (userData, setUserDescription) => {
  try {

    const gender = userData.gender;
    const fitnessLevel = userData.fitnessLevel;
    const goal = userData.goal;

    const prompt = `Create a four-word witty description for a ${gender}, ${fitnessLevel} level, aiming to ${goal}.`;

    // const oldPrompt = `Based on the user data with gender as ${gender}, fitness level as ${fitnessLevel}, goal as ${goal}, generate a witty user description in a maximum of four words. Do not be offensive.`

    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    
    const response = await axios.post(`${backendUrl}/generate-workout`, {
      model: 'gpt-4',
      message: prompt,
      max_tokens: 30,
    });

    const data = response.data.choices[0].message.content.trim();
    const userDescription = data.replace(/^"|"$/g, '');
    const modelUtilized = response.data.model;
    console.log('User description:', userDescription);
    setUserDescription(userDescription);

    // Cost calculation
    calculateComplitionCost(response.data, modelUtilized);

  } catch (error) {
    console.error("Error:", error);
  }
};

export default generateUserDescription;
