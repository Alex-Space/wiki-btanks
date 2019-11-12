import React from 'react';
import {
    Card
} from 'react-bootstrap';
import TankSkill from '../tank-skill';
import './tank-skills-box.css';

const TankSkillsBox = (props) => {
    return(
        <div className="bt-tank-skills-box">
            <Card className="bt-skills" bg="light" style={{ width: '100%' }}>
                <Card.Header as="h5">Способности</Card.Header>
                <TankSkill />
                <TankSkill />
                <TankSkill />
                <TankSkill />
                <TankSkill />
                <TankSkill />
            </Card>
            
        </div>
    );
}

export default TankSkillsBox;