const TicketList = ({ tickets, dispatch }) => {
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
