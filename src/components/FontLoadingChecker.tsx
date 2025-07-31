import React, { useEffect, useState } from 'react';

interface FontStatus {
  avenir: boolean;
  cormorant: boolean;
  loaded: boolean;
}

export const FontLoadingChecker: React.FC = () => {
  const [fontStatus, setFontStatus] = useState<FontStatus>({
    avenir: false,
    cormorant: false,
    loaded: false
  });

  useEffect(() => {
    // Check font loading in browser console
    document.fonts.ready.then(() => {
      const avenirLoaded = document.fonts.check('16px Avenir');
      const cormorantLoaded = document.fonts.check('16px Cormorant Garamond');
      
      console.log('Avenir loaded:', avenirLoaded);
      console.log('Cormorant loaded:', cormorantLoaded);
      
      setFontStatus({
        avenir: avenirLoaded,
        cormorant: cormorantLoaded,
        loaded: true
      });
    });
  }, []);

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg max-w-md mx-auto">
      <h2 className="font-cormorant font-medium italic text-gold text-2xl mb-4">
        Font Loading Status
      </h2>
      
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="font-avenir font-normal">Avenir Font:</span>
          <span className={`px-2 py-1 rounded text-sm ${
            fontStatus.avenir ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          }`}>
            {fontStatus.avenir ? 'Loaded' : 'Not Loaded'}
          </span>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="font-avenir font-normal">Cormorant Font:</span>
          <span className={`px-2 py-1 rounded text-sm ${
            fontStatus.cormorant ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          }`}>
            {fontStatus.cormorant ? 'Loaded' : 'Not Loaded'}
          </span>
        </div>
      </div>
      
      <div className="mt-4 p-3 bg-gray-50 rounded">
        <p className="font-avenir font-normal text-sm text-gray-600">
          Check browser console for detailed font loading logs.
        </p>
      </div>
      
      <div className="mt-4">
        <h3 className="font-cormorant font-medium italic text-lg mb-2">Font Samples:</h3>
        <p className="font-avenir font-normal mb-2">Avenir Regular Text</p>
        <p className="font-avenir font-medium mb-2">Avenir Medium Text</p>
        <h4 className="font-cormorant font-medium italic">Cormorant Italic Heading</h4>
      </div>
    </div>
  );
};