import React from "react";
import {InstagramFilled, UserOutlined, LockOutlined} from '@ant-design/icons';
import {Form, Input, Button, Checkbox} from 'antd';
import {Row, Col} from 'antd';

class Login extends React.Component {
    NormalLoginForm = () => {
        const onFinish = (values) => {
            console.log('Received values of form: ', values);
        }
    }

    render() {
        return (
            <>
                <Row justify="center" align="middle" style={{height: '100vh'}}>
                    <Col xs={22} sm={16} md={10} lg={6} xl={6}>
                        <Row justify="center" style={{marginBottom: '24px'}}>
                            <InstagramFilled style={{fontSize: '132px'}}/>
                        </Row>
                        <Form
                            name="normal_login"
                            className="login-form"
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={this.onFinish}
                        >
                            <Form.Item
                                name="email"
                                rules={[
                                    {
                                        required: true,
                                        message: 'لطفا نام کاربری را وارد کنید',
                                    },
                                ]}
                            >
                                <Input prefix={<UserOutlined className="site-form-item-icon"/>}
                                       placeholder="نام کاربری"/>
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'لطفا رمز عبور را وارد کنید',
                                    },
                                ]}
                            >
                                <Input
                                    prefix={<LockOutlined className="site-form-item-icon"/>}
                                    type="password"
                                    placeholder="رمز عبور"
                                />
                            </Form.Item>
                            <Form.Item>
                                <Row justify="space-between">
                                    <Col>
                                        <Form.Item name="remember" valuePropName="checked" noStyle>
                                            <Checkbox>مرا به خاطر بسپار</Checkbox>
                                        </Form.Item>
                                    </Col>
                                    <Col>
                                        <a className="login-form-forgot" href="">
                                            رمز رو فراموش کردم
                                        </a>
                                    </Col>
                                </Row>
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" htmlType="submit" style={{marginLeft: '10px'}} className="login-form-button">
                                    ورود
                                </Button>
                                یا <a href="" >ثبت نام</a>
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>
            </>
        )
    }
}


export default Login
