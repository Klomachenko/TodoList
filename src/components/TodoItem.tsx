import { Todo } from '../types/todo';

interface TodoItemProps {
  todo: Todo;
}

const TodoItem = ({ todo }: TodoItemProps) => {
  return <div>{todo.title}</div>;
};

export default TodoItem;
