import { TODOS } from '../constants';
import { Todo } from './components/todo/todo';
import { ColumnNames } from './components/columnNames/columnNames';
import './todosTable.css';

export const TodosTable = () => {
	return (
		<table>
			<ColumnNames />
			{TODOS.map((item) => {
				return <Todo item={item} key={item.id} />;
			})}
		</table>
	);
};
