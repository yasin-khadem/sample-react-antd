import React, {useState} from "react";
import {InstagramOutlined, UserOutlined, LockOutlined} from '@ant-design/icons';
import {Form, Input, Button, Checkbox,Card } from 'antd';
import {Row, Col} from 'antd';

const Register = (props) => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')
    const onFinish = (values) => {
        props.history.push('/')
    }
    const handleEmailInput = (e) => {
        setEmail(e.target.value)
    }
    const handlePasswordInput = (e) => {
        setPassword(e.target.value)
    }
    const handleNameInput = (e) => {
        setName(e.target.value)
    }
    const handleConfirmInput = (e) => {
        setConfirm(e.target.value)
    }


    return (
        <>
            <div style={{backgroundColor: '#e7e7e7'}}>
                <Row justify="center" align="middle" style={{height: '100vh'}}>
                    <Col xs={22} sm={14} md={10} lg={8} xl={6}>
                        <Card style={{padding: '30px 5px'}}>
                            <Row justify="center" style={{marginBottom: '48px'}}>
                                <InstagramOutlined style={{fontSize: '100px'}} onClick={onFinish}/>
                            </Row>
                            <Form
                                name="normal_login"
                                className="login-form"
                                initialValues={{
                                    remember: true,
                                }}
                                onFinish={onFinish}
                            >
                                <Form.Item
                                    onChange={handleNameInput}
                                    value={name}
                                    name="name"
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
                                    onChange={handleEmailInput}
                                    value={email}
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
                                    onChange={handlePasswordInput}
                                    value={password}
                                    style={{marginTop: '8px'}}
                                    rules={[
                                        {
                                            required: true,
                                            message: 'لطفا رمز عبور را وارد کنید',
                                        },
                                    ]}
                                >
                                    <Input.Password
                                        prefix={<LockOutlined className="site-form-item-icon"/>}
                                        type="password"
                                        placeholder="رمز عبور"
                                    />
                                </Form.Item>
                                <Form.Item
                                    name="confirm"
                                    onChange={handleConfirmInput}
                                    value={confirm}
                                    dependencies={['password']}
                                    hasFeedback
                                    rules={[
                                        {
                                            required: true,
                                            message: 'رمز عبور را تایید کنید',
                                        },
                                        ({ getFieldValue }) => ({
                                            validator(_, value) {
                                                if (!value || getFieldValue('password') === value) {
                                                    return Promise.resolve();
                                                }

                                                return Promise.reject(new Error('تکرار رمز عبور مطابقت ندارد'));
                                            },
                                        }),
                                    ]}
                                >
                                    <Input.Password
                                        placeholder="تکرار رمز عبور"
                                        prefix={<LockOutlined className="site-form-item-icon"/>}
                                        type="password"
                                    />
                                </Form.Item>
                                <Form.Item>
                                    <Row>
                                        <Col>
                                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                                <Checkbox>مرا به خاطر بسپار</Checkbox>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Form.Item>

                                <Form.Item>
                                    <Button type="primary" htmlType="submit" style={{marginLeft: '10px'}}
                                            className="login-form-button">
                                        ثبت نام
                                    </Button>
                                </Form.Item>
                            </Form>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    )
}


export default Register
