import "bootstrap/dist/css/bootstrap.min.css";

import { useState, useRef, useEffect } from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Title from "./Title";
import Input from "./Input";
import Lists from "./Lists";

const App = () => {
  //get data LS
  const getDataFromLS = () => {
    return localStorage.getItem("lists")
      ? JSON.parse(localStorage.getItem("lists"))
      : [];
  };
  //handleDelete
  const handleDelete = (id) => {
    let data = getDataFromLS();
    data.splice(id, 1);
    localStorage.setItem("lists", JSON.stringify(data));
    setLists(data);
  };
  // addTask
  const addTask = (task) => {
    let data = getDataFromLS();
    data = [...data, { task: task }];
    localStorage.setItem("lists", JSON.stringify(data));
    setLists(data);
    setInputTask("");
  };
  // id state
  const [id, setId] = useState();
  // edit task
  const editTask = () => {
    let data = getDataFromLS();
    let editedTask = data[id];
    editedTask.task = inputTask;
    data[id] = editedTask;
    localStorage.setItem("lists", JSON.stringify(data));
    setLists(data);
    setEditForm(false);
    setInputTask("");
  };
  // handleEdit
  const handleEdit = (task, id) => {
    setEditForm(true);
    setInputTask(task);
    setId(id);
  };

  const [lists, setLists] = useState(getDataFromLS());
  const [inputTask, setInputTask] = useState("");
  const inputRef = useRef();
  // input focus
  useEffect(() => {
    inputRef.current.focus();
  });

  // edit form
  const [editForm, setEditForm] = useState(false);

  return (
    <div className="App">
      <Container>
        <Title />

        <Input
          inputTask={inputTask}
          setInputTask={setInputTask}
          inputRef={inputRef}
          editForm={editForm}
          addTask={addTask}
          editTask={editTask}
        />

        <Lists
          lists={lists}
          handleEdit={handleEdit}
          inputTask={inputTask}
          handleDelete={handleDelete}
        />
      </Container>
    </div>
  );
};
export default App;
