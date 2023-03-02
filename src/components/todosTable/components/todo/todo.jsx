import { useState } from 'react';
import { TodoDetails } from '../../../todoDetails/todoDetails';
import { memo } from 'react';
import { useDispatch } from 'react-redux';
import { UPDATE_STATUS } from '../../../../store/actionTypes';

export const Todo = memo(function Todo({ item }) {
	const [open, setOpen] = useState(false);
	const dispatch = useDispatch();

	const handleOpen = () => setOpen(true);

	const handleChange = (item) => {
		dispatch({ type: UPDATE_STATUS, payload: item });
	};
	return (
		<>
			<TodoDetails open={open} item={item} setOpen={setOpen} />
			<tr onClick={handleOpen}>
				<td>{item.id}</td>
				<td>{item.title}</td>
				<td>{item.description}</td>
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
});
