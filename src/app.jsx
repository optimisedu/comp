import { useState } from 'preact/hooks';
import { Input } from './Input';
import { Output } from './Output';
import { Sanitise } from './Sanitise';

export function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<h1 class="flex justify-center">Clear Critical CSS</h1>
			<main class="flex flex-col items-center justify-center w-full h-screen">
				<Input />
				<Output />
				<Sanitise />
			</main>
		</>
	);
}
