
export const calculateComplitionCost = (completion) => {
  let cost = 0;
      cost += completion.usage.prompt_tokens * 0.001/1000;
      cost += completion.usage.completion_tokens * 0.002/1000;
      console.log('Tokens:', completion.usage.total_tokens, '\nCost:', parseFloat(cost.toFixed(5)), '€')
}



// // Streamed answer (NOT USED)
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