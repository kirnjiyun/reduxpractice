import React from "react";
import NewForm from "./component/NewForm";
import List from "./component/List";
import styles from "./App.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Logo from "./images/logo.png";

export default function App() {
    return (
        <div className={styles.app}>
            <h1 className={styles.title}>
                <img src={Logo} className={styles.logo} />
            </h1>
            <Container>
                <Row>
                    <Col>
                        <NewForm />
                    </Col>
                    <Col>
                        <List />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
