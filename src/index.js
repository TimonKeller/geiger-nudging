import { render } from 'react-dom';
import { Navbar } from './components/navbar';

function App() {
	return <Navbar />;
}

// eslint-disable-next-line no-undef
render(<App />, document.getElementById('root'));
