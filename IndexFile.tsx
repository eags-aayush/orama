import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { CampaignForm } from "@/components/CampaignForm";
import { ProspectDashboard } from "@/components/ProspectDashboard";
import { Button } from "@/components/ui/enhanced-button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Zap, 
  Target, 
  MessageSquare, 
  TrendingUp, 
  ArrowRight,
  Users,
  Brain,
  Clock,
  Database
} from "lucide-react";

const Index = () => {
  const [activeTab, setActiveTab] = useState("campaigns");

  const renderContent = () => {
    switch (activeTab) {
      case "campaigns":
        return <CampaignForm />;
      case "prospects":
        return <ProspectDashboard />;
      case "messages":
        return <MessageCenter />;
      case "analytics":
        return <Analytics />;
      default:
        return <CampaignForm />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar activeTab={activeTab} onTabChange={setActiveTab} />
      
      {activeTab === "campaigns" && (
        <div className="relative">
          {/* Hero Background */}
          <div className="absolute inset-0 bg-gradient-hero opacity-5" />
          
          {/* Supabase Connection Banner */}
          <div className="relative bg-gradient-accent/10 border-b border-accent/20">
            <div className="max-w-7xl mx-auto px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Database className="h-5 w-5 text-accent" />
                  <span className="font-medium">Connect Supabase to unlock full AI automation</span>
                  <Badge variant="outline" className="bg-accent/10 text-accent border-accent/30">
                    Backend Required
                  </Badge>
                </div>
                <Button variant="premium" size="sm">
                  Connect Supabase
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <main className="relative">
        {renderContent()}
      </main>
    </div>
  );
};

// Placeholder components for other tabs
const MessageCenter = () => (
  <div className="max-w-4xl mx-auto p-6 space-y-8">
    <div className="text-center space-y-4">
      <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
        Message Center
      </h1>
      <p className="text-lg text-muted-foreground">
        AI-powered message generation and automation
      </p>
    </div>
    
    <Card className="shadow-premium">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MessageSquare className="h-5 w-5 text-primary" />
          AI Message Generator
        </CardTitle>
        <CardDescription>
          Generate personalized LinkedIn messages with AI
        </CardDescription>
      </CardHeader>
      <CardContent className="text-center py-12">
        <Brain className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
        <h3 className="text-xl font-semibold mb-2">AI Features Need Backend</h3>
        <p className="text-muted-foreground mb-6">
          Connect Supabase to enable OpenAI integration for intelligent message generation
        </p>
        <Button variant="hero">
          Enable AI Messages
        </Button>
      </CardContent>
    </Card>
  </div>
);

const Analytics = () => (
  <div className="max-w-4xl mx-auto p-6 space-y-8">
    <div className="text-center space-y-4">
      <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
        Analytics Dashboard
      </h1>
      <p className="text-lg text-muted-foreground">
        Campaign performance and ROI tracking
      </p>
    </div>
    
    <div className="grid md:grid-cols-2 gap-6">
      <Card className="shadow-premium">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            Performance Metrics
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center py-12">
          <TrendingUp className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
          <h3 className="text-xl font-semibold mb-2">Real-time Analytics</h3>
          <p className="text-muted-foreground">
            Track campaign performance with Supabase backend
          </p>
        </CardContent>
      </Card>
      
      <Card className="shadow-premium">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-primary" />
            Automation Insights
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center py-12">
          <Clock className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
          <h3 className="text-xl font-semibold mb-2">Schedule Analytics</h3>
          <p className="text-muted-foreground">
            Optimize outreach timing with data insights
          </p>
        </CardContent>
      </Card>
    </div>
  </div>
);

export default Index;
