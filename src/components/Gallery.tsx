import { useState, useEffect } from 'react';
import '../styles/styles.css'; // Import the CSS file

// Import the JSON data
import mediaData from '../../public/media.json';

// Function to shuffle an array
const shuffleArray = (array: string[]) => {
  return array.sort(() => Math.random() - 0.5);
};

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [media, setMedia] = useState<string[]>([]);

  useEffect(() => {
    // Fetch the media data from the JSON file
    const fetchMediaData = async () => {
      try {
        const response = await fetch('/media.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Fetched data:', data); // Debugging line
        if (Array.isArray(data.media)) {
          setMedia(shuffleArray([...data.media]));
        } else {
          console.error('Media data is not an array:', data.media);
        }
      } catch (error) {
        console.error('Failed to fetch media data:', error);
      }
    };

    fetchMediaData();
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : media.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < media.length - 1 ? prevIndex + 1 : 0));
  };

  const isVideo = (url: string) => {
    return url.endsWith('.mp4') || url.endsWith('.webm') || url.endsWith('.ogg');
  };

  return (
    <div className="flex flex-col items-center">
      {media.length > 0 && (
        isVideo(media[currentIndex]) ? (
          <video
            src={media[currentIndex]}
            controls
            autoPlay
            className="fixed-image-size"
          />
        ) : (
          <img
            src={media[currentIndex]}
            alt={`Media ${currentIndex + 1}`}
            className="fixed-image-size"
          />
        )
      )}
      <div className="flex space-x-4 mt-4">
        <button onClick={handlePrevious} className="px-4 py-2 bg-gray-200">Previous</button>
        <button onClick={handleNext} className="px-4 py-2 bg-gray-200">Next</button>
      </div>
    </div>
  );
};

export default Gallery; 