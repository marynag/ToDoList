import { Todo } from './components/todo/todo';
import { ColumnNames } from './components/columnNames/columnNames';
import './todosTable.css';
import { useSelector } from 'react-redux';
import { memo } from 'react';

export const TodosTable = memo(function TodosTable() {
	const todos = useSelector((state) => state);
	return (
		<table>
			<ColumnNames />
			{todos.map((item) => {
				return <Todo item={item} key={item.id} />;
			})}
		</table>
	);
});
