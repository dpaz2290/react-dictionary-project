import React, {useState} from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary (){
    let [keyword, setKeyword] = useState ("");
    let [results, setResults] =useState(null);
    let [photos, setPhotos]= useState(null);

    function handleKeywordChange (event){
        setKeyword (event.target.value);
    }

    function handlePexelsResponse (response){
       setPhotos(response.data.photos);
        
    }

    function handleDictionaryResponse (response){
         setResults(response.data[0])
    }

    function search (event) {
        event.preventDefault();
        let apiUrl =`https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleDictionaryResponse);

        let pexelsApiKey= "563492ad6f917000010000011911369c3b5f4a4f886b86bad2d6b4c4";
        let pexelsApiUrl= `https://api.pexels.com/v1/search?query=${keyword}&per_page=3`;
        let headers= {Authorization: `Bearer ${pexelsApiKey}`};
        axios.get(pexelsApiUrl, {
            headers: headers,}).then(handlePexelsResponse);
    }

    return (
        <div className="Dictionary" >
            
            <section>
            
            <h1>
                What's the Word?
            </h1>
            
            <form onSubmit={search}>
                <input type="search" onChange={handleKeywordChange} placeholder="Type here..."/>
                <button type="submit">🔍</button>
            </form>
            
            </section>
            <Results results={results}/>
            <Photos photos={photos}></Photos>
        </div>
    )
}