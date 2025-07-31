import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Alert, AlertDescription } from './ui/alert';
import { signUpUser, signUpUserExternal } from '@/lib/signup-service';

export function SignupDemo() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [apiUrl, setApiUrl] = useState('https://your-api-endpoint.com/signup');
  const [useExternal, setUseExternal] = useState(false);

  const handleSignup = async () => {
    setLoading(true);
    setResult(null);

    try {
      let response;
      if (useExternal) {
        response = await signUpUserExternal(email, password, apiUrl);
      } else {
        response = await signUpUser(email, password);
      }
      setResult(response);
    } catch (error: any) {
      setResult({
        status: 'error',
        message: error.message
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Signup Function Demo</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <Button
              variant={!useExternal ? 'default' : 'outline'}
              onClick={() => setUseExternal(false)}
              size="sm"
            >
              Supabase Auth
            </Button>
            <Button
              variant={useExternal ? 'default' : 'outline'}
              onClick={() => setUseExternal(true)}
              size="sm"
            >
              External API
            </Button>
          </div>

          {useExternal && (
            <div>
              <label className="text-sm font-medium">API URL:</label>
              <Input
                value={apiUrl}
                onChange={(e) => setApiUrl(e.target.value)}
                placeholder="https://your-api-endpoint.com/signup"
              />
            </div>
          )}

          <div>
            <label className="text-sm font-medium">Email:</label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="user@example.com"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Password:</label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
            />
          </div>

          <Button
            onClick={handleSignup}
            disabled={loading || !email || !password}
            className="w-full"
          >
            {loading ? 'Signing up...' : 'Sign Up User'}
          </Button>

          {result && (
            <Alert className={result.status === 'success' ? 'border-green-500' : 'border-red-500'}>
              <AlertDescription>
                <div className="space-y-2">
                  <div className="font-medium">
                    Status: {result.status === 'success' ? '✅' : '❌'} {result.status}
                  </div>
                  <div>Message: {result.message}</div>
                  {result.user && (
                    <div className="text-sm bg-gray-100 p-2 rounded">
                      <pre>{JSON.stringify(result.user, null, 2)}</pre>
                    </div>
                  )}
                </div>
              </AlertDescription>
            </Alert>
          )}

          <div className="text-sm text-gray-600 space-y-2">
            <p><strong>Function Implementation:</strong></p>
            <div className="bg-gray-100 p-3 rounded text-xs font-mono">
              {useExternal ? (
                `async function signUpUser(email, password) {
  const response = await fetch("${apiUrl}", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  });
  const result = await response.json();
  if (result.status === "success") {
    console.log("✅ Signup successful:", result);
  } else {
    console.error("❌ Signup error:", result.message);
  }
}`
              ) : (
                `// Using Supabase Auth
const { data, error } = await supabase.auth.signUp({
  email, password
});
if (error) {
  console.error("❌ Signup error:", error.message);
} else {
  console.log("✅ Signup successful:", data);
}`
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}