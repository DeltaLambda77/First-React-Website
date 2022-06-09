import React from "react"

export default function PopularArticles(props) {
    return (
        <div className="popular-articles-container">
            {props.toggleContent 
            ?
                <>
                    <p>{props.articleSection}</p>
                    <h1><i>{props.articleTitle}</i></h1>
                    <p>{props.articlePublishedDate}</p>
                    <p>{props.articleAbstract}</p>
                    <img src={props.articleImageURL} alt="NYT"></img>
                    <div className="popular-articles-footer">
                        <a href={props.articleURL}>Read more:</a>
                        <p>Taken from: The {props.articleSource}</p>
                    </div>
                    <button>Random</button>
                </>
            :
                <button
                className="load-content-button"
                onClick={props.loadPopularContent}
                >
                Load Content</button>
        }    
        </div>
    )
}

