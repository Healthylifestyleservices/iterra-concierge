import { useEffect, useState } from 'react';

interface DeviceFingerprintProps {
  onFingerprintReady: (fingerprint: string) => void;
}

export const DeviceFingerprint = ({ onFingerprintReady }: DeviceFingerprintProps) => {
  const [fingerprint, setFingerprint] = useState<string>('');

  useEffect(() => {
    const generateFingerprint = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.textBaseline = 'top';
        ctx.font = '14px Arial';
        ctx.fillText('Device fingerprint', 2, 2);
      }
      
      const fingerprint = [
        navigator.userAgent,
        navigator.language,
        screen.width + 'x' + screen.height,
        screen.colorDepth,
        new Date().getTimezoneOffset(),
        navigator.platform,
        canvas.toDataURL()
      ].join('|');
      
      const hash = btoa(fingerprint).substring(0, 32);
      setFingerprint(hash);
      onFingerprintReady(hash);
    };

    generateFingerprint();
  }, [onFingerprintReady]);

  return null;
};