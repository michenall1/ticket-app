import { useContext } from 'react';
import { TicketDispatchContext } from '../context/TicketContext';

const TicketList = ({ tickets }) => {
	const dispatch = useContext(TicketDispatchContext);
	return (
		<>
			{tickets.map(({ id, text, resolved }) => (
				<div key={id}>
					{text}
					{!resolved && (
						<button
							onClick={() => {
								dispatch({
									type: 'resolve_ticket',
									id,
								});
							}}
						>
							resolve
						</button>
					)}
					<button
						onClick={() => {
							dispatch({
								type: 'delete_ticket',
								id,
							});
						}}
					>
						Delete
					</button>
				</div>
			))}
		</>
	);
};

export default TicketList;
