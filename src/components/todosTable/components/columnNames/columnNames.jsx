import { todoCardMap } from '../../../../constants/constants';

export const ColumnNames = () => {
	const columnNames = Object.keys(todoCardMap);
	return (
		<tr>
			{columnNames.map((column) => {
				return <th key={column}>{column.toUpperCase()}</th>;
			})}
		</tr>
	);
};
