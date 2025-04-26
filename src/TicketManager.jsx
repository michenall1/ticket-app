import { useImmerReducer } from 'use-immer';
import TicketSubmitForm from './components/TicketSubmitForm';
import TicketDisplay from './components/TicketDisplay';
import {
	initialState,
	ticketManagerReducer,
} from './reducers/ticketDisplayReducer.js';
import {
	TicketContext,
	TicketDispatchContext,
} from './context/TicketContext.js';

export default function TicketManager() {
	const [state, dispatch] = useImmerReducer(
		ticketManagerReducer,
		initialState
	);
	return (
		<>
			<TicketContext.Provider value={state}>
				<TicketDispatchContext.Provider value={dispatch}>
					<TicketSubmitForm />
					<TicketDisplay />
				</TicketDispatchContext.Provider>
			</TicketContext.Provider>
		</>
	);
}
