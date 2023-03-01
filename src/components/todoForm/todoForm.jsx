import './todoForm.css';
import { useState } from 'react';
import { MESSAGE } from '../constants';

export const TodoForm = () => {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [isDescriptionValid, setDescriptionValid] = useState(true);
	const [isTitleValid, setTitleValid] = useState(true);

	const handleClick = () => {
		console.log(title, description);
		if (!title || !description) {
			console.log(false);
		}
		setTitleValid(!!title);
		setDescriptionValid(!!description);
	};
	const titleClassName = isTitleValid ? null : 'red';
	const descriptionClassName = isDescriptionValid ? null : 'red';
	return (
		<div className={'todoForm'}>
			<div className={'inputForm'}>
				<lable>Title</lable>
				<input
					className={titleClassName}
					type='text'
					placeholder='Enter title'
					onChange={(e) => {
						setTitle(e.target.value);
					}}
				/>
				{!isTitleValid && <p className={'message'}>{MESSAGE}</p>}
			</div>
			<div className={'inputForm'}>
				<lable>Description</lable>
				<input
					className={descriptionClassName}
					type='text'
					placeholder='Enter description'
					onChange={(e) => {
						setDescription(e.target.value);
					}}
				/>
				{!isDescriptionValid && <p className={'message'}>{MESSAGE}</p>}
			</div>
			<button onClick={handleClick}>Create</button>
		</div>
	);
};
