export const initialState = {
	filter: 'all',
	tickets: [],
};

let globalId = 0;

export function ticketManagerReducer(draft, { type, text, id, filter }) {
	switch (type) {
		case 'add_ticket':
			{
				draft.tickets.push({ id: globalId++, text, resolved: false });
			}
			break;
		case 'resolve_ticket': {
			const ticket = draft.tickets.find(t => t.id === id);
			if (ticket) ticket.resolved = true;
			break;
		}
		case 'delete_ticket': {
			const index = draft.tickets.findIndex(ticket => ticket.id === id);
			if (index !== -1) {
				draft.tickets.splice(index, 1);
			}
			break;
		}
		case 'change_filter':
			{
				draft.filter = filter;
			}
			break;
		default: {
			throw Error('Unknown action: ' + type);
		}
	}
}
