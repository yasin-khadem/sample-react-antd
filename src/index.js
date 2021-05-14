import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import Layout from './components/Layout';
import {BrowserRouter} from "react-router-dom";
import {
    ConfigProvider,
} from 'antd';


ReactDOM.render(
    <BrowserRouter>
        <ConfigProvider direction='rtl'>
            <Layout/>
        </ConfigProvider>
    </BrowserRouter>,
    document.getElementById('root')
)
;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
