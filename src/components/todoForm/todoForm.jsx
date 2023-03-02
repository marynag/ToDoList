import './todoForm.css';
import { useState } from 'react';
import { MESSAGE } from '../../constants/constants';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_TODOS } from '../../store/actionTypes';
import React from 'react';

export const TodoForm = () => {
	const titleRef = React.createRef();
	const descriptionRef = React.createRef();
	const [isDescriptionValid, setDescriptionValid] = useState(true);
	const [isTitleValid, setTitleValid] = useState(true);
	const dispatch = useDispatch();
	const todos = useSelector((state) => state);

	const handleClick = () => {
		const title = titleRef.current.value;
		const description = titleRef.current.value;
		setTitleValid(!!title);
		setDescriptionValid(!!description);
		if (!title || !description) {
			return;
		}
		dispatch({
			type: ADD_TODOS,
			payload: {
				id: todos.length + 1,
				title,
				description,
				status: false,
			},
		});
	};
	const titleClassName = isTitleValid ? null : 'red';
	const descriptionClassName = isDescriptionValid ? null : 'red';
	return (
		<div className={'todoForm'}>
			<div className={'inputForm'}>
				<label>Title</label>
				<input
					className={titleClassName}
					type='text'
					placeholder='Enter title'
					ref={titleRef}
				/>
				{!isTitleValid && <p className={'message'}>{MESSAGE}</p>}
			</div>
			<div className={'inputForm'}>
				<label>Description</label>
				<input
					className={descriptionClassName}
					type='text'
					placeholder='Enter description'
					ref={descriptionRef}
				/>
				{!isDescriptionValid && <p className={'message'}>{MESSAGE}</p>}
			</div>
			<button onClick={handleClick}>Create</button>
		</div>
	);
};
