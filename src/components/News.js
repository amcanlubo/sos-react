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
                    <div class="mb-4">
                    <img class="h-48 lg:h-auto w-full flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" src={article.urlToImage}/>
                    <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <div class="mb-8">
                        <div class="text-gray-900 font-bold text-xl mb-2">{article.title}</div>
                        <p class="text-gray-700 text-base">{article.content}</p>
                    </div>
                    <div class="flex items-center">
                        <div class="text-sm">
                        <p class="text-gray-900 leading-none">{article.author}</p>
                        <p class="text-gray-600">{article.publishedAt}</p>
                        </div>
                    </div>
                    </div>
                    </div>
                    
                    // <div className="flex flex-col w-full">
                    //     <div>{article.title}</div>
                    //     <div>{article.author}</div>
                    //     <div>{article.publishedAt}</div>
                    //     <img src={article.urlToImage} />
                    // </div>
                )
            )}
        </div>
    )
}

export default News
