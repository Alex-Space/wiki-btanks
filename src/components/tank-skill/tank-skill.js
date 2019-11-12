import React from 'react';
import './tank-skill.css';
import skillImage from './BTNPhaseRetractor.bmp';
import {
    Card,
} from 'react-bootstrap';

const TankSkill = (props) => {
    return(
        <Card.Body>
            <div className="bt-skill-description">
                <div className="bt-skill-title">
                    <img src={skillImage} alt="skill-pic"/>
                    <h4>Phase Retractor</h4>
                </div>
                
                <Card.Text>
                    Запускает медленный невидимый теневой снаряд в 400 АОЕ с дальнего расстояния. Снаряд взрывается и наносит урон, замедляя противников на 4 сек.
                </Card.Text>

                <Card.Text className="bt-tank-skill-parameters">
                    <span className="bt-skill-parameter">
                        <span className="bt-skill-parameter-title">Урон:</span>
                        <span className="amount">800/1600/2400/3200/4000</span>
                    </span>
                    <span className="bt-skill-parameter">
                        <span className="bt-skill-parameter-title">Дальность:</span>
                        <span className="amount">1400/1600/1800/2000/2200</span>
                    </span>
                    <span className="bt-skill-parameter">
                        <span className="bt-skill-parameter-title">Замедление:</span>
                        <span className="amount">20%/30%/40%/50%/60%</span> 
                    </span>
                    <span className="bt-skill-parameter">
                        <span className="bt-skill-parameter-title">Cooldown:</span>
                        <span className="amount">25</span>
                    </span>
                </Card.Text>
            </div>
        </Card.Body>
    );
}

export default TankSkill;