import { useImmerReducer } from 'use-immer';
import TicketSubmitForm from './components/TicketSubmitForm';
import TicketDisplay from './components/TicketDisplay';
import {
	initialState,
	ticketManagerReducer,
} from './reducers/ticketDisplayReducer.js';

export default function TicketManager() {
	const [state, dispatch] = useImmerReducer(
		ticketManagerReducer,
		initialState
	);
	function onSubmit(text) {
		dispatch({
			type: 'add_ticket',
			text,
		});
	}
	return (
		<>
			<TicketSubmitForm onSubmit={onSubmit} />
			<TicketDisplay displayModel={state} dispatch={dispatch} />
		</>
	);
}
