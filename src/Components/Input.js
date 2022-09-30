import { Button, InputGroup, Form, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const Input = ({
  inputTask,
  setInputTask,
  inputRef,
  addTask,
  editTask,
  editForm,
}) => {
  return (
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
  );
};

export default Input;
