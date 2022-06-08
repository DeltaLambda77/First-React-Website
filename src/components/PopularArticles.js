import React from "react"

export default function PopularArticles(props) {
    return (
        <div className="popular-articles-container">
            <h1><i>{props.articleTitle}</i></h1>
            <h5>{props.articleSection}</h5>
            <p>{props.articlePublishedDate}</p>
            <p>{props.articleAbstract}</p>
            <img src={props.articleImageURL} alt="NYT"></img>
            <div className="popular-articles-footer">
                <a href={props.articleURL}>Read more:</a>
                <p>Taken from: The {props.articleSource}</p>
            </div>
        </div>
    )
}

/*              articleAbstract={popularNewsData.abstract}
                articlePublishedData={popularNewsData.published_date}
                articleSection={popularNewsData.section}    
                articleSource={popularNewsData.source}
                articleTitle={popularNewsData.title}
                articleURL={popularNewsData.url} */