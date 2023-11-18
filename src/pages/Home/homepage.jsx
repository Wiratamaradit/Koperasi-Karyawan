import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "../../Components/Sidebar/sidebar";

const Home = (props) => {
  return (
    <>
      <Container fluid>
        <Row style={{ width: "100vw", height: "100vh" }}>
          <Col style={{ padding: 0 }} xs={3} sm={3} md={3}>
            <Sidebar />
          </Col>
          <Col xs={9} sm={9} md={9}>
            this is a content
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Home;