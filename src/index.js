import { render } from 'react-dom';
import { Navbar } from './components/navbar';
import { Indicator } from './components/indicator';

function App() {
	return (
		<>
			<Navbar />
			<Indicator />
		</>
	);
}

// eslint-disable-next-line no-undef
render(<App />, document.getElementById('root'));
