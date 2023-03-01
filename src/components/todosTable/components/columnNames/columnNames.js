import { TODOS } from '../../../constants';

export const ColumnNames = () => {
	const columnNames = Object.keys(TODOS[0]);
	return (
		<tr>
			{columnNames.map((column) => {
				return <th key={column}>{column.toUpperCase()}</th>;
			})}
		</tr>
	);
};
