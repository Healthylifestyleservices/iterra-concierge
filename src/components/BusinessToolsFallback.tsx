import React from 'react';
import { fallbackBusinessContent } from '../data/fallbackBusinessContent';

export function BusinessToolsFallback() {
  return (
    <div className="bg-[#FAF9F6] p-6 rounded-2xl border border-[#CD7F32]/30">
      <h3 className="font-cormorant text-[#D4AF37] text-xl mb-4">
        Business Resources
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {fallbackBusinessContent.training.map((item) => (
          <div key={item.title} className="flex items-start gap-3">
            <img 
              src={item.thumbnail} 
              className="h-8 w-8 mt-1" 
              aria-hidden 
              alt=""
            />
            <a 
              href={item.pdfUrl} 
              className="hover:text-[#B76E79] transition-colors text-[#D4AF37]"
              download
            >
              {item.title}
            </a>
          </div>
        ))}
      </div>

      <div className="border-t border-[#CD7F32]/20 pt-4">
        <h4 className="font-cormorant text-[#B76E79] text-lg mb-3">
          Template Downloads
        </h4>
        <div className="grid grid-cols-1 gap-3">
          {fallbackBusinessContent.templates.map((template) => (
            <div key={template.id} className="flex items-center gap-3">
              <img 
                src={template.thumbnail} 
                className="h-6 w-6" 
                aria-hidden 
                alt=""
              />
              <div className="flex-1">
                <h5 className="font-medium text-[#D4AF37]">{template.title}</h5>
                <p className="text-sm text-gray-600">{template.description}</p>
              </div>
              <a 
                href={template.downloadUrl}
                className="px-3 py-1 bg-[#D4AF37] text-white rounded-lg text-sm hover:bg-[#B76E79] transition-colors"
                download
              >
                Download
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}