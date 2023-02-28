import './todoForm.css';

export const TodoForm = () => {
	return (
		<div className={'todoForm'}>
			<div className={'inputForm'}>
				<lable>Title</lable>
				<input type='text' placeholder='Enter title' />
			</div>
			<div className={'inputForm'}>
				<lable>Description</lable>
				<input type='text' placeholder='Enter description' />
			</div>
			<button>Create</button>
		</div>
	);
};
