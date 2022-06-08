import React from "react"

export default function RandomArticle(props) {
    return (
        <div className="random-article-container">
            <p>{props.articleSection}</p>
            <h1><i>{props.articleTitle}</i></h1>
            <p><i>"{props.articleAbstract}"</i></p>
            <p>{props.articlePublishedDate}</p>
            <p>{props.articleLeadParagraph}</p>
            <img src={`https://static01.nyt.com/` + props.articleImageURL} alt="NYT"></img>
            <div className="random-articles-footer">
                <a href={props.articleURL}>Read More:</a>
                <p>Taken from: {props.articleSource}</p>
            </div>
        </div>
    )
}

