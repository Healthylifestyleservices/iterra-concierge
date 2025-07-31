import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Globe, Shield, Users } from 'lucide-react';

interface AssociateLink {
  id: string;
  associateId: string;
  region: string;
  language: string;
  url: string;
  status: 'active' | 'inactive';
}

const PrimeEmpressRedirect: React.FC = () => {
  const [associateLinks, setAssociateLinks] = useState<AssociateLink[]>([]);
  const [redirecting, setRedirecting] = useState(false);
  const [userRegion, setUserRegion] = useState<string>('');
  const [userLanguage, setUserLanguage] = useState<string>('');

  useEffect(() => {
    // Detect user region and language
    const detectUserLocation = () => {
      const language = navigator.language || 'en-US';
      const region = Intl.DateTimeFormat().resolvedOptions().timeZone;
      setUserLanguage(language);
      setUserRegion(region);
    };

    // Load associate links from backend
    const loadAssociateLinks = () => {
      const mockLinks: AssociateLink[] = [
        {
          id: '1',
          associateId: 'PRIME_EMPRESS',
          region: 'global',
          language: 'en',
          url: 'https://www.doterra.com/US/en/site/primeempress',
          status: 'active'
        },
        {
          id: '2',
          associateId: 'WELLNESS_GUIDE_CA',
          region: 'Canada',
          language: 'en',
          url: 'https://www.doterra.com/CA/en/site/wellnessguide',
          status: 'active'
        },
        {
          id: '3',
          associateId: 'AROMATHERAPY_EU',
          region: 'Europe',
          language: 'de',
          url: 'https://www.doterra.com/DE/de/site/aromatherapy',
          status: 'active'
        }
      ];
      setAssociateLinks(mockLinks);
    };

    detectUserLocation();
    loadAssociateLinks();
  }, []);

  const findBestMatch = (): AssociateLink => {
    // Try to find region-specific match first
    let match = associateLinks.find(link => 
      link.region.toLowerCase().includes(userRegion.toLowerCase()) && 
      link.language.startsWith(userLanguage.split('-')[0])
    );

    // Fallback to language match
    if (!match) {
      match = associateLinks.find(link => 
        link.language.startsWith(userLanguage.split('-')[0])
      );
    }

    // Final fallback to PRIME_EMPRESS
    if (!match) {
      match = associateLinks.find(link => link.associateId === 'PRIME_EMPRESS');
    }

    return match || associateLinks[0];
  };

  const handleRedirect = () => {
    setRedirecting(true);
    const bestMatch = findBestMatch();
    
    setTimeout(() => {
      window.open(bestMatch.url, '_blank');
      setRedirecting(false);
    }, 2000);
  };

  const bestMatch = findBestMatch();

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
          Associate Link Management
        </h1>
        <p className="text-gray-600">Intelligent routing to your regional doTERRA representative</p>
      </div>

      {/* User Detection Card */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="h-5 w-5 text-blue-500" />
            Detected Location
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600 mb-1">Region</p>
              <Badge variant="outline">{userRegion || 'Detecting...'}</Badge>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Language</p>
              <Badge variant="outline">{userLanguage || 'Detecting...'}</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Match Card */}
      <Card className="bg-gradient-to-r from-purple-50 to-pink-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-green-500" />
            Recommended Associate
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-lg">{bestMatch?.associateId}</h3>
                <p className="text-sm text-gray-600">{bestMatch?.region} • {bestMatch?.language}</p>
              </div>
              <Badge className="bg-green-100 text-green-800">
                {bestMatch?.status}
              </Badge>
            </div>
            
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <ExternalLink className="h-4 w-4" />
              <span>{bestMatch?.url}</span>
            </div>

            <Button 
              onClick={handleRedirect}
              disabled={redirecting}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
            >
              {redirecting ? 'Redirecting...' : 'Visit Associate Site'}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* All Associates List */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5 text-blue-500" />
            All Available Associates
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {associateLinks.map((link) => (
              <div key={link.id} className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50">
                <div>
                  <h4 className="font-medium">{link.associateId}</h4>
                  <p className="text-sm text-gray-600">{link.region} • {link.language}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge 
                    variant={link.status === 'active' ? 'default' : 'secondary'}
                  >
                    {link.status}
                  </Badge>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => window.open(link.url, '_blank')}
                  >
                    Visit
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Fallback Notice */}
      <Card className="bg-yellow-50 border-yellow-200">
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            <Shield className="h-5 w-5 text-yellow-600 mt-0.5" />
            <div>
              <h4 className="font-medium text-yellow-800 mb-1">Fallback Protection</h4>
              <p className="text-sm text-yellow-700">
                If no regional associate is found, users are automatically redirected to PRIME_EMPRESS 
                for guaranteed service and support.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PrimeEmpressRedirect;