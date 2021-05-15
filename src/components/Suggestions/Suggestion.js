import React, {useEffect, useState} from "react";
import axios from "axios";
import User from "../User/User";
import {Divider} from "antd";

const Suggestions = () => {
    let [users, setUsers] = useState(null)
    let [avatars, setAvatars] = useState([
        'https://randomuser.me/api/portraits/women/87.jpg',
        'https://randomuser.me/api/portraits/women/89.jpg',
        'https://randomuser.me/api/portraits/women/90.jpg',
        'https://randomuser.me/api/portraits/women/86.jpg',
        'https://randomuser.me/api/portraits/women/85.jpg',
        'https://randomuser.me/api/portraits/women/84.jpg',
        'https://randomuser.me/api/portraits/women/83.jpg',
        'https://randomuser.me/api/portraits/women/82.jpg',
        'https://randomuser.me/api/portraits/women/81.jpg',
        'https://randomuser.me/api/portraits/women/88.jpg',
    ])

    useEffect(async () => {
        let {data} = await axios.get('https://jsonplaceholder.typicode.com/users')
        setUsers(data)
    }, [])

    return (
        <div>
            <Divider orientation="center">
                مخاطبین شما
            </Divider>
            <div>
                {users && users.map((item, index) => <User img={avatars[index]} key={item.id} {...item} />)}
            </div>
        </div>
    )
}

export default Suggestions



