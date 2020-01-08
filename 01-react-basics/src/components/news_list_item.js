import React from 'react'
import Styles from  '../css/styles.css'

const NewsListItem = ({item}) => {


    return (
        <div className={Styles.news_item}>
            <h3>{item.title}</h3>
            <div>{item.feed}</div>     
        </div>
    )
}

export default NewsListItem
