
import './App.css';
import News from './components/News/News';
import { useEffect, useState } from 'react';
import Rechart from './components/Rechart/Rechart';
import axios from 'axios';


function App() {
  const [articles, setArticles] = useState([]);
  // useEffect(async () => {
  //   const key = `ea54278051f84078a47ef170118fd2dc`;
  //   const day = `2021-02-03`;
  //   const url = `http://newsapi.org/v2/everything?q=tesla&from=${day}&sortBy=publishedAt&apiKey=${key}`;
  //   try {
  //     const promise = await fetch(url);
  //     const data = await promise.json();
  //     setArticles(data.articles);
  //   }
  //   catch (error) {
  //     console.log(error);
  //   }
  // }, [])

  useEffect(() => {
    const key = `ea54278051f84078a47ef170118fd2dc`;
    const day = `2021-02-03`;
    const url = `http://newsapi.org/v2/everything?q=tesla&from=${day}&sortBy=publishedAt&apiKey=${key}`;
    axios(url)
      .then(data => setArticles(data.data.articles))
  }, [])
  return (
    <div >
      <div>
        <Rechart></Rechart>
      </div>
      <div>
        {
          articles.map(article => <News article={article}></News>)
        }
      </div>
    </div>
  );
}

export default App;
