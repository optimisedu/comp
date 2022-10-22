import { useState } from 'preact/hooks';
import './app.css';
import { Sanitise } from './Sanitise';
import { Tb } from './Tb';

export function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<h1>Vite + Preact</h1>
			<Tb></Tb>
			{/* <Tb2></Tb2> */}
			{/* <RmTb></RmTb> */}
			<Sanitise></Sanitise>
			<div class="card">
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/app.jsx</code> and save to test HMR
				</p>
			</div>
			<p class="read-the-docs">
				Click on the Vite and Preact logos to learn more
			</p>
		</>
	);
}
