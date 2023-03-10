import './App.css';
import { TodosTable } from './components/todosTable/todosTable';
import { TodoForm } from './components/todoForm/todoForm';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './store/reducer';

const store = createStore(reducer);

function App() {
	return (
		<Provider store={store}>
			<div className='App'>
				<TodoForm />
				<TodosTable />
			</div>
		</Provider>
	);
}

export default App;
