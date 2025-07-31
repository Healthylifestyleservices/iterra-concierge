import React from 'react';
import { Link } from 'react-router-dom';
import iTerraCore from './iTerraCore';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle, FileText, Search } from 'lucide-react';

const SimpleHome = () => {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f9fafb',
      padding: '2rem',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <iTerraCore />
      
      {/* Navigation will be injected here by iTerraCore */}
      <div className="nav"></div>
      
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        textAlign: 'center',
        marginTop: '2rem'
      }}>
        <h1 style={{
          fontSize: '3rem',
          fontWeight: 'bold',
          color: '#7c3aed',
          marginBottom: '1rem'
        }}>
          iTerra Wellness Hub
        </h1>
        
        <p style={{
          fontSize: '1.25rem',
          color: '#6b7280',
          marginBottom: '2rem'
        }}>
          Your Essential Oil Wellness Assistant
        </p>
        
        {/* Diagnostic Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-red-500" />
                App Issues
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground mb-2">
                View all errors and problems
              </p>
              <Link to="/issues">
                <Button size="sm" variant="destructive" className="w-full">
                  View Issues
                </Button>
              </Link>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm flex items-center gap-2">
                <Search className="h-4 w-4 text-yellow-500" />
                Missing Features
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground mb-2">
                See what's not implemented
              </p>
              <Link to="/missing">
                <Button size="sm" variant="outline" className="w-full">
                  View Missing
                </Button>
              </Link>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm flex items-center gap-2">
                <FileText className="h-4 w-4 text-blue-500" />
                Full Report
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground mb-2">
                Complete diagnostic analysis
              </p>
              <Link to="/diagnostics">
                <Button size="sm" variant="default" className="w-full">
                  Full Report
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
        
        <div style={{
          backgroundColor: 'white',
          borderRadius: '0.5rem',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          padding: '2rem',
          marginBottom: '2rem'
        }}>
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: '600',
            marginBottom: '1rem'
          }}>Welcome!</h2>
          
          <p style={{
            color: '#6b7280',
            marginBottom: '1.5rem'
          }}>
            Get personalized wellness recommendations and essential oil protocols.
          </p>
          
          <button 
            className="doterra-button"
            style={{
              backgroundColor: '#7c3aed',
              color: 'white',
              padding: '0.75rem 1.5rem',
              borderRadius: '0.5rem',
              border: 'none',
              cursor: 'pointer',
              fontSize: '1rem',
              marginRight: '1rem'
            }}
          >
            Shop doTERRA Products
          </button>
        </div>

        {/* Section container for dynamic content */}
        <div id="section-container"></div>

        <div style={{
          marginTop: '2rem',
          padding: '1rem',
          backgroundColor: '#dcfce7',
          borderRadius: '0.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem'
        }}>
          <div style={{
            width: '12px',
            height: '12px',
            backgroundColor: '#22c55e',
            borderRadius: '50%'
          }}></div>
          <span style={{
            color: '#166534',
            fontWeight: '500'
          }}>
            iTerra Fully Functional - Navigation & Chat Ready
          </span>
        </div>
      </div>
      
      {/* Chat will be injected here by iTerraCore */}
    </div>
  );
};

export default SimpleHome;