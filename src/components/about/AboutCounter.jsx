import { useCountUp } from 'react-countup';
import CounterItem from './CounterItem';

const AboutCounter = () => {
	useCountUp({ ref: 'experienceCounter', end: 7, duration: 2 });
	useCountUp({ ref: 'githubStarsCounter', end: 8, duration: 2 });
	useCountUp({ ref: 'feedbackCounter', end: 92, duration: 2 });
	useCountUp({ ref: 'projectsCounter', end: 71, duration: 2 });

	return (
		<div className="mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm">
			<div className="font-general-medium container mx-auto py-20 block sm:flex sm:justify-between items-center">
				<CounterItem
					title="Project Developed"
					counter={<span id="experienceCounter" />}
					measurement=""
				/>

				<CounterItem
					title="Github/Git Experience Level"
					counter={<span id="githubStarsCounter" />}
					measurement="/ 10"
				/>

				<CounterItem
					title="Accuracy on Projects"
					counter={<span id="feedbackCounter" />}
					measurement="%"
				/>

				<CounterItem
					title="Projects completed"
					counter={<span id="projectsCounter" />}
					measurement="%"
				/>
			</div>
		</div>
	);
};

export default AboutCounter;
