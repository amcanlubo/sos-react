import React,{useState, useEffect} from 'react'
import axios from 'axios'
const News = () => {
    
    const [articles,setArticles] = useState([])

    useEffect(() => {
        axios.get('https://newsapi.org/v2/top-headlines?country=ph&category=science&apiKey=32869946a7f34698b31c75817249f987')
            .then((response)=>{
                setArticles(response.data.articles)
            })
            .catch((error)=>{
                console.log(error)
            })
            
    }, [])

    
    return (
        <div>
            {articles.map((article) =>
                (
                    <>
                    <div>{article.title}</div>
                    <div>{article.author}</div>
                    <div>{article.description}</div>
                    <img src={article.urlToImage} />
                    </>
                )
            )}
        </div>
    )
}

export default News
