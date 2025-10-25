import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export const Certificate = () => {
  const canvasRef = useRef(null);
  const pledgerName = localStorage.getItem('currentPledgerName') || 'Climate Champion';
  const starCount = parseInt(localStorage.getItem('currentPledgerStars') || 1);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // 1. Background
    ctx.fillStyle = '#FFFFFF'; 
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 2. Border
    ctx.strokeStyle = '#16A34A';
    ctx.lineWidth = 10;
    ctx.strokeRect(10, 10, canvas.width - 20, canvas.height - 20);

    // 3. Main Title
    ctx.fillStyle = '#111827'; // Dark text
    ctx.font = 'bold 32px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Certificate of Action', canvas.width / 2, 80);

    // 4. "Proudly Presented To"
    ctx.fillStyle = '#374151'; // Medium gray text
    ctx.font = '16px Arial';
    ctx.fillText('Proudly Presented To', canvas.width / 2, 130);

    // 5. Pledger's Name
    ctx.fillStyle = '#15803D'; // Dark Green
    ctx.font = 'bold 44px Arial';
    ctx.fillText(pledgerName, canvas.width / 2, 190);

    // 6. Tagline
    ctx.fillStyle = '#111827';
    ctx.font = 'italic 24px Arial';
    ctx.fillText('"Cool Enough to Care!"', canvas.width / 2, 250);
    
    // 7. Star Rating (Kept as yellow)
    ctx.fillStyle = '#F59E0B'; 
    ctx.font = '40px Arial';
    let stars = '';
    for (let i = 0; i < Math.max(1, starCount); i++) {
      stars += '⭐'; 
    }
    ctx.fillText(stars, canvas.width / 2, 310);
    
  }, [pledgerName, starCount]); 

  const handleDownload = () => {
    const canvas = canvasRef.current;
    const image = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = image;
    link.download = `ClimatePledge_Certificate_${pledgerName}.png`;
    link.click();
  };

  return (
    <section className="bg-white py-16">
      <div className="max-w-2xl px-4 mx-auto text-center">
        <h2 className="text-3xl font-extrabold mb-4 text-black">
          Thank You, {pledgerName}!
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Your pledge is recorded. Here is your personalized certificate.
        </p>
        
        <canvas 
          ref={canvasRef} 
          width="600" 
          height="400" 
          className="border border-gray-300 rounded-lg shadow-lg mx-auto"
        >
          Your browser does not support the canvas element.
        </canvas>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={handleDownload}
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white rounded-lg bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300"
          >
            Download Certificate
          </button>
          <Link
            to="/wall"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100"
          >
            See the Pledge Wall
          </Link>
        </div>
      </div>
    </section>
  );
};