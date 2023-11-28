
export const calculateComplitionCost = (completion, modelUtilized) => {
  let price = 0.001 / 1000; // default value

  if (modelUtilized.startsWith('gpt-4')) {
    price = 0.03 / 1000;
  }

  if (modelUtilized.startsWith('gpt-3.5-turbo')) {
    price = 0.001 / 1000;
  }

  let cost = 0;
  cost += completion.usage.prompt_tokens * price;
  cost += completion.usage.completion_tokens * price;
  console.log('Model:', modelUtilized, '\nTokens:', completion.usage.total_tokens, '\nCost:', parseFloat(cost.toFixed(5)), '€');
}



// // Stream answer (NOT USED)
// export const compileStreamedAnswer = async (completion) => {
//   let paragraph = "";
//   for await (const chunk of completion) {
//     // Log content + finish reason
//     console.log(chunk.choices[0].delta.content);
//     if (chunk.choices[0].finish_reason === 'length' || chunk.choices[0].finish_reason === 'stop') {
//       console.log('Finish reason:', chunk.choices[0].finish_reason);
//     }

//     if (chunk.choices[0].delta.content) {
//       paragraph += chunk.choices[0].delta.content;
//       setWorkoutData(paragraph);
//     } else {
//       console.log("Non-content chunk encountered");
//     }
//   }
// }