import React, {useState, useEffect,createElement} from 'react'
import {useNavigate, useLocation} from "react-router-dom"
import Icon from '@ant-design/icons';
import { LikeOutlined, MessageOutlined, StarOutlined} from '@ant-design/icons';
import { Avatar, List, Skeleton, Switch } from 'antd';
import Layout from '../Components/Layout/Layout';

const IconText = ({ icon, text }) => (
    <>
      {createElement(icon, { style: { marginRight: 8 } })}
      {text}
    </>
  );

const Spinner = (path = "login") => {
    const [loading, setLoading] = useState(true);

    const onChange = (checked) => {
        setLoading(!checked);
    }

    const listData = Array.from({ length: 3 }).map((_, i) => ({
        href: 'https://ant.design',
        title: `ant design part ${i + 1}`,
        avatar: `https://xsgames.co/randomusers/avatar.php?g=pixel&key=${i}`,
        description:
          'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        content:
          'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
      }));


    const [count, setCount] = useState(10);
    const navigate = useNavigate();
    const location =useLocation();  

    useEffect(()=>{
        const interval = setInterval(()=>{
            setCount((prevValue)=> --prevValue );
        },1000);
        count === 0 && navigate(`/${path}`,{
            state: location.pathname
        })
        return ()=> clearInterval(interval)
    }, [count, navigate, location, path])

  return (
    <Layout title={"Cargoa - Loading"}>
      {/* <Switch checked={!loading} onChange={onChange} style={{ marginBottom: 16 }} /> */}
      <List
        itemLayout="vertical"
        size="large"
        dataSource={listData}
        renderItem={(item) => (
          <List.Item
            key={item.title}
            actions={
              !loading
                ? [
                    <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                    <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                    <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                  ]
                : undefined
            }
          >
            <Skeleton loading={loading} active avatar>
              <List.Item.Meta
                avatar={<Avatar src={item.avatar} />}
                title={<a href={item.href}>{item.title}</a>}
                description={item.description}
              />
              {item.content}
            </Skeleton>
          </List.Item>
          
        )}
      />
    </Layout>
  )
}
 
export default Spinner