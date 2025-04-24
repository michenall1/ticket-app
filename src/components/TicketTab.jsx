const options = ['all', 'resolved', 'unresolved'];

export default function TicketTab({ filter, onChange }) {
	return (
		<div>
			{options.map(option => (
				<label key={option}>
					<input
						type='radio'
						name='ticket-filter'
						value={option}
						checked={filter === option}
						onChange={() => onChange(option)}
					/>
					{option}
				</label>
			))}
		</div>
	);
}
