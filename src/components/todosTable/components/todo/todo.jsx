import { useState } from 'react';
import { TodoDetails } from '../../../todoDetails/todoDetails';
import { useDispatch } from 'react-redux';
import { UPDATE_STATUS } from '../../../../store/actionTypes';

export const Todo = ({ item }) => {
	const [open, setOpen] = useState(false);
	const dispatch = useDispatch();

	const handleOpen = (e) => {
		const target = e.target.getAttribute('data-id');
		if (target) {
			setOpen(true);
		}
	};

	const handleChange = (item) => {
		dispatch({ type: UPDATE_STATUS, payload: item });
	};
	return (
		<>
			<TodoDetails open={open} item={item} setOpen={setOpen} />
			<tr onClick={(e) => handleOpen(e)}>
				<td data-id={'modal'}>{item.id}</td>
				<td data-id={'modal'}>{item.title}</td>
				<td data-id={'modal'}>{item.description}</td>
				<td>
					<input
						type='checkbox'
						checked={item.status}
						onChange={() => handleChange(item)}
					/>
				</td>
			</tr>
		</>
	);
};
