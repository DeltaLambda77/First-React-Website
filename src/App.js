import React from "react"

export default function App() {
    const [newsData, setNewsData] = React.useState()
    const apiKey = "nGpPAWCw1lOS5eEANJAG6G0O6priTASa";
    const month = "12";
    const year = "2021";
    const apiLink = "https://cors-anywhere.herokuapp.com/https://api.nytimes.com/svc/archive/v1/" + year + "/" + month + ".json?api-key=" + apiKey

    console.log(newsData)
    React.useEffect(function getApiData() {
        fetch(apiLink)
            .then(response => response.json())
            .then(data => setNewsData(data.response.docs))
        }, [])

        
    return (
        <div>
            <h1>{JSON.stringify(newsData)}</h1>
        </div>
    )
}