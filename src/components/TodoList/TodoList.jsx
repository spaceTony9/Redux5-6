import { Grid, GridItem, Text, Todo } from 'components';
import { useSelector } from 'react-redux';
import { selectTodos } from 'reduxTodo/todoSlice.js';

export const TodoList = () => {
  const todos = useSelector(selectTodos);
  console.log(todos);
  return (
    <>
      <Grid>{todos.map((todo, index) => {
        return <GridItem key={todo.id}>
          <Todo text={todo.todo} count={index + 1} />
        </GridItem>;
      })}
      </Grid>
      <Text textAlign="center">We did not find any todo😯</Text>
    </>
  );
};
