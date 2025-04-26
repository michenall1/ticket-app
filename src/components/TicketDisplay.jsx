import TicketTab from './TicketTab';
import TicketList from './TicketList';
import { useContext } from 'react';
import { TicketContext, TicketDispatchContext } from '../context/TicketContext';

const TicketDisplay = () => {
	const { filter, tickets } = useContext(TicketContext);
	const dispatch = useContext(TicketDispatchContext);

	const filteredTickets = tickets.filter(ticket => {
		if (filter === 'all') return true;
		if (filter === 'resolved') return ticket.resolved;
		if (filter === 'unresolved') return !ticket.resolved;
	});

	return (
		<>
			<TicketTab
				filter={filter}
				onChange={newFilter =>
					dispatch({ type: 'change_filter', filter: newFilter })
				}
			/>
			<TicketList tickets={filteredTickets} />
		</>
	);
};

export default TicketDisplay;
