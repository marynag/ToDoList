import './App.css';
import { TodosTable } from './components/todosTable/todosTable';
import { TodoForm } from './components/todoForm/todoForm';

function App() {
	return (
		<div className='App'>
			<TodoForm />
			<TodosTable />
		</div>
	);
}

export default App;
