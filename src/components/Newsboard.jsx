import Newsitem from "./Newsitem";
import { useEffect } from "react";
import { useState } from "react";
import { NewsboardHeading } from "./NewsboardHeading";
import WeatherApp from "./WeatherApp";

const Newsboard = ({category}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [countryCode, setCountryCode] = useState("in");
  const [Articles,setArticles] = useState([]);

  useEffect(()=>{
    setLoading(true);
    setError(null);
    let url = `https://newsapi.org/v2/top-headlines?country=${countryCode}&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
    fetch(url).then(response=> response.json()).then(data=> {setArticles(data.articles); setLoading(false)}).catch(e => setError(e));
  },[category, countryCode]);

  let content;

  if (error) {
    content = <p className="fs-2 fs-medium text-center text-light mt-5">Something went wrong!</p>;
  }

  if (loading) {
    content = <p className="fs-2 fs-medium text-center text-light mt-5">Loading...</p>
  }

  else {
    content = <div className="articlesBox">
      <WeatherApp />
      {Articles.map((news,index)=>{
      return <Newsitem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
     })}</div>
  }

    return(
      <div id="news">
        <NewsboardHeading setCountryCode={setCountryCode} />
        {/* {(loading || error) && <WeatherApp />} */}
        {content}
      </div>
    )
    
  }


  
export default Newsboard;