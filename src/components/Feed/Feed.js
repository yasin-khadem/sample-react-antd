import React from "react";
import { Card } from 'antd';

const { Meta } = Card;
const Feed = ({author,download_url}) => {
    return(
        <Card hoverable
              style={{width: '100%',height:'auto',marginBottom:'18px'}}
              cover={<img style={{width: '100%',height:'100%'}} src={download_url} alt=''/>}>
            <Meta title={author} description="" />
        </Card>
    )
}




export default Feed