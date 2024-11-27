import React, { useState, useEffect } from 'react';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  placeholderSrc?: string; // Optional placeholder for lazy loading
}

const Lazy: React.FC<LazyImageProps> = ({ src, placeholderSrc, alt, ...props }) => {
  const [loaded, setLoaded] = useState(false); // Track main image loading state

  useEffect(() => {
    const img = new Image();
    img.src = src!;
    img.onload = () => setLoaded(true); // Update loading state when the image loads
  }, [src]);

  return (
    <img
      src={loaded ? src : placeholderSrc || src} // Show placeholder or main image immediately
      alt={alt}
      {...props}
      style={{
        filter: loaded ? 'none' : 'blur(10px)', // Blur effect if not loaded
        transition: 'filter 0.3s ease-in-out',
        ...props.style,
      }}
    />
  );
};

export default Lazy;

