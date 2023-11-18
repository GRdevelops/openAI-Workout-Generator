import OpenAI from "openai";

import { calculateComplitionCost } from "./utilities";




const handleFormSubmit = async (userInput, setWorkoutData) => {
  const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

  const openai = new OpenAI({
    apiKey: OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
  });

  
  async function fetchOpenAIApi(prompt) {
    try {
      const messagesArr = [
        {
          role: "system",
          content: "You are an expert personal trainer.",
        },
      ];
      
      messagesArr.push({ role: "user", content: prompt });
      
      console.log(messagesArr);
      
      const completion = await openai.chat.completions.create({
        messages: messagesArr,
        model: "gpt-3.5-turbo-1106",
        temperature: 0.7,
        max_tokens: 150,
        response_format: { type: "json_object" },
      });

      const response = completion.choices[0].message.content.trim()
      console.log('Response:', response);
      
      // Turn response into an updated state
      const completionObject = JSON.parse(
        completion.choices[0].message.content.trim(),
        );
        console.log(completionObject);
        
      let paragraph = "";
      for (const property in completionObject) {
        paragraph += completionObject[property] + "\n";
      };
      
      setWorkoutData(paragraph);
      
      // Cost calculation
      calculateComplitionCost(completion);
    } catch (error) {
      console.log("Error:", error);
    }
  }
  
  // Craft the prompt
  // const temporaryPrompt = "return five words in a json format with a property for each word.";
  const finalPrompt = `Generate a one week workout program based on these informations: "${userInput}".
  Format the output in json similar to this:
  {
    'day_of_the_week': {
          'exercise1': { name_of_the_exercise: 'bench press',
                sets_and_reps: '3 x 12' }
          'exercise2': { name_of_the_exercise: 'shoulder press',
                sets_and_reps: '3 x 8' }
    }
  }
  `;
  
  
  // Fetch openAI API
  fetchOpenAIApi(finalPrompt);
  
};

export default handleFormSubmit;
