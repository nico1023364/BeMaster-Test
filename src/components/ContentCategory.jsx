import React, { useState, useEffect } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';

const ContentCategory = () => {
  const { categoryId } = useParams();
  const [videos, setVideos] = useState([]);
  const location = useLocation();
  const categoryTitle = location.state ? location.state.categoryTitle : '';

  useEffect(() => {
    const fetchPopularVideos = async (categoryId) => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&videoCategoryId=${categoryId}&regionCode=ES&hl=es&key=AIzaSyD7EN07EciJSVs6ikoHMeWUg7U8AYJXAoU`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch videos');
        }
        const data = await response.json();
        setVideos(data.items);
      } catch (error) {
        console.error('Error fetching popular videos:', error);
      }
    };

    fetchPopularVideos(categoryId);
  }, [categoryId, location.state]);

  return (
    <div className="content-category-container">
      <Link to="/home" className="back-link">Volver al inicio</Link>
      <h2>Videos de la categoría {categoryTitle} </h2>
      <div className="video-list">
        {videos.map((video, index) => (
          <div key={index} className="video-card">
            <Link to={`/video/${video.id}`} className="video-link">
              <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} className="video-thumbnail" />
              <h3 className="video-title">{video.snippet.title}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentCategory;
