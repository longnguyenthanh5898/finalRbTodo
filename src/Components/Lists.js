import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
const Lists = ({ lists, handleEdit, inputTask, handleDelete }) => {
  return (
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
  );
};

export default Lists;
