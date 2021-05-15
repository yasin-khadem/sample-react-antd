import React, {useState} from "react";
import {Col, Layout, Row} from 'antd';
import {Drawer, Button, Menu} from 'antd';
import './Home.css'
import { BackTop } from 'antd';

import {InstagramOutlined, MenuOutlined, SearchOutlined, HomeOutlined, ArrowUpOutlined} from '@ant-design/icons'
import {Link, Switch, Route, NavLink} from "react-router-dom";
import Explore from "../Explore/Explore";
import NewHome from "../NewHome/NewHome";
import {withRouter} from 'react-router-dom'
import Profile from "../Profile/Profile";
import NoMatch from "../404";

const {SubMenu} = Menu
const style = {
    height: 40,
    width: 40,
    lineHeight: '40px',
    borderRadius: 4,
    backgroundColor: '#1088e9',
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
};
const {Header} = Layout;

const Home = ({history}) => {
    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };
    return (
        <>
            <Layout>
                <Header style={{backgroundColor: '#1890ff'}} className='header-padding'>
                    <Row justify="space-between" align='middle'>
                        <Col>
                            <Button type='link' style={{color: 'white', fontSize: '24px'}} onClick={showDrawer}>
                                <MenuOutlined/>
                            </Button>
                            <span className='mobile-hidden'>
                            <span style={{marginRight: '30px'}}>
                                <NavLink exact activeClassName='active' to='/'>
                                    <HomeOutlined style={{fontSize: '24px', color: 'white'}}/>
                                </NavLink>
                            </span>
                            <span style={{marginRight: '30px'}}>
                                <NavLink activeClassName='active' to='/explore'>
                                    <SearchOutlined style={{fontSize: '24px', color: 'white'}}/>
                                </NavLink>
                            </span>
                            </span>
                        </Col>
                        <Col>
                            <div className='logo' style={{marginTop: '8px'}} onClick={()=> history.push('/')}>
                                <InstagramOutlined style={{fontSize: '36px', color: 'white'}}/>
                            </div>
                        </Col>
                    </Row>

                    <Drawer
                        title="منو اصلی"
                        placement="right"
                        closable={false}
                        onClose={onClose}
                        visible={visible}
                    >

                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{height: '100%'}}
                        >
                            <SubMenu key="sub1" title="ورود و ثبت نام">
                                <Menu.Item>
                                    <Link to='/register' onClick={onClose}>
                                        <strong>
                                            ثبت نام
                                        </strong>
                                    </Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='/login' onClick={onClose}>
                                        <strong>
                                            ورود
                                        </strong>
                                    </Link>
                                </Menu.Item>
                                <Menu.Item>
                                    خروج
                                </Menu.Item>
                            </SubMenu>
                            <Menu.Item icon={<HomeOutlined style={{fontSize: '20px'}}/>} key="6">
                                <Link to='/' onClick={onClose}>
                                    <strong>
                                        صفحه اصلی
                                    </strong>
                                </Link>
                            </Menu.Item>
                            <Menu.Item icon={<SearchOutlined style={{fontSize: '20px'}}/>} key="5">
                                <Link to='/explore' onClick={onClose}>
                                    <strong>
                                        جست و جو
                                    </strong>
                                </Link>
                            </Menu.Item>
                        </Menu>
                    </Drawer>
                </Header>

            </Layout>
            <Switch>
                <Route exact path="/" component={NewHome}/>
                <Route exact path="/explore" component={Explore}/>
                <Route exact path="/user/:username" component={Profile} />
                <Route path='*' component={NoMatch}/>
            </Switch>
            <BackTop>
                <Button type="primary" shape="circle"  size='large'>
                    <ArrowUpOutlined />
                </Button>
            </BackTop>
        </>
    )
}
export default withRouter(Home)
