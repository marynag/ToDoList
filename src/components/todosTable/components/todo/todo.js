export const Todo = ({ item }) => {
	return (
		<tr>
			<td>{item.id}</td>
			<td>{item.title}</td>
			<td>{item.description}</td>
			<td>
				<input type='checkbox' name='scales' checked={item.status} />
			</td>
		</tr>
	);
};
