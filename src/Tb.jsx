import { useState } from 'preact/hooks';

export function Tb() {
	const [text, setText] = useState('');

	return (
		<>
			<form>
				<div class="mb-4 w-full bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600">
					<div class="py-2 px-4 bg-white rounded-t-lg dark:bg-gray-800">
						<label for="comment" class="sr-only">
							Your comment
						</label>
						<textarea
							id="comment"
							rows="4"
							class="px-0 w-full text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
							placeholder="Write a comment..."
							required=""
						></textarea>
					</div>
					<div class="flex justify-between items-center py-2 px-3 border-t dark:border-gray-600">
						<div class="flex pl-0 space-x-1 sm:pl-2">
							<button
								type="button"
								class="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
							>
								<svg
									aria-hidden="true"
									class="w-5 h-5"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fill-rule="evenodd"
										d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
										clip-rule="evenodd"
									></path>
								</svg>
								<span class="sr-only">Attach file</span>
							</button>
						</div>
					</div>
				</div>
			</form>
			<p class="ml-auto text-xs text-gray-500 dark:text-gray-400">
				Remember, contributions to this topic should follow our{' '}
				<a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">
					Community Guidelines
				</a>
				.
			</p>
		</>
	);
}
