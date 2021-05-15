import React from "react";
import Feeds from "../../components/Feeds/Feeds";
import Suggestion from "../../components/Suggestions/Suggestion";
import {Col, Row} from "antd";
import './NewHome.css'

const NewHome = () => {
    return (
        <div style={{margin: '20px auto'}} className='newHome'>
        <Row justify={'space-between'}>
            <Col span={8}>
                <Suggestion/>
            </Col>
            <Col span={14}>
                <Feeds/>
            </Col>
        </Row>
        </div>
    )
}
export default NewHome