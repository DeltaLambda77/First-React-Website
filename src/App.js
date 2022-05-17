import React from "react"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import PopularArticles from "./components/PopularArticles"
import RandomArticle from "./components/RandomArticle"

export default function App() {
    const [newsData, setNewsData] = React.useState()
    const apiKey = "nGpPAWCw1lOS5eEANJAG6G0O6priTASa";
    const month = "12";
    const year = "2021";
    const apiLink = "https://cors-anywhere.herokuapp.com/https://api.nytimes.com/svc/archive/v1/" + year + "/" + month + ".json?api-key=" + apiKey

    const date1 = new Date()
    const realDate = date1.toString()

    console.log(realDate)
    React.useEffect(function getApiData() {
        fetch(apiLink)
            .then(response => response.json())
            .then(data => setNewsData(data.response.docs))
        }, [])
        
    return (
        <>
            <Hero />
            <PopularArticles />
            <RandomArticle />
            <Footer />
            <div>
                <h1>{/*{JSON.stringify(newsData)}*/}</h1>
            </div>
        </>
    )
}