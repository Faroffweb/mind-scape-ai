import { useNavigate } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { XCircle, RefreshCw, ArrowLeft } from 'lucide-react';

const PaymentCancel = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
          <Card className="p-8 text-center">
            <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <XCircle className="w-8 h-8 text-red-500" />
            </div>
            
            <h1 className="text-3xl font-bold mb-4">
              Payment <span className="text-red-500">Cancelled</span>
            </h1>
            
            <p className="text-muted-foreground mb-8">
              Your payment was cancelled. No charges were made to your account. You can try again or choose a different payment method.
            </p>

            <div className="bg-muted/50 p-6 rounded-lg mb-8">
              <h3 className="font-medium mb-4">What happened?</h3>
              <ul className="text-sm text-muted-foreground space-y-2 text-left">
                <li>• You cancelled the payment process</li>
                <li>• Your browser session timed out</li>
                <li>• There was an issue with your payment method</li>
                <li>• The payment window was closed accidentally</li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => navigate('/pricing')}
                className="flex items-center space-x-2"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Try Again</span>
              </Button>
              
              <Button 
                variant="outline"
                onClick={() => navigate('/dashboard')}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Dashboard
              </Button>
            </div>

            <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
              <p className="text-sm text-blue-700 dark:text-blue-300">
                Need help? Contact our support team at{' '}
                <a href="mailto:support@mindscapeai.com" className="font-medium underline">
                  support@mindscapeai.com
                </a>
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PaymentCancel;