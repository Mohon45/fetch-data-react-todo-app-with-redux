import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllTodos } from "../redux/actions/todosActions";

const Todos = () => {
  const { isLoading, todos, error } = useSelector((state) => state);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTodos());
  }, []);

  return (
    <div>
      <h1>Todos</h1>
      {isLoading && <h3>Loading.....</h3>}
      {error && <h3>{error.message}</h3>}
      <section>
        {todos &&
          todos.map((todo) => (
            <article key={todo.id}>
              <h4>{todo.id}</h4>
              <h2>{todo.title}</h2>
            </article>
          ))}
      </section>
    </div>
  );
};

export default Todos;
