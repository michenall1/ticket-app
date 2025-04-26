import { useContext, useState } from 'react';
import { TicketDispatchContext } from '../context/TicketContext';

export default function TicketSubmitForm({ onSubmit }) {
	const dispatch = useContext(TicketDispatchContext);
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
					dispatch({
						type: 'add_ticket',
						text,
					});
				}}
			>
				Submit
			</button>
		</>
	);
}
