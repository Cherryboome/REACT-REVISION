import React from 'react'
import styles from  '../css/styles.module.css'

const NewsListItem = ({item}) => {


    return (
        <div className={styles.news_item}>
            <h3>{item.title}</h3>
            <div>{item.feed}</div>     
        </div>
    )
}

export default NewsListItem
