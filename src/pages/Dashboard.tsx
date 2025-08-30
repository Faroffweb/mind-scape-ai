import { useAuth } from '@/contexts/AuthContext';
import { Navigation } from '@/components/Navigation';
import { FeatureCard } from '@/components/FeatureCard';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ImageIcon, 
  VideoIcon, 
  UserIcon, 
  MicIcon, 
  Users,
  Zap,
  History,
  Download,
  Star
} from 'lucide-react';

const Dashboard = () => {
  const { user, signOut } = useAuth();

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Welcome Section */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-4xl font-bold mb-2">
                  Welcome back, <span className="bg-gradient-primary bg-clip-text text-transparent">{user.email?.split('@')[0]}</span>
                </h1>
                <p className="text-muted-foreground">Ready to create something amazing?</p>
              </div>
              <Button variant="outline" onClick={() => signOut()}>
                Sign Out
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
              <Card className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <Star className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">42</div>
                    <div className="text-sm text-muted-foreground">Generations</div>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center">
                    <Download className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">28</div>
                    <div className="text-sm text-muted-foreground">Downloads</div>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gradient-feature rounded-lg flex items-center justify-center">
                    <History className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">7</div>
                    <div className="text-sm text-muted-foreground">Projects</div>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-ai-purple/20 rounded-lg flex items-center justify-center">
                    <Zap className="w-5 h-5 text-ai-purple" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">158</div>
                    <div className="text-sm text-muted-foreground">Credits Left</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* AI Tools Section */}
          <div>
            <div className="mb-8">
              <Badge variant="secondary" className="mb-4">
                <Zap className="w-4 h-4 mr-2" />
                AI Creation Tools
              </Badge>
              <h2 className="text-3xl font-bold mb-4">
                Choose Your{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Creative Tool
                </span>
              </h2>
              <p className="text-muted-foreground">
                Select an AI tool below to start creating professional content.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                icon={<ImageIcon className="w-6 h-6 text-white" />}
                title="Text-to-Image"
                description="Generate stunning high-resolution images from text prompts with multiple artistic styles."
                features={[
                  "Realistic, cartoon, and 3D styles",
                  "4K resolution outputs", 
                  "Custom aspect ratios",
                  "Batch generation support"
                ]}
                gradient="primary"
              />
              
              <FeatureCard
                icon={<VideoIcon className="w-6 h-6 text-white" />}
                title="Image-to-Video"
                description="Bring your images to life with AI-powered animation and scene generation."
                features={[
                  "Multiple animation styles",
                  "Custom duration controls",
                  "Scene transition effects",
                  "HD video quality"
                ]}
                gradient="accent"
              />
              
              <FeatureCard
                icon={<UserIcon className="w-6 h-6 text-white" />}
                title="Face Swap"
                description="Advanced face replacement technology for videos with natural-looking results."
                features={[
                  "Real-time processing",
                  "High accuracy matching",
                  "Multiple face support",
                  "Seamless integration"
                ]}
                gradient="feature"
              />
              
              <FeatureCard
                icon={<Users className="w-6 h-6 text-white" />}
                title="Character Videos"
                description="Create consistent AI characters across multiple scenes and expressions."
                features={[
                  "Character consistency",
                  "Emotion control",
                  "Scene variations",
                  "Voice synchronization"
                ]}
                gradient="primary"
              />
              
              <FeatureCard
                icon={<MicIcon className="w-6 h-6 text-white" />}
                title="Voice Generation"
                description="Generate natural-sounding voiceovers in multiple languages and styles."
                features={[
                  "English & Hindi support",
                  "Male/female voices",
                  "Tone customization",
                  "Real-time preview"
                ]}
                gradient="accent"
              />
              
              <FeatureCard
                icon={<Zap className="w-6 h-6 text-white" />}
                title="Batch Processing"
                description="Process multiple files simultaneously for maximum productivity."
                features={[
                  "Queue management",
                  "Progress tracking",
                  "Bulk operations",
                  "Export management"
                ]}
                gradient="feature"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;