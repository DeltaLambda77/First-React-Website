import React from "react"

export default function RandomArticle(props) {
    return (
        <div className="random-article-container">
            <p>{props.articleSource}</p>
            <p>{props.articleLeadParagraph}</p>
            <p>{props.articleImageURL}</p>
            <p>{props.articleTitle}</p>
            <p>{props.articleURL}</p>
            <p>{props.articleSection}</p>
            <p>{props.articleSnippet}</p>
            <p>{props.articlePublishedDate}</p>
            <p>{props.articleAbstract}</p>
        </div>
    )
}

/* articleAbstract={newsMonthData.articleAbstract}
                articleLeadParagraph={newsMonthData.articleLeadParagraph}
                articleImageURL={newsMonthData.articleImageURL}
                articleTitle={newsMonthData.articleTitle}
                articleURL={newsMonthData.articleURL}
                articleSection={newsMonthData.articleSection}
                articleSnippet={newsMonthData.articleSnippet}
                articlePublishedDate={newsMonthData.articlePublishedDate}
                articleSource={newsMonthData.articleSource}

                */