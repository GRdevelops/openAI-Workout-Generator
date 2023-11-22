import { useState } from 'react';
import './styles/App.css';

// Components
import WorkoutForm from './components/WorkoutForm';
import MainHeading from './components/MainHeading';
import WorkoutResult from './components/WorkoutResult';

// Functions
import handleFormSubmit from './functions/handleFormSubmit';

function App() {
	const [workoutData, setWorkoutData] = useState('');
	const [loading, setLoading] = useState(false);

	const handleSubmit = userData => {
		handleFormSubmit(userData, setWorkoutData, setLoading);
	};

	return (
		<>
			<MainHeading />
			<WorkoutForm onSubmit={handleSubmit} />
			<WorkoutResult isLoading={loading} workoutData={workoutData} />
		</>
	);
}

export default App;
