import React from 'react';
import './content-area.css';
import TankDetails from '../tank-details'
import {
    Col,
} from 'react-bootstrap';

const ContentArea = (props) => {
    return(    
        <Col xs="12" xl="8" md="9">
            <div className="bt-main-content-area">
                <TankDetails />
                
            </div>
            
        </Col>
    );
}

export default ContentArea;