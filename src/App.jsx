import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './styles/App.css';

// Components
// import MetaData from './components/MetaData';
import Header from './components/Header';
import MainHeading from './components/MainHeading';
import WorkoutForm from './components/WorkoutForm';
import WorkoutResult from './components/WorkoutResult';
import Footer from './components/Footer';

// Utilities
import generateWorkout from './utils/generateWorkout';
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
		preferences: '',
	});
	const [ workoutData, setWorkoutData ] = useState('');
	const [ userDescription, setUserDescription ] = useState('');
	const [ loading, setLoading ] = useState(false);
	const { isAuthenticated } = useAuth0();

	const handleSubmit = userData => {
		generateWorkout(userData, setWorkoutData, setLoading);
		isAuthenticated && generateUserDescription(userData, setUserDescription);
	};

	return (
		<>
			{/* <MetaData 
				pageTitle='AI Workout Assistant' 
				description='Generate a tailored fitness program, without having to think about it.'
			/> */}
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
