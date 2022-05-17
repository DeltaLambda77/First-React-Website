import React from "react"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import PopularArticles from "./components/PopularArticles"
import RandomArticle from "./components/RandomArticle"

export default function App() {
    const [newsMonthData, setNewsMonthData] = React.useState()
    const [popularNewsData, setPopularNewsData] = React.useState()

    const apiKey = "nGpPAWCw1lOS5eEANJAG6G0O6priTASa";
    const month = "12";
    const year = "2021";
    const apiMonthLink = "https://cors-anywhere.herokuapp.com/https://api.nytimes.com/svc/archive/v1/" + year + "/" + month + ".json?api-key=" + apiKey
    
    const apiPopularLink = "https://cors-anywhere.herokuapp.com/https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=" + apiKey

    const date1 = new Date()
    const realDate = date1.toString()

    console.log(popularNewsData.abstract)

    React.useEffect(function getApiMonthData() {
        fetch(apiMonthLink)
            .then(response => response.json())
            .then(data => setNewsMonthData(data.response.docs))
    }, [])
    
    React.useEffect(function getPopular() {
        fetch(apiPopularLink)
            .then(response => response.json())
            .then(data => setPopularNewsData(data.results[0]))
    }, [])
    return (
        <>
            <Hero />
            <PopularArticles />
            <RandomArticle />
            <Footer />
            <div>
                <h1>{/*{JSON.stringify(newsMonthData)}*/}</h1>
            </div>
        </>
    )
}