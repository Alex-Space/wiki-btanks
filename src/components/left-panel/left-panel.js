import React from 'react';
import './left-panel.css';
import {
    Nav,
    Form,
    FormControl,
    Accordion,
    Card,
    Button,
    Col
} from 'react-bootstrap';

const LeftPanel = (props) => {
    return(
        <Col xs="12" xl="2" md="3" className="bt-left-panel-col">
            <Nav defaultActiveKey="/home" className="flex-column">
                <Form>
                    <FormControl type="text" placeholder="Поиск..." className="mr-sm-2" />
                </Form>
                <div className="left-navigation-box">
                    <Accordion>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                    Танки
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    <Nav.Link href="/home">Tinker</Nav.Link>
                                    <Nav.Link href="/home">Exploder</Nav.Link>
                                    <Nav.Link href="/home">Scout</Nav.Link>
                                    <Nav.Link href="/home">Light Tank</Nav.Link>
                                    <Nav.Link href="/home">Helicopter</Nav.Link>
                                    <Nav.Link href="/home">Medivac 2.0</Nav.Link>
                                    <Nav.Link href="/home">Disributor</Nav.Link>
                                    <Nav.Link href="/home">Demolisher</Nav.Link>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                    Предметы
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body>
                                    <Nav.Link href="/home">Mine</Nav.Link>
                                    <Nav.Link href="/home">Teleporter</Nav.Link>
                                    <Nav.Link href="/home">Light Force Shield</Nav.Link>
                                    <Nav.Link href="/home">Smoke Generator</Nav.Link>
                                    <Nav.Link href="/home">Cold Fusion Battery</Nav.Link>
                                    <Nav.Link href="/home">Light Stationary Tank Turret</Nav.Link>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                                    Апгрейды
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="2">
                                <Card.Body>
                                    <Nav.Link href="/home">Mine</Nav.Link>
                                    <Nav.Link href="/home">Teleporter</Nav.Link>
                                    <Nav.Link href="/home">Light Force Shield</Nav.Link>
                                    <Nav.Link href="/home">Smoke Generator</Nav.Link>
                                    <Nav.Link href="/home">Cold Fusion Battery</Nav.Link>
                                    <Nav.Link href="/home">Light Stationary Tank Turret</Nav.Link>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </div>
                
            </Nav>
        </Col>
    );
}

export default LeftPanel;