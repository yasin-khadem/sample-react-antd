import React from 'react';

import {
    Row,
    Col,
} from 'antd';
import App from './App';
class Layout extends React.Component {

    render() {
        return (
            <Row>
                <Col span={24}>
                    <App />
                 </Col>
            </Row> 
        );
    }
}
export default Layout;