import React from "react";
import "./styles.css";
import data from "./data/sample_news_stories.json";
const news = data.results.slice(0, 5); // Slice controls the amount of stories, can be edited.

let placeholderImage = "https://placehold.co/600x400?text=Coming+soon...";

export default function App() {
  return (
    <div className="App">
      <h1>Aaron Tripp 3170 News</h1>
      <div className="newsContainer">
        {news.map((story, index) => (
          <div className="newsCard" key={index}>
            <div className="topSection">
              <div className="imgContainer">
                <img
                  src={story.image_url || placeholderImage}
                  alt={story.title}
                  className="newsImg"
                />
              </div>
              <div className="titleAuthor">
                <h2>{story.title}</h2>
                <p>{story.creator}</p>
              </div>
            </div>
            <p>{story.description}</p>
            <div className="buttonContainer">
              <a
                href={story.link}
                target="_blank"
                rel="noopener noreferrer"
                className="button"
              >
                Continue reading
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
