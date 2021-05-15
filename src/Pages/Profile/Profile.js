import React from "react";
import {Col, Image, Row} from "antd";
import './Profile.css'

const Explore = ({location: {state: {name, username, email, img}}}) => {
    return (
        <>
            <Row className='profile' style={{marginTop: '48px'}} justify={'center'}>
                <Col>
                    <Image
                        style={{width: '80%', margin: '0 auto', borderRadius: '50%'}}
                        src={img}
                    />
                </Col>
                <Col>
                    <div style={{ marginTop: '6px',marginRight:'3px'}}>

                        <h2>{username}</h2>
                        <h4>{name}</h4>
                        <div>{email}</div>
                    </div>
                </Col>
            </Row>


        </>
    )
}
export default Explore

