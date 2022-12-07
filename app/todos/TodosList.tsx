import React from "react";

function TodosList() {
  const todos = await fetchTodos();

  return <div>TodosList</div>;
}

export default TodosList;
