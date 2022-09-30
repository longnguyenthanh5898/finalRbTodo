import "bootstrap/dist/css/bootstrap.min.css";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { useState, useRef, useEffect } from "react";
import { Button, InputGroup, Form, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Title from "./Title";

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
        {/*Heading  */}
        <Title />

        {/* Input & Add btn */}
        <Row className="justify-content-center mb-5">
          <Col sm={12} lg={8}>
            <Row>
              {/* Input */}
              <Col lg={9} md={9} sm={12}>
                <InputGroup className="mb-3">
                  <Form.Control
                    value={inputTask}
                    onChange={(e) => setInputTask(e.target.value)}
                    ref={inputRef}
                  />
                </InputGroup>
              </Col>

              {/*ADD TASK  */}
              {!editForm && (
                <Col lg={3} md={3} sm={12}>
                  <Button
                    variant="dark"
                    className="w-100"
                    onClick={() => {
                      addTask(inputTask);
                    }}
                  >
                    ADD TASK
                  </Button>
                </Col>
              )}

              {/* EDIT TASK */}
              {editForm && (
                <Col lg={3} md={3} sm={12}>
                  <Button
                    variant="dark"
                    className="w-100"
                    onClick={() => {
                      editTask(inputTask);
                    }}
                  >
                    EDIT
                  </Button>
                </Col>
              )}
            </Row>
          </Col>
        </Row>

        {/* List */}
        <Row className="justify-content-center ">
          <Col sm={12} lg={8}>
            <div>
              {lists.map((list, index) => {
                return (
                  <Container key={list.id}>
                    <Row>
                      {/*Task item */}
                      <Col
                        lg={10}
                        md={10}
                        sm={10}
                        className="p-2 px-3 pt-2 mb-2 bg-secondary text-white fw-bold"
                      >
                        <div key={list.id}>{list.task}</div>
                      </Col>

                      {/* Edit button */}
                      <Col lg={1} md={1} sm={1} className="p-2 px-3 mb-2">
                        <AiFillEdit
                          id={list.id}
                          key={list.id}
                          className="edit-icon"
                          onClick={(e) => {
                            handleEdit(inputTask, index);
                          }}
                        />
                      </Col>

                      {/* Delete button */}
                      <Col lg={1} md={1} sm={1} className="p-2 px-3 mb-2">
                        <AiFillDelete
                          id={list.id}
                          key={list.id}
                          className="delete-icon"
                          onClick={(e) => {
                            handleDelete(index);
                          }}
                        />
                      </Col>
                    </Row>
                  </Container>
                );
              })}
            </div>
          </Col>
        </Row>
        {/* List */}
      </Container>
    </div>
  );
};
export default App;
