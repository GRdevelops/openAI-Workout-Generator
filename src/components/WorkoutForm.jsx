import { useState } from "react";
import styled from "@emotion/styled";

const Label = styled.label`
  margin-bottom: 2rem;
`;

const TextArea = styled.textarea`
  margin-top: 1rem;
  padding: 0.5rem 0.8rem;
  width: 25rem;
  min-height: 10rem;
  border-radius: 0.5rem;

  &::placeholder {
    vertical-align: top;
    text-align: start;
  }
`;

const Button = styled.button`
  margin-top: 2rem;
`;

function WorkoutForm({ onSubmit }) {
  const [userInput, setUserInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted:", userInput);
    onSubmit(userInput);
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <Label htmlFor="userInput">Tell us a little bit about your goals:</Label>
      <br />
      <TextArea
        type="text"
        id="userInput"
        name="userInput"
        placeholder="I am 24 yo and my goal is to put on muscle mass. I want to train 2 times per week. My level is advanced."
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <br />
      <Button type="submit">Submit</Button>
    </form>
  );
}

export default WorkoutForm;
