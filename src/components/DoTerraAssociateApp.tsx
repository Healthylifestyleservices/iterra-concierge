import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { supabase } from "@/lib/supabase";
import { useNavigate } from "react-router-dom";

export default function DoTerraAssociateApp() {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [shopPath, setShopPath] = useState("");
  const [aiPrompt, setAiPrompt] = useState("");
  const [aiResponse, setAiResponse] = useState("");
  const [aiLoading, setAiLoading] = useState(false);

  useEffect(() => {
    supabase.auth.getUser().then(async ({ data: { user } }) => {
      if (!user) {
        navigate("/login");
      } else {
        const { data } = await supabase
          .from("associates")
          .select("shop_path")
          .eq("id", user.id)
          .single();
        setUser(user);
        setShopPath(data?.shop_path || "");
      }
      setLoading(false);
    });
  }, [navigate]);

  const saveShopPath = async () => {
    if (!user) return;
    try {
      await supabase
        .from("associates")
        .update({ shop_path: shopPath })
        .eq("id", user.id);
      alert("Your shop path has been saved.");
    } catch (error) {
      alert("Error saving shop path");
    }
  };

  const sendPrompt = async () => {
    if (!aiPrompt.trim()) return;
    
    setAiLoading(true);
    try {
      // Use existing wellness AI assistant function
      const { data, error } = await supabase.functions.invoke('23869b48-9960-4d22-8f9b-cf354be5f8d4', {
        body: { prompt: aiPrompt, shopPath }
      });
      
      if (error) throw error;
      setAiResponse(data.response || "No response received");
    } catch (error) {
      // Fallback to simple response if function fails
      let response = "I'm here to help with your wellness journey! ";
      const lowerPrompt = aiPrompt.toLowerCase();
      
      if (lowerPrompt.includes('oil') || lowerPrompt.includes('essential')) {
        response += "For essential oils, I recommend starting with Lavender for relaxation, Peppermint for energy, and Lemon for cleansing.";
      } else if (lowerPrompt.includes('pet')) {
        response += "For pets, always dilute oils heavily and avoid citrus oils around cats. Lavender and Frankincense are generally safe when properly diluted.";
      } else if (lowerPrompt.includes('business')) {
        response += "For business growth, focus on sharing your personal wellness story and helping others find natural solutions.";
      } else {
        response += "I can help you with essential oils, wellness protocols, pet safety, and business guidance. What would you like to know?";
      }
      
      if (shopPath) {
        response += ` You can share products through: healthlifestyleservices.com/iTerra/${shopPath}`;
      }
      
      setAiResponse(response);
    } finally {
      setAiLoading(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/login");
  };

  if (loading) return <p className="p-4">Loading...</p>;

  return (
    <main className="p-6 max-w-5xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Your Wellness Concierge</h1>
        <Button variant="outline" onClick={handleLogout}>Logout</Button>
      </div>
      
      <Tabs defaultValue="concierge">
        <TabsList>
          <TabsTrigger value="concierge">Concierge</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="concierge">
          <Card className="my-6">
            <CardContent className="space-y-4 pt-6">
              <Textarea
                placeholder="Ask about oils, protocols, upgrades, pets, or business..."
                value={aiPrompt}
                onChange={(e) => setAiPrompt(e.target.value)}
                rows={4}
              />
              <Button onClick={sendPrompt} disabled={aiLoading}>
                {aiLoading ? "Asking..." : "Ask Concierge"}
              </Button>
              {aiResponse && (
                <div className="p-4 border rounded bg-muted whitespace-pre-wrap">
                  {aiResponse}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings">
          <Card>
            <CardContent className="space-y-4 pt-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Shop Path</label>
                <Input
                  placeholder="Enter your shop path (e.g., empressjenna)"
                  value={shopPath}
                  onChange={(e) => setShopPath(e.target.value)}
                />
                <p className="text-sm text-muted-foreground">
                  Your personalized link: healthlifestyleservices.com/iTerra/{shopPath || "your-name"}
                </p>
              </div>
              <Button onClick={saveShopPath}>Save Shop Path</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  );
}