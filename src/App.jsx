import { useState, useEffect } from 'react';
import './styles/App.css';

// Components
import Header from './components/Header';
import MainHeading from './components/MainHeading';
import WorkoutForm from './components/WorkoutForm';
import WorkoutResult from './components/WorkoutResult';
import Footer from './components/Footer';

// Utilities
import handleFormSubmit from './utils/generateWorkout';
import generateUserDescription from './utils/generateUserDescription';

function App() {
	const [ userData, setUserData ] = useState({
		gender: 'Male',
		weight: 70,
		weightUnit: 'kg',
		fitnessLevel: 'Beginner',
		equipment: ['All'],
		daysPerWeek: 3,
		goal: 'Gain Muscle',
		injuries: '',
		preferencies: '',
	});
	const [ workoutData, setWorkoutData ] = useState('');
	const [ userDescription, setUserDescription ] = useState('');
	const [ loading, setLoading ] = useState(false);

	const handleSubmit = userData => {
		handleFormSubmit(userData, setWorkoutData, setLoading);
		generateUserDescription(userData, setUserDescription);
	};

	useEffect(() => {
    console.log(userDescription);
  }, [userDescription]);

	return (
		<>
			<Header userDescription={userDescription} />
			<MainHeading />
			<WorkoutForm userData={userData} setUserData={setUserData} onSubmit={handleSubmit} isLoading={loading}/>
			<WorkoutResult
				isLoading={loading}
				workoutData={workoutData}
			/>
			<Footer userData={userData}/>
		</>
	);
}

export default App;
