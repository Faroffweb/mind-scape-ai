import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, CreditCard, ArrowRight } from 'lucide-react';

const PaymentSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Auto redirect after 5 seconds
    const timer = setTimeout(() => {
      navigate('/dashboard');
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
          <Card className="p-8 text-center">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            
            <h1 className="text-3xl font-bold mb-4">
              Payment <span className="bg-gradient-primary bg-clip-text text-transparent">Successful!</span>
            </h1>
            
            <p className="text-muted-foreground mb-8">
              Thank you for your purchase. Your credits have been added to your account and you can start creating amazing content right away.
            </p>

            <div className="bg-gradient-primary/10 p-6 rounded-lg mb-8">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <CreditCard className="w-5 h-5 text-primary" />
                <span className="font-medium">Transaction Details</span>
              </div>
              
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex justify-between">
                  <span>Credits Added:</span>
                  <span className="font-medium text-primary">+1000 Credits</span>
                </div>
                <div className="flex justify-between">
                  <span>Amount Paid:</span>
                  <span className="font-medium">$29.99</span>
                </div>
                <div className="flex justify-between">
                  <span>Status:</span>
                  <span className="font-medium text-green-600">Completed</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => navigate('/dashboard')}
                className="flex items-center space-x-2"
              >
                <span>Go to Dashboard</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
              
              <Button 
                variant="outline"
                onClick={() => navigate('/text-to-image')}
              >
                Start Creating
              </Button>
            </div>

            <p className="text-xs text-muted-foreground mt-6">
              You will be redirected to your dashboard automatically in a few seconds.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;