import React, { useEffect, useState } from 'react';

interface FontFile {
  name: string;
  exists: boolean;
  size?: string;
}

export const FontDirectoryListing: React.FC = () => {
  const [fontFiles, setFontFiles] = useState<FontFile[]>([]);
  const [loading, setLoading] = useState(true);

  const expectedFonts = [
    'Avenir-Roman.woff2',
    'Avenir-Medium.woff2',
    'CormorantGaramond-Regular.woff2',
    'CormorantGaramond-Italic.woff2'
  ];

  useEffect(() => {
    const checkFontFiles = async () => {
      const results: FontFile[] = [];
      
      for (const fontName of expectedFonts) {
        try {
          const response = await fetch(`/fonts/${fontName}`, { method: 'HEAD' });
          results.push({
            name: fontName,
            exists: response.ok,
            size: response.headers.get('content-length') || 'Unknown'
          });
        } catch (error) {
          results.push({
            name: fontName,
            exists: false
          });
        }
      }
      
      setFontFiles(results);
      setLoading(false);
    };

    checkFontFiles();
  }, []);

  if (loading) {
    return (
      <div className="p-6 bg-white rounded-lg shadow-lg max-w-2xl mx-auto">
        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 rounded mb-4"></div>
          <div className="space-y-2">
            {[1,2,3,4].map(i => (
              <div key={i} className="h-4 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg max-w-2xl mx-auto">
      <h2 className="font-cormorant font-medium italic text-gold text-2xl mb-4">
        Font Directory Listing
      </h2>
      
      <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm mb-4">
        <div className="mb-2">$ ls -la public/fonts/</div>
        <div className="text-gray-400">total {fontFiles.length}</div>
      </div>
      
      <div className="space-y-2">
        {fontFiles.map((font) => (
          <div key={font.name} className="flex items-center justify-between p-3 border rounded">
            <div className="flex items-center space-x-3">
              <div className={`w-3 h-3 rounded-full ${
                font.exists ? 'bg-green-500' : 'bg-red-500'
              }`}></div>
              <span className="font-avenir font-normal">{font.name}</span>
            </div>
            
            <div className="flex items-center space-x-4">
              {font.size && (
                <span className="text-sm text-gray-500">{font.size} bytes</span>
              )}
              <span className={`px-2 py-1 rounded text-xs ${
                font.exists 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-red-100 text-red-800'
              }`}>
                {font.exists ? 'Found' : 'Missing'}
              </span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-4 p-3 bg-blue-50 rounded">
        <p className="font-avenir font-normal text-sm text-blue-800">
          Font files are checked via HTTP HEAD requests to /fonts/ directory.
        </p>
      </div>
    </div>
  );
};