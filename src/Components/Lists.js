import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import List from "./List";
const Lists = ({ lists, handleEdit, inputTask, handleDelete }) => {
  return (
    <Row className="justify-content-center ">
      <Col sm={12} lg={8}>
        <div>
          {lists.map((list, index) => {
            return (
              <List
                list={list}
                index={index}
                handleEdit={handleEdit}
                inputTask={inputTask}
                handleDelete={handleDelete}
              />
            );
          })}
        </div>
      </Col>
    </Row>
  );
};

export default Lists;
