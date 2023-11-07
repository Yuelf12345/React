import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import style from './index.module.scss'

import { useNavigate } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { userLogin } from '@/store/reducer/user';


const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
};

type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
};

const Login: React.FC = () => {
    const navigateTo = useNavigate()
    const { username, password, remember } = useSelector((state: any) => state.user)
    const dispatch = useDispatch()
    const onFinish = (values: any) => {
        dispatch(userLogin(values))
        navigateTo('/')
        localStorage.setItem('token', username)
    };
    return (
        <div>
            <div className={style.bg} >
            <h2 className={style.text}>Login</h2>

                <Form
                    className={style.login}
                    name="basic"
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                    initialValues={{ username, password, remember }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item<FieldType>
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item<FieldType>
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item<FieldType>
                        name="remember"
                        valuePropName="checked"
                        wrapperCol={{ offset: 4, span: 16 }}
                    >
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}

export default Login;