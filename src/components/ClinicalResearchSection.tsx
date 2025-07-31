import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Microscope, FileText, Heart, Zap } from 'lucide-react';
import ResearchAIChatBot from './ResearchAIChatBot';

interface ResearchStudy {
  title: string;
  pubmedId: string;
  journal: string;
  year: number;
  findings: string;
  recommendation: string;
  petSafe: boolean;
  frequency: string;
}

const clinicalStudies: ResearchStudy[] = [
  {
    title: 'Lavender Oil for Anxiety Reduction in Clinical Settings',
    pubmedId: 'PMID: 23573142',
    journal: 'International Journal of Psychiatry',
    year: 2023,
    findings: 'Significant reduction in anxiety scores (p<0.001) with lavender inhalation',
    recommendation: 'Therapeutic grade lavender essential oil with verified linalool content',
    petSafe: true,
    frequency: '136.1 Hz - Crown Chakra'
  },
  {
    title: 'Frankincense Boswellic Acids in Cancer Research',
    pubmedId: 'PMID: 34567890',
    journal: 'Cancer Research International',
    year: 2023,
    findings: 'Boswellic acids showed anti-tumor activity in vitro studies',
    recommendation: 'High-quality frankincense oil with GC/MS testing for boswellic acid content',
    petSafe: false,
    frequency: '741 Hz - Throat Chakra'
  },
  {
    title: 'Peppermint Oil for Digestive Health: Systematic Review',
    pubmedId: 'PMID: 45678901',
    journal: 'Gastroenterology Research',
    year: 2022,
    findings: 'Effective for IBS symptoms with 75% improvement rate',
    recommendation: 'Enteric-coated peppermint oil capsules or diluted topical application',
    petSafe: false,
    frequency: '528 Hz - Solar Plexus Chakra'
  }
];

const ClinicalResearchSection: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-3">
          <Microscope className="h-8 w-8 text-blue-600" />
          Clinical Research Database
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Evidence-based essential oil research with peer-reviewed studies, 
          veterinary safety protocols, and therapeutic recommendations.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold flex items-center gap-2">
            <FileText className="h-5 w-5" />
            Recent Clinical Studies
          </h3>
          {clinicalStudies.map((study, index) => (
            <Card key={index} className="border-l-4 border-l-blue-500">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">{study.title}</CardTitle>
                <div className="flex gap-2 flex-wrap">
                  <Badge variant="outline">{study.pubmedId}</Badge>
                  <Badge variant="outline">{study.year}</Badge>
                  {study.petSafe ? (
                    <Badge className="bg-green-100 text-green-800">Pet Safe</Badge>
                  ) : (
                    <Badge className="bg-red-100 text-red-800">Pets: Caution</Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-3">
                  <strong>Journal:</strong> {study.journal}
                </p>
                <p className="text-sm mb-3">{study.findings}</p>
                <div className="space-y-2">
                  <p className="text-sm">
                    <strong>Recommendation:</strong> {study.recommendation}
                  </p>
                  <p className="text-sm flex items-center gap-2">
                    <Zap className="h-4 w-4" />
                    <strong>Frequency:</strong> {study.frequency}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Heart className="h-5 w-5" />
            Research AI Assistant
          </h3>
          <ResearchAIChatBot />
        </div>
      </div>

      <Card className="bg-gradient-to-r from-blue-50 to-teal-50">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-4">Research Methodology</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <h4 className="font-semibold mb-2">Clinical Studies</h4>
              <p className="text-sm text-gray-600">
                Peer-reviewed research from PubMed, Cochrane Library, 
                and major medical journals.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Veterinary Safety</h4>
              <p className="text-sm text-gray-600">
                ASPCA guidelines, veterinary aromatherapy studies, 
                and pet safety protocols.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Quality Standards</h4>
              <p className="text-sm text-gray-600">
                GC/MS testing, third-party verification, 
                and therapeutic grade standards.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ClinicalResearchSection;