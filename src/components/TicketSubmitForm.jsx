import { useState } from 'react';

export default function TicketSubmitForm({ onSubmit }) {
	const [text, updateText] = useState('');
	return (
		<>
			<input
				type='text'
				value={text}
				onChange={e => updateText(e.target.value)}
			/>
			<button
				onClick={() => {
					onSubmit(text);
				}}
			>
				Submit
			</button>
		</>
	);
}
