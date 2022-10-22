import { useState } from 'preact/hooks';
import { Attach } from './Attach.jsx';
export function Input() {
	const [text, setText] = useState('');

	return (
		<>
			<form class="">
				<div class="mb-4 w-full bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600">
					<div class="py-2 px-4 bg-white rounded-t-lg dark:bg-gray-800 ">
						<label for="comment" class="sr-only">
					Input CSS
						</label>
						<textarea
							id="comment"
							rows="4"
							class="px-0 w-full text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
							placeholder="Input CSS"
							required=""
						></textarea>
					</div>
				</div>
			</form>
			<Attach />
		</>
	);
}
