import React, { useState } from 'react';
import './ImageLoad.css';
interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  placeholderSrc?: string; // Optional placeholder for lazy loading
}

const Image: React.FC<LazyImageProps> = ({ src, placeholderSrc, alt, ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false); // Track main image loading state

  return (
    <div
      className='image-container'
    >
      <img
        src={src}
        alt={alt}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: isLoaded ? 1 : 0, // Start invisible
          // transition: "opacity 2.5s ease-in-out", // Smooth fade-in
          position: "absolute",
          top: 0,
          left: 0,
        }}
        onLoad={() => setIsLoaded(true)}
      />
      {!isLoaded && (
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "transparent",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
         
        </div>
      )}
    </div>
  );
};

export default Image;

