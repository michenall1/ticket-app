import TicketTab from './TicketTab';
import TicketList from './TicketList';

const TicketDisplay = ({ displayModel, dispatch }) => {
	const { filter, tickets } = displayModel;

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
			<TicketList tickets={filteredTickets} dispatch={dispatch} />
		</>
	);
};

export default TicketDisplay;
