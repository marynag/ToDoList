import { TODOS } from '../constants';
import { Todo } from './components/todo/todo';
import { ColumnNames } from './components/columnNames/columnNames';

export const TodosTable = () => {
	return (
		<table>
			<ColumnNames />
			{TODOS.map((item) => {
				return <Todo item={item} />;
			})}
		</table>
	);
};
