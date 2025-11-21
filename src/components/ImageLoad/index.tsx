import React from 'react';

interface SimpleImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

const Image: React.FC<SimpleImageProps> = ({ src, alt, ...props }) => {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '400px', // set a fixed height or use aspect-ratio
        overflow: 'hidden',
        alignContent: 'center'
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
        {...props}
      />
    </div>
  );
};

export default Image;
