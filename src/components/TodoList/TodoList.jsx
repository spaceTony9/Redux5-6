import { Grid, GridItem, Text, Todo } from 'components';
import { useSelector } from 'react-redux';
import { selectFilterTodo } from 'reduxTodo/todoSlice';

export const TodoList = () => {
  const filterTodos = useSelector(selectFilterTodo);

  return (
    <>
      <Grid>
        {filterTodos.map((todo, index) => {
          return (
            <GridItem key={todo.id}>
              <Todo text={todo.todo} count={index + 1} id={todo.id} />
            </GridItem>
          );
        })}
      </Grid>
      {filterTodos.length === 0 && (
        <Text textAlign="center">We did not find any todo😯</Text>
      )}
    </>
  );
};
