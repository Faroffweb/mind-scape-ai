import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Navigation } from '@/components/Navigation';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Check, 
  Zap, 
  Crown, 
  Rocket,
  CreditCard,
  Users,
  Clock,
  Shield
} from 'lucide-react';

const Pricing = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [loading, setLoading] = useState<string | null>(null);

  const plans = [
    {
      id: 'starter',
      name: 'Starter Pack',
      price: '$9.99',
      credits: 500,
      icon: <Zap className="w-6 h-6" />,
      gradient: 'bg-gradient-primary',
      popular: false,
      features: [
        'Text-to-Image Generation',
        'Basic Image Quality',
        'Standard Processing Speed',
        '24/7 Email Support',
        'Personal Use License'
      ]
    },
    {
      id: 'pro',
      name: 'Pro Package',
      price: '$29.99',
      credits: 2000,
      icon: <Crown className="w-6 h-6" />,
      gradient: 'bg-gradient-accent',
      popular: true,
      features: [
        'All AI Generation Tools',
        'High-Quality Outputs',
        'Priority Processing',
        'Advanced Customization',
        'Commercial Use License',
        'Priority Support'
      ]
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: '$99.99',
      credits: 10000,
      icon: <Rocket className="w-6 h-6" />,
      gradient: 'bg-gradient-feature',
      popular: false,
      features: [
        'Unlimited Generations',
        'Ultra-High Resolution',
        'Fastest Processing',
        'API Access',
        'White-label Options',
        'Dedicated Support',
        'Custom Training Models'
      ]
    }
  ];

  const handlePurchase = async (planId: string) => {
    if (!user) {
      navigate('/auth');
      return;
    }

    setLoading(planId);
    
    // Simulate payment processing
    setTimeout(() => {
      setLoading(null);
      // Redirect to payment success (in real app, this would be Stripe checkout)
      navigate('/payment-success');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              <CreditCard className="w-4 h-4 mr-2" />
              Credit Packages
            </Badge>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Choose Your{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Creative Power
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Select the perfect credit package to unleash your AI creativity. 
              No subscriptions, no commitments - just pure creative freedom.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">No Subscription</h3>
              <p className="text-sm text-muted-foreground">Buy credits once, use them forever. No recurring fees.</p>
            </Card>
            
            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-accent/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold mb-2">Never Expire</h3>
              <p className="text-sm text-muted-foreground">Your credits never expire. Use them at your own pace.</p>
            </Card>
            
            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-feature/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-feature" />
              </div>
              <h3 className="font-semibold mb-2">Secure Payment</h3>
              <p className="text-sm text-muted-foreground">Industry-standard encryption and secure processing.</p>
            </Card>
            
            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-ai-purple/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-ai-purple" />
              </div>
              <h3 className="font-semibold mb-2">Instant Access</h3>
              <p className="text-sm text-muted-foreground">Credits are added immediately after payment.</p>
            </Card>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan) => (
              <Card 
                key={plan.id}
                className={`p-8 relative ${plan.popular ? 'border-primary shadow-lg scale-105' : ''}`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    Most Popular
                  </Badge>
                )}
                
                <div className={`w-12 h-12 ${plan.gradient} rounded-lg flex items-center justify-center mb-6`}>
                  <span className="text-white">{plan.icon}</span>
                </div>
                
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <div className="text-sm text-muted-foreground mt-1">
                    {plan.credits.toLocaleString()} Credits
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className="w-full"
                  variant={plan.popular ? 'default' : 'outline'}
                  onClick={() => handlePurchase(plan.id)}
                  disabled={loading === plan.id}
                >
                  {loading === plan.id ? (
                    <div className="flex items-center space-x-2">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current"></div>
                      <span>Processing...</span>
                    </div>
                  ) : (
                    `Get ${plan.credits.toLocaleString()} Credits`
                  )}
                </Button>
              </Card>
            ))}
          </div>

          {/* FAQ */}
          <div className="mt-20 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="font-semibold mb-2">How do credits work?</h3>
                <p className="text-muted-foreground text-sm">
                  Each AI generation uses credits based on complexity. Text-to-image typically uses 1-5 credits, 
                  while video generation may use 10-50 credits per generation.
                </p>
              </Card>
              
              <Card className="p-6">
                <h3 className="font-semibold mb-2">Do credits expire?</h3>
                <p className="text-muted-foreground text-sm">
                  No! Your credits never expire. Buy once and use them whenever you want to create.
                </p>
              </Card>
              
              <Card className="p-6">
                <h3 className="font-semibold mb-2">What payment methods do you accept?</h3>
                <p className="text-muted-foreground text-sm">
                  We accept all major credit cards, PayPal, and digital wallets through our secure payment processor.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;