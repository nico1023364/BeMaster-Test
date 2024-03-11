import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Home = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=ES&hl=es&key=AIzaSyD7EN07EciJSVs6ikoHMeWUg7U8AYJXAoU`
        );
        const data = await response.json();
        setCategories(data.items.slice(0, 5));
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="home-container">
      <Navbar />
      <div className="content">
        <h2 className="title">Categorías</h2>
        <div className="category-list">
          {categories.map((category, index) => (
            <div key={index} className="category-card b-game-card">
              <Link
                to={{
                  pathname: `/category/${category.id}`,
                  state: { categoryTitle: category.snippet?.title },
                }}
                className="category-link b-game-card__cover"
              >
                {category.snippet && category.snippet.thumbnails && category.snippet.thumbnails.medium &&
                  <img
                    src={category.snippet.thumbnails.medium.url}
                    alt={category.snippet.title}
                    className="category-thumbnail"
                  />
                }
                <span className="category-name">{category.snippet?.title}</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    
    </div>
  );
};

export default Home;
