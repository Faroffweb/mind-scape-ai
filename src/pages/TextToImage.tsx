import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Navigation } from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import { ImageIcon, Wand2, Download, RefreshCw } from 'lucide-react';

interface FormData {
  prompt: string;
  style: string;
  aspectRatio: string;
  quality: string;
  steps: number[];
  seed: string;
}

const TextToImage = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  
  const { register, handleSubmit, setValue, watch } = useForm<FormData>({
    defaultValues: {
      steps: [50],
      seed: '',
      style: 'realistic',
      aspectRatio: '1:1',
      quality: 'high'
    }
  });

  const steps = watch('steps');

  const onSubmit = async (data: FormData) => {
    setIsGenerating(true);
    
    // Simulate API call - replace with actual API integration
    try {
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // Mock generated image URL
      setGeneratedImage('https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=512&h=512&fit=crop');
      
      toast.success('Image generated successfully!');
    } catch (error) {
      toast.error('Failed to generate image. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleRandomSeed = () => {
    const randomSeed = Math.floor(Math.random() * 1000000).toString();
    setValue('seed', randomSeed);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Badge variant="secondary" className="mb-4">
              <ImageIcon className="w-4 h-4 mr-2" />
              Text-to-Image Generator
            </Badge>
            <h1 className="text-4xl font-bold mb-4">
              Create <span className="bg-gradient-primary bg-clip-text text-transparent">Stunning Images</span> from Text
            </h1>
            <p className="text-muted-foreground max-w-2xl">
              Transform your ideas into beautiful, high-resolution images using advanced AI technology.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Input Form */}
            <Card className="p-8">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="prompt">Prompt</Label>
                  <Textarea
                    id="prompt"
                    placeholder="Describe the image you want to create..."
                    className="min-h-[100px]"
                    {...register('prompt', { required: true })}
                  />
                  <p className="text-sm text-muted-foreground">
                    Be specific and descriptive for better results
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Style</Label>
                    <Select onValueChange={(value) => setValue('style', value)} defaultValue="realistic">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="realistic">Realistic</SelectItem>
                        <SelectItem value="cartoon">Cartoon</SelectItem>
                        <SelectItem value="3d">3D Render</SelectItem>
                        <SelectItem value="oil-painting">Oil Painting</SelectItem>
                        <SelectItem value="watercolor">Watercolor</SelectItem>
                        <SelectItem value="cyberpunk">Cyberpunk</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Aspect Ratio</Label>
                    <Select onValueChange={(value) => setValue('aspectRatio', value)} defaultValue="1:1">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1:1">Square (1:1)</SelectItem>
                        <SelectItem value="16:9">Landscape (16:9)</SelectItem>
                        <SelectItem value="9:16">Portrait (9:16)</SelectItem>
                        <SelectItem value="4:3">Classic (4:3)</SelectItem>
                        <SelectItem value="3:2">Photo (3:2)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Quality</Label>
                  <Select onValueChange={(value) => setValue('quality', value)} defaultValue="high">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="draft">Draft (Fast)</SelectItem>
                      <SelectItem value="standard">Standard</SelectItem>
                      <SelectItem value="high">High Quality</SelectItem>
                      <SelectItem value="ultra">Ultra HD</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-4">
                  <Label>Steps: {steps[0]}</Label>
                  <Slider
                    value={steps}
                    onValueChange={(value) => setValue('steps', value)}
                    max={100}
                    min={20}
                    step={5}
                    className="w-full"
                  />
                  <p className="text-sm text-muted-foreground">
                    Higher steps = better quality, longer generation time
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="seed">Seed (Optional)</Label>
                  <div className="flex space-x-2">
                    <Input
                      id="seed"
                      placeholder="Random seed for reproducible results"
                      {...register('seed')}
                    />
                    <Button type="button" variant="outline" size="icon" onClick={handleRandomSeed}>
                      <RefreshCw className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full" 
                  disabled={isGenerating}
                  variant="hero"
                >
                  {isGenerating ? (
                    <>
                      <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Wand2 className="w-4 h-4 mr-2" />
                      Generate Image
                    </>
                  )}
                </Button>
              </form>
            </Card>

            {/* Preview/Result */}
            <Card className="p-8">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Preview</h3>
                  {generatedImage && (
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  )}
                </div>
                
                <div className="aspect-square bg-muted rounded-lg flex items-center justify-center border-2 border-dashed border-muted-foreground/25">
                  {isGenerating ? (
                    <div className="text-center space-y-4">
                      <div className="w-12 h-12 border-4 border-ai-purple border-t-transparent rounded-full animate-spin mx-auto"></div>
                      <p className="text-muted-foreground">Generating your image...</p>
                    </div>
                  ) : generatedImage ? (
                    <img 
                      src={generatedImage} 
                      alt="Generated image" 
                      className="w-full h-full object-cover rounded-lg"
                    />
                  ) : (
                    <div className="text-center space-y-4">
                      <ImageIcon className="w-12 h-12 text-muted-foreground mx-auto" />
                      <p className="text-muted-foreground">Your generated image will appear here</p>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextToImage;