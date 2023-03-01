import { useState } from 'react';
import { TodoDetails } from '../../../todoDetails/todoDetails';

export const Todo = ({ item }) => {
	const [open, setOpen] = useState(false);

	const handleOpen = () => setOpen(true);

	return (
		<>
			<TodoDetails open={open} item={item} setOpen={setOpen} />
			<tr onClick={handleOpen}>
				<td>{item.id}</td>
				<td>{item.title}</td>
				<td>{item.description}</td>
				<td>
					<input type='checkbox' checked={item.status} />
				</td>
			</tr>
		</>
	);
};
