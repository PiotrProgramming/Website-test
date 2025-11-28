import React from 'react';
import { FileText, Download } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

interface DocumentsProps {
  lang: Language;
}

const Documents: React.FC<DocumentsProps> = ({ lang }) => {
  const t = translations[lang].documents;

  const docs = [
    { name: 'EU Transport License (Licencja Wspólnotowa)', size: '1.2 MB', type: 'PDF' },
  ];

  return (
    <div className="pt-20">
      <div className="bg-gray-50 py-16 text-center">
         <h1 className="text-4xl font-bold text-gray-900 mb-4">{t.title}</h1>
         <p className="text-gray-600">{t.subtitle}</p>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="max-w-3xl mx-auto space-y-4">
          {docs.map((doc, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col sm:flex-row items-center justify-between hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-4 sm:mb-0 w-full sm:w-auto">
                <div className="bg-red-50 text-brand-red p-3 rounded">
                  <FileText size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">{doc.name}</h3>
                  <span className="text-xs text-gray-500 uppercase bg-gray-100 px-2 py-0.5 rounded mt-1 inline-block">{doc.type} • {doc.size}</span>
                </div>
              </div>
              <button className="flex items-center gap-2 text-brand-blue font-bold hover:text-brand-red transition-colors px-4 py-2 rounded hover:bg-gray-50 w-full sm:w-auto justify-center">
                <Download size={18} />
                {t.download}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Documents;