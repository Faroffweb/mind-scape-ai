import { Navigation } from "@/components/Navigation";
import { FeatureCard } from "@/components/FeatureCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/hero-ai.jpg";
import { 
  ImageIcon, 
  VideoIcon, 
  UserIcon, 
  MicIcon, 
  SparklesIcon,
  ArrowRight,
  CheckCircle,
  Star,
  Zap,
  Palette,
  Play,
  Users,
  MessageSquare
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-50" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            <div className="space-y-8">
              <Badge variant="secondary" className="w-fit">
                <SparklesIcon className="w-4 h-4 mr-2" />
                AI-Powered Content Creation
              </Badge>
              
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  Create Stunning{" "}
                  <span className="bg-gradient-primary bg-clip-text text-transparent">
                    AI Content
                  </span>{" "}
                  in Minutes
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                  Transform your ideas into professional multimedia content with our advanced AI platform. 
                  Generate images, videos, voices, and animations without limits or censorship.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                  Start Creating Free
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                  Watch Demo
                  <Play className="w-5 h-5" />
                </Button>
              </div>

              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-ai-green" />
                  <span>No content restrictions</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-ai-green" />
                  <span>High-resolution outputs</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-ai-green" />
                  <span>Commercial license</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-10 -left-10 w-20 h-20 bg-ai-purple/20 rounded-full blur-xl" />
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-ai-blue/20 rounded-full blur-xl" />
              <img 
                src={heroImage} 
                alt="AI Content Creation Platform" 
                className="rounded-2xl shadow-glass relative z-10 w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              <Palette className="w-4 h-4 mr-2" />
              Powerful AI Tools
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Everything You Need for{" "}
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                Content Creation
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional-grade AI tools designed for creators, marketers, and businesses 
              who demand quality without compromise.
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
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-card/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">Trusted by Creators Worldwide</h3>
            <div className="flex justify-center items-center space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-ai-purple">10K+</div>
                <div className="text-muted-foreground">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-ai-blue">1M+</div>
                <div className="text-muted-foreground">Content Generated</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-ai-pink">4.9★</div>
                <div className="text-muted-foreground">User Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Teaser */}
      <section id="pricing" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              <Star className="w-4 h-4 mr-2" />
              Flexible Pricing
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Start Free,{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Scale When Ready
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the plan that fits your creative needs. No hidden fees, no content restrictions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 relative overflow-hidden">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold">Starter</h3>
                  <p className="text-muted-foreground">Perfect for trying out</p>
                </div>
                <div>
                  <span className="text-4xl font-bold">Free</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-ai-green" />
                    <span>10 AI generations/month</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-ai-green" />
                    <span>Basic quality outputs</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-ai-green" />
                    <span>Community support</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full">Get Started</Button>
              </div>
            </Card>

            <Card className="p-8 relative overflow-hidden border-ai-purple">
              <div className="absolute top-0 right-0 bg-gradient-primary text-white px-4 py-1 text-sm rounded-bl-lg">
                Popular
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold">Creator</h3>
                  <p className="text-muted-foreground">For serious creators</p>
                </div>
                <div>
                  <span className="text-4xl font-bold">$29</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-ai-green" />
                    <span>Unlimited generations</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-ai-green" />
                    <span>4K quality outputs</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-ai-green" />
                    <span>Priority processing</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-ai-green" />
                    <span>Commercial license</span>
                  </li>
                </ul>
                <Button variant="hero" className="w-full">Start Creating</Button>
              </div>
            </Card>

            <Card className="p-8 relative overflow-hidden">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold">Enterprise</h3>
                  <p className="text-muted-foreground">For teams and businesses</p>
                </div>
                <div>
                  <span className="text-4xl font-bold">$99</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-ai-green" />
                    <span>Everything in Creator</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-ai-green" />
                    <span>API access</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-ai-green" />
                    <span>Custom integrations</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-ai-green" />
                    <span>Dedicated support</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full">Contact Sales</Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary opacity-10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Ready to{" "}
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                Create Magic?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of creators who are already using MindScape AI to bring their wildest ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                Start Your Free Trial
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                <MessageSquare className="w-5 h-5" />
                Talk to Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                MindScape AI
              </span>
            </div>
            <p className="text-muted-foreground">
              © 2024 MindScape AI. All rights reserved. Create without limits.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;