import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const ContentDetails = () => {
  const { videoId, categoryTitle } = useParams();
  const [videoDetails, setVideoDetails] = useState(null);
    
  useEffect(() => {
    const fetchVideoDetails = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoId}&key=AIzaSyD7EN07EciJSVs6ikoHMeWUg7U8AYJXAoU`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch video details');
        }
        const data = await response.json();
        setVideoDetails(data.items[0]);
      } catch (error) {
        console.error('Error fetching video details:', error);
      }
    };

    fetchVideoDetails();
  }, [videoId]);

  if (!videoDetails) {
    return <div className="loading">Loading...</div>;
  }

  return (
      <div className="content-details-container">
        <Link to="/home" className="back-link">Volver al inicio</Link>
        
      <div className="video-title">{videoDetails.snippet.title}</div>
      <div className="video-details">
        <p><span className="detail-label">Fecha de publicación:</span> {new Date(videoDetails.snippet.publishedAt).toLocaleDateString()}</p>
        <p><span className="detail-label">Número de me gusta:</span> {videoDetails.statistics.likeCount}</p>
        <p><span className="detail-label">Número de visualizaciones:</span> {videoDetails.statistics.viewCount}</p>
        <p><span className="detail-label">Número de comentarios:</span> {videoDetails.statistics.commentCount}</p>
      </div>
      <div className="video-description">{videoDetails.snippet.description}</div>
      <div className="video-wrapper">
        <iframe
          width="30%"
          height="315"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={videoDetails.snippet.title}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default ContentDetails;
