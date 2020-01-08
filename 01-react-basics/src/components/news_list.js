import React from 'react'

import NewsListItem from './news_list_item'

const NewsList = (props) => {
    const items = props.news.map(item => (
           <NewsListItem key={item.id} item={item} />
        )
    )
    
    return (
        <div>  
        {props.children}
           {items}
        </div>
    )
}

export default NewsList
