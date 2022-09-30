import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Title = () => {
  return (
    <Row className="justify-content-center mb-5 text-center">
      <Col sm={12} lg={8}>
        <h1> TO DO LIST</h1>
      </Col>
    </Row>
  );
};

export default Title;
