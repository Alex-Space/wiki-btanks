import React from 'react';
import './tank-details.css';
import tankImage from './black-paragon.jpg';
import shopImage from './tank-construction-hall.png';
import tankIcon from './BTNBlackParagon.bmp';
import TankSkillsBox from '../tank-skills-box';
import {
    Card,
    Col,
} from 'react-bootstrap';

const TankDetails = (props) => {
    return(
        <div className="bt-tank-details">
            <Col lg="12">
                <div className="bt-main-page-title-box">
                    <img className="bt-tank-icon" src={tankIcon} alt="tank-icon" />
                    <h1 className="bt-main-page-title">Black Paragon</h1>
                </div>
            </Col>
            <div className="bt-content-body">
                
                    <Col lg="4" md="5">
                        <Card className="tank-cv" bg="light" style={{ width: '100%' }}>
                            <Card.Img variant="top" src={tankImage} />
                            <Card.Body>
                            <Card.Text>
                                <span className="options-row">
                                    <span className="title">Тип: </span>
                                    <span className="amount">наземный</span>
                                </span>
                                <span className="options-row">
                                    <span className="title">Стоимость: </span>
                                    <span className="amount">14000</span>
                                </span>
                                <span className="options-row">
                                    <span className="title">Здоровье: </span>
                                    <span className="amount">13000</span>
                                </span>
                                <span className="options-row">
                                    <span className="title">Скорость: </span>
                                    <span className="amount">300</span>
                                </span>
                                
                                <span className="options-row">
                                    <span className="title">Требование: </span>
                                    <span className="amount">12 Armor Upgrades</span>
                                </span>
                            </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card className="bt-tank-shop-box" bg="light" style={{ width: '100%' }}>
                            <Card.Header as="h5">Tank Construction Hall</Card.Header>
                            <Card.Img variant="top" src={shopImage} />
                            <Card.Body>
                            <Card.Text>
                                сюда вывести кликабельные картинки танков, которые продает магазин, ведущие на свои детальные страницы.
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg="8" md="7">
                        <TankSkillsBox />
                    </Col> 
                
            </div>
            
        </div>
    );
}

export default TankDetails;