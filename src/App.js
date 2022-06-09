import React from "react"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import PopularArticles from "./components/PopularArticles"
import RandomArticle from "./components/RandomArticle"

export default function App() {
    const [newsMonthData, setNewsMonthData] = React.useState()

    const [newsMonthArticle, setNewsMonthArticle] = React.useState({
        articleAbstract: "",
        articleLeadParagraph: "",
        articleImageURL: "",
        articleTitle: "",
        articleURL: "",
        articleSection: "",
        articlePublishedDate: "",
        articleSource: "",
        arrayLength: "",
        arrayPosition: 0,
        toggleContent: false    
    })


    const [popularNewsData, setPopularNewsData] = React.useState()

    const [popularNewsArticle, setPopularNewsArticle] = React.useState({
        articleAbstract: "",
        articlePublishedDate: "",
        articleSection: "",
        articleSource: "",
        articleTitle: "",
        articleURL: "",
        articleImageURL: "",
        arrayLength: "",
        arrayPosition: 0,
        toggleContent: false
    })


    const apiKey = "nGpPAWCw1lOS5eEANJAG6G0O6priTASa";
    const month = "12";
    const year = "2021";
    const apiMonthLink = "https://cors-anywhere.herokuapp.com/https://api.nytimes.com/svc/archive/v1/" + year + "/" + month + ".json?api-key=" + apiKey
    
    const apiPopularLink = "https://cors-anywhere.herokuapp.com/https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=" + apiKey

    const date1 = new Date()
    const realDate = date1.toString()

    console.log(popularNewsData)

    React.useEffect(function getApiMonthData() {
        fetch(apiMonthLink)
            .then(response => response.json())
            .then(data => setNewsMonthData(prevData => data))
    }, [newsMonthData])
    
    React.useEffect(function getPopular() {
        fetch(apiPopularLink)
            .then(response => response.json())
            .then(data => setPopularNewsData(prevData => data))
    }, [popularNewsData])

    function loadMonthContent() {
        setNewsMonthArticle(prevMonthArticle => ({
            ...prevMonthArticle,
            articleAbstract: newsMonthData.response.docs[0].abstract,
            articleLeadParagraph: newsMonthData.response.docs[0].leadparagraph,
            articleImageURL: newsMonthData.response.docs[0].multimedia[0].url,
            articleTitle: newsMonthData.response.docs[0].headline.main,
            articleURL: newsMonthData.response.docs[0].web_url,
            articleSection: newsMonthData.response.docs[0].section_name,
            articlePublishedDate: newsMonthData.response.docs[0].pub_date,
            articleSource: newsMonthData.response.docs[0].source,
            arrayLength: newsMonthData.response.docs.length,
            arrayPosition: 0,
            toggleContent: true    
        }))
    }
   
    function loadPopularContent() {
        setPopularNewsArticle(prevPopularArticle => ({
            ...prevPopularArticle,
            articleAbstract: popularNewsData.results[0].abstract,
            articlePublishedDate: popularNewsData.results[0].published_date,
            articleSection: popularNewsData.results[0].section,
            articleSource: popularNewsData.results[0].source,
            articleTitle: popularNewsData.results[0].title,
            articleURL: popularNewsData.results[0].url,
            articleImageURL: popularNewsData.results[0].media[0]["media-metadata"][2].url,
            arrayLength: popularNewsData.results.length,
            arrayPosition: 0,
            toggleContent: true
        }))
    }
/*
    function randomPopularArticle() {
        const randomNumber = Math.floor(Math.Random() * popularNewsArticle.arrayLength)
        setPopularNewsData(prevNewsData => ({
            ...prevNewsData,
            articleAbstract: data.results[randomNumber].abstract,
            articlePublishedDate: data.results[randomNumber].published_date,
            articleSection: data.results[randomNumber].section,
            articleSource: data.results[randomNumber].source,
            articleTitle: data.results[randomNumber].title,
            articleURL: data.results[randomNumber].url,
            articleImageURL: data.results[randomNumber].media[0]["media-metadata"][2].url,
        }))
    }*/

    return (
        <>
            <Hero />
            <PopularArticles 
                articleAbstract={popularNewsArticle.articleAbstract}
                articlePublishedData={popularNewsArticle.articlePublishedData}
                articleSection={popularNewsArticle.articleSection}    
                articleSource={popularNewsArticle.articleSource}
                articleTitle={popularNewsArticle.articleTitle}
                articleURL={popularNewsArticle.articleURL}
                articleImageURL={popularNewsArticle.articleImageURL}
                toggleContent={popularNewsArticle.toggleContent}
                loadPopularContent={loadPopularContent()}
            />
            <RandomArticle 
                articleAbstract={newsMonthArticle.articleAbstract}
                articleLeadParagraph={newsMonthArticle.articleLeadParagraph}
                articleImageURL={newsMonthArticle.articleImageURL}
                articleTitle={newsMonthArticle.articleTitle}
                articleURL={newsMonthArticle.articleURL}
                articleSection={newsMonthArticle.articleSection}
                articleSnippet={newsMonthArticle.articleSnippet}
                articlePublishedDate={newsMonthArticle.articlePublishedDate}
                articleSource={newsMonthArticle.articleSource}
                toggleContent={newsMonthArticle.toggleContent}
                loadMonthContent={loadMonthContent()}
            />
            <Footer /> 
        </>
    )
}