import './todoDetails.css';

export const TodoDetails = (props) => {
	if (!props.open) return null;
	const handleClick = () => {
		props.setOpen(false);
	};

	return (
		<div className={'modal'}>
			<h2>
				<b>{props.item.title}</b>
			</h2>
			<p>
				<b>Description</b>
			</p>
			<p>{props.item.description}</p>
			<div className={'status'}>
				<p>Status: </p>
				<input type='checkbox' name='scales' checked={props.item.status} />
			</div>
			<button onClick={handleClick}>Close</button>
		</div>
	);
};
