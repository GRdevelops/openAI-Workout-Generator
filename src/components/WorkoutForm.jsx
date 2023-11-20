import { useState, useEffect } from "react";
import { css } from '@emotion/react';
import styled from "@emotion/styled";
import checkmark from '../assets/checkmark2.svg';


// Styles
const formWidth = '20rem';
const verticalSpace = '1.5rem';
const inputPadding = '.8rem .5rem';
const fontSize = '1rem';
const inputFontSize = '0.925rem';
const fontFamily = 'Arial';
const inputBorder = '2px solid gray';
const inputBorderRadius = '0.5rem'
const customScrollbar = css`
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #3b3b3b;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #666; 
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #aaa;
  }

  &::-webkit-scrollbar-corner {
    background-color: #3b3b3b; 
  }

  &::-webkit-resizer {
    background-color: #3b3b3b;
  }
`

const Form = styled.form`
  font-size: ${fontSize};
  margin: 0 auto;
  max-width: ${formWidth};
  display: flex;
  flex-direction: column;
`

const Label = styled.label`
  margin-bottom: .5rem;
  font-family: 
`;

const TextArea = styled.textarea`
  font-family: ${fontFamily};
  font-size: ${inputFontSize};
  margin-bottom: ${verticalSpace};
  padding: ${inputPadding};
  min-height: 5rem;
  border: ${inputBorder};
  border-radius: ${inputBorderRadius};

  &::placeholder {
    vertical-align: top;
    text-align: start;
  };

  ${customScrollbar};
`;

const Input = styled.input`
  font-family: ${fontFamily};
  font-size: ${inputFontSize};
  margin-bottom: ${verticalSpace};
  padding: ${inputPadding};
  border: ${inputBorder};
  border-radius: ${inputBorderRadius};
`;

const Select = styled.select`
  font-family: ${fontFamily};
  font-size: ${inputFontSize};
  margin-bottom: ${verticalSpace};
  padding: ${inputPadding};
  border: ${inputBorder};
  border-radius: ${inputBorderRadius};
`;

const Radio = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: ${verticalSpace};
`;

const Dropdown = styled.div`
  width: 100%;
  max-width: ${formWidth};
  max-height: 100vh;
  overflow: scroll;
  background-color: #3b3b3b;
  position: fixed;
  top: 0%;
  left: 50%;
  transform: translatex(-50%);
  z-index: 99;
  border-radius: ${inputBorderRadius};
  ${customScrollbar};
`;

const CheckboxWrapper = styled.div`
  position: absolute;
  display: inline-block;
  width: 1rem;  
  height: 1rem;
  border: 2px solid #ddd;
  border-radius: 10%;
  background: ${props => props.checked ? 'white' : 'slate'};
  background-image: ${props => props.checked ? `url(${checkmark})` : 'none'};
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  background-size: 70%;
  cursor: pointer;
  margin-left: 1rem;
`;

const Button = styled.button`
  margin-top: 1rem;
`;

// Component
function WorkoutForm({ onSubmit }) {
  const [userData, setUserData] = useState({
    gender: 'male',
    unit: 'kg',
    weight: 80,
    fitnessLevel: 'beginner',
    equipment: ['All'],
    goal: 'lose-weight',
    injuries: '',
    preferencies: ''
  })

  // Multiselection element
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  
  const equipmentOptions = [
    "All", "None", "Ab Roller", "Barbell", "Battle Ropes", "Bench", "Box", "Cable", "Dumbbell", "Elliptical", "Exercise Ball", "Ez Bar", "Kettlebell", "Long Bar", "Machine", "Medicine Ball", "Plate", "Pull Up Bar", "Resistance Band", "Smith Machine", "Stairmaster", "Stationary Bike", "Treadmill", "TRX", "Trap Bar", "Weight Sled", "Yoga Mat"
  ];
  
  const handleEquipmentChange = (event) => {
    const value = event.target.value;
    let newEquipment;
  
    if (value === 'All' || value === 'None') {
      newEquipment = [value];
    } else {
      if (userData.equipment.includes(value)) {
        newEquipment = userData.equipment.filter(item => item !== value);
      } else {
        newEquipment = userData.equipment.filter(item => item !== 'All' && item !== 'None');
        newEquipment.push(value);
      }
    }
  
    setUserData({ ...userData, equipment: newEquipment });
  
    console.log(newEquipment);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const dropdownElement = document.getElementById('dropdown');
      if (dropdownElement && !dropdownElement.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
  
    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    }
  
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [isDropdownOpen]);

  // Implement a dynamic paragraph appearing on the loading screen based on the user goal
  // const fitnessGoals = {
  //   'lose-fat': 'Focus on burning fat for a leaner body.',
  //   'increase-strength': 'Work towards stronger muscles and greater overall strength.',
  //   'build-muscle': 'Target muscle growth for a more muscular physique.',
  //   'maintenance': 'Keep up your current fitness level and stay healthy.',
  //   'improve-endurance': 'Improve your endurance for prolonged activities.'
  // };

  // Implement custom dropdowns (for each goal: emoji + goal + description)
  

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted:", userData);
    onSubmit(userData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      
      <Radio>
        <label>Gender:</label>
        <label htmlFor="Male" css={css`cursor: pointer`}>
          <input type="radio" id="Male" name="gender" value="male" checked={userData.gender === 'male'} onChange={() => setUserData({...userData, gender: 'male'})} /> Male
        </label>
        <label htmlFor="Female" css={css`cursor: pointer`}>
          <input type="radio" id="Female" name="gender" value="female" checked={userData.gender === 'female'} onChange={() => setUserData({...userData, gender: 'female'})} /> Female
        </label>
      </Radio>

      <Radio>
        <label>Unit:</label>
        <label htmlFor="kg" css={css`cursor: pointer`}>
          <input type="radio" id="kg" name="unit" value="kg" checked={userData.unit === 'kg'} onChange={() => setUserData({...userData, unit: 'kg'})} /> kg
        </label>
        <label htmlFor='lbs' css={css`cursor: pointer`}>
          <input type="radio" id="lbs" name="unit" value="lbs" checked={userData.unit === 'lbs'} onChange={() => setUserData({...userData, unit: 'lbs'})} /> lbs
        </label>
      </Radio>

      <Label htmlFor="bodyweight">Bodyweight:</Label>
      <Input id='bodyweight' type='number' value={userData.weight} onChange={(e) => setUserData({...userData, weight: e.target.value})} />

      <Label htmlFor="fitness-level">Fitness Level:</Label>
      <Select id="fitness-level" name="fitness-level" onChange={(e) => setUserData({...userData, fitnessLevel: e.target.value})}>
        <option value="beginner">Beginner</option>
        <option value="intermediate">Intermediate</option>
        <option value="advanced">Advanced</option>
      </Select>

      <Label htmlFor="fitness-goal">Goal:</Label>
      <Select id="fitness-goal" name="fitness-goal" onChange={(e) => setUserData({...userData, goal: e.target.value})}>
        <option value="lose-fat">Get Leaner</option>
        <option value="increase-strength">Boost Strength</option>
        <option value="build-muscle">Gain Muscle</option>
        <option value="maintenance">Stay Fit</option>
        <option value="improve-endurance">Enhance Stamina</option>
      </Select>

      <Label>Select Equipment:</Label>
      <div
        css={css`
          font-size: ${inputFontSize};
          cursor: pointer;
          background-color: #3b3b3b;
          padding: ${inputPadding};
          border: ${inputBorder};
          border-radius: ${inputBorderRadius};
          margin-bottom: ${verticalSpace};
        `}
        onClick={toggleDropdown}>
        {userData.equipment.join(', ')}
      </div>
      {isDropdownOpen && (
        <Dropdown id='dropdown'>
          {equipmentOptions.map((item) => (
            <div
              css={css`
                display: flex;
                align-items: center;
                &:hover {
                  background-color: hsla(0, 0%, 89%, 0.1);
                }
              `} 
              key={item}>
              <input 
                type='checkbox'
                id={item}
                value={item}
                checked={userData.equipment.includes(item)}
                onChange={handleEquipmentChange}
                css={css`display: none;`}
              />
              <CheckboxWrapper 
                onClick={() => handleEquipmentChange(item)}
                checked={userData.equipment.includes(item)}
              />
              <label 
                htmlFor={item}
                css={css`
                  padding-top: 1rem;
                  padding-bottom: 1rem;
                  padding-left: 3rem;
                  z-index: 99;
                  width: 100%;
                `}>
                {item}
              </label>
            </div>
          ))}
        </Dropdown>
      )}

      <Label>Injuries: <span css={css`opacity: .5`}>(optional)</span></Label>
      <TextArea
        id="injuries"
        name="injuries"
        placeholder="Knee injury"
        value={userData.injuries}
        onChange={(e) => setUserData({...userData, injuries: e.target.value})}
      />
      <Label>Preferences: <span css={css`opacity: .5`}>(optional)</span></Label>
      <TextArea
        id="preferencies"
        name="preferencies"
        placeholder="Arms preference, I train in cicles"
        value={userData.preferencies}
        onChange={(e) => setUserData({...userData, preferencies: e.target.value})}
      />
      <Button type="submit">Submit</Button>
    </Form>
  );
}

export default WorkoutForm;

