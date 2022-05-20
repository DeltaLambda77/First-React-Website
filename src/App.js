import React from "react"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import PopularArticles from "./components/PopularArticles"
import RandomArticle from "./components/RandomArticle"

export default function App() {
    const [newsMonthData, setNewsMonthData] = React.useState({
        articleAbstract: "",
        articleLeadParagraph: "",
        articleImageURL: "",
        articleTitle: "",
        articleURL: "",
        articleSection: "",
        articleSnippet: "",
        articlePublishedDate: "",
        articleSource: ""    
    })

    const [popularNewsData, setPopularNewsData] = React.useState({
        articleAbstract: "",
        articlePublishedDate: "",
        articleSection: "",
        articleSource: "",
        articleTitle: "",
        articleURL: "",
        articleImageURL: "",
    })

    const apiKey = "nGpPAWCw1lOS5eEANJAG6G0O6priTASa";
    const month = "12";
    const year = "2021";
    const apiMonthLink = "https://cors-anywhere.herokuapp.com/https://api.nytimes.com/svc/archive/v1/" + year + "/" + month + ".json?api-key=" + apiKey
    
    const apiPopularLink = "https://cors-anywhere.herokuapp.com/https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=" + apiKey

    const date1 = new Date()
    const realDate = date1.toString()

    console.log(newsMonthData)

    React.useEffect(function getApiMonthData() {
        fetch(apiMonthLink)
            .then(response => response.json())
            .then(data => setNewsMonthData(prevMonthData => ({
                ...prevMonthData,
                articleAbstract: data.response.docs[0].abstract,
                articleLeadParagraph: data.response.docs[0].lead_paragraph,
                articleImageURL: data.response.docs[0].multimedia[0].url,
                articleTitle: data.response.docs[0].headline.main,
                articleURL: data.response.docs[0].web_url,
                articleSection: data.response.docs[0].section_name,
                articleSnippet: data.response.docs[0].snippet,
                articlePublishedDate: data.response.docs[0].pub_date,
                articleSource: data.response.docs[0].source,
            }))
            )
    }, [])
    
    React.useEffect(function getPopular() {
        fetch(apiPopularLink)
            .then(response => response.json())
            .then(data => setPopularNewsData(prevNewsData => ({
                ...prevNewsData,
                articleAbstract: data.results[0].abstract,
                articlePublishedDate: data.results[0].published_date,
                articleSection: data.results[0].section,
                articleSource: data.results[0].source,
                articleTitle: data.results[0].title,
                articleURL: data.results[0].url,
                articleImageURL: data.results[0].media[0]["media-metadata"][2].url
                }))
            )
    }, [])

    return (
        <>
            <Hero />
            <PopularArticles 
                articleAbstract={popularNewsData.articleAbstract}
                articlePublishedData={popularNewsData.articlePublishedData}
                articleSection={popularNewsData.articleSection}    
                articleSource={popularNewsData.articleSource}
                articleTitle={popularNewsData.articleTitle}
                articleURL={popularNewsData.articleURL}
                articleImageURL={popularNewsData.articleImageURL}
            />
            <RandomArticle 
                articleAbstract={newsMonthData.articleAbstract}
                articleLeadParagraph={newsMonthData.articleLeadParagraph}
                articleImageURL={newsMonthData.articleImageURL}
                articleTitle={newsMonthData.articleTitle}
                articleURL={newsMonthData.articleURL}
                articleSection={newsMonthData.articleSection}
                articleSnippet={newsMonthData.articleSnippet}
                articlePublishedDate={newsMonthData.articlePublishedDate}
                articleSource={newsMonthData.articleSource}
            />
            <Footer />
            <div>
                <h1>{/*{JSON.stringify(newsMonthData)}*/}</h1>
            </div>
        </>
    )
}