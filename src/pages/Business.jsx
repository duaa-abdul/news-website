import React, { useState, useEffect } from 'react';
import Button from '../Components/Button';

const Business = () => {
  const [search, setSearch] = useState([]);
  const apiKey = '1ee1074da431483da1eee737cdca4d82';

  const getData = async () => {
    try {
      const response = await fetch(`https://newsapi.org/v2/everything?q=business&apiKey=${apiKey}`);
      const jsonData = await response.json();
      setSearch(jsonData.articles); 
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      <h1 className="my-4 text-center">Business News</h1>

      <div className="row">
        {search.map((news, index) => (
          <div key={index} className="col-md-4 d-flex">
            <div className="card mb-4 shadow-sm" style={{ width: '100%' }}>
              {news?.urlToImage && (
                <img
                  src={news.urlToImage}
                  className="card-img-top"
                  alt="news-img"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
              )}
              <div className="card-body">
                <h5 className="card-title">{news?.title?.slice(0, 60)}</h5>
                <p className="card-text">{news?.description}...</p>
                {/* <Button
                id={news?.id}
                  href={news.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Read Full News
                </Button> */}
                <Button id={encodeURIComponent(news.title)} />

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Business;

