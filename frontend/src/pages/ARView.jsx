import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ARView = () => {
  const { productId } = useParams();

  useEffect(() => {
    // Create a script element
    const script = document.createElement('script');
    script.type = 'module';
    script.src = `/src/components/AR/${productId}.js`;
    
    // Add error handling
    script.onerror = (error) => {
      console.error('Error loading AR script:', error);
    };

    // Append script to document
    document.body.appendChild(script);

    return () => {
      // Cleanup when component unmounts
      document.body.removeChild(script);
      const overlayContainer = document.getElementById('ar-html-overlay');
      if (overlayContainer) {
        overlayContainer.remove();
      }
      // Remove any THREE.js canvases
      const canvases = document.querySelectorAll('canvas');
      canvases.forEach(canvas => {
        if (canvas.parentElement) {
          canvas.parentElement.removeChild(canvas);
        }
      });
      // Remove AR button if it exists
      const arButton = document.querySelector('button[class*="ar-button"]');
      if (arButton && arButton.parentElement) {
        arButton.parentElement.removeChild(arButton);
      }
    };
  }, [productId]);

  return (
    <div className="ar-view" style={{ width: '100vw', height: '100vh', position: 'fixed', top: 0, left: 0 }}>
      <div id="ar-html-overlay" style={{ display: 'none' }}></div>
    </div>
  );
};

export default ARView; 