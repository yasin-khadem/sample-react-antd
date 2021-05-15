import React from "react";
import {Col, Image, Row} from "antd";
import {withRouter} from 'react-router-dom'

const User = ({name, username, img, email, history}) => {
    const handlClick = () => {
        history.push(`/user/${username}`, {
            name,
            username,
            email,
            img
        })
    }

    return (
        <>
            <div style={{cursor: 'pointer'}} onClick={handlClick}>
                <Row justify='center'>
                    <Col>
                        <Image
                            style={{width: '80%', margin: '0 auto', borderRadius: '50%'}}
                            src={img}
                        />
                    </Col>
                </Row>
                <Row justify='center'>
                    <Col>
                        <p>{username}</p>
                    </Col>
                </Row>
            </div>
        </>
    )

}

export default withRouter(User)



