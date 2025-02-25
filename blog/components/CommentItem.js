import React from 'react'
import { Avatar, Comment } from 'antd';
import '../static/style/components/comment.css'
import {gen_text_img} from './utils'

// 默认头像
const defaultAvatar = <Avatar
  src="../static/img/22222.jpg"
/>



const CommentItem = ({ item, handleReply, ...rest }) => (
  <Comment
    actions={handleReply && [<span key="reply" onClick={handleReply}>回复</span>]}
    author={<a>{item.com_name}</a>}
    avatar={item.avatar || gen_text_img(`${item.com_name}`)}
    content={<p>{item.comment}</p>}
    datetime={item.add_time}
    {...rest}
  />
)

export default CommentItem;

