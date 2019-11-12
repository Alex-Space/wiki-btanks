import React from 'react';
import './App.css';
import Topbar from '../top-bar';
import LeftPanel from '../left-panel';
import ContentArea from '../content-area';
import {
    Nav,
    Container,
    Row,
    Col
} from 'react-bootstrap';

function App() {
    return ( 
		<div className="bt-global-wrapper">
			<Topbar />
			<Container className="bt-global-container" fluid="true">
				<Row className="bt-global-row">
					<LeftPanel />
					<ContentArea />
				</Row >
			</Container> 
		</div>
    );
}

export default App;