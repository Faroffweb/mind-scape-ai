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
import { VideoIcon, Upload, Play, Download, RefreshCw } from 'lucide-react';

interface FormData {
  image: FileList;
  prompt: string;
  duration: number[];
  animationStyle: string;
  frameRate: string;
  quality: string;
}

const ImageToVideo = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [generatedVideo, setGeneratedVideo] = useState<string | null>(null);
  
  const { register, handleSubmit, setValue, watch } = useForm<FormData>({
    defaultValues: {
      duration: [5],
      animationStyle: 'smooth',
      frameRate: '30',
      quality: 'high'
    }
  });

  const duration = watch('duration');

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = async (data: FormData) => {
    if (!uploadedImage) {
      toast.error('Please upload an image first');
      return;
    }

    setIsGenerating(true);
    
    // Simulate API call - replace with actual API integration
    try {
      await new Promise(resolve => setTimeout(resolve, 5000));
      
      // Mock generated video URL
      setGeneratedVideo('https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4');
      
      toast.success('Video generated successfully!');
    } catch (error) {
      toast.error('Failed to generate video. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Badge variant="secondary" className="mb-4">
              <VideoIcon className="w-4 h-4 mr-2" />
              Image-to-Video Generator
            </Badge>
            <h1 className="text-4xl font-bold mb-4">
              Bring Images to <span className="bg-gradient-accent bg-clip-text text-transparent">Life</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl">
              Transform static images into dynamic videos with AI-powered animation and scene generation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Input Form */}
            <Card className="p-8">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="image">Upload Image</Label>
                  <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6">
                    {uploadedImage ? (
                      <div className="relative">
                        <img 
                          src={uploadedImage} 
                          alt="Uploaded" 
                          className="w-full h-48 object-cover rounded-lg"
                        />
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          className="absolute top-2 right-2"
                          onClick={() => setUploadedImage(null)}
                        >
                          Remove
                        </Button>
                      </div>
                    ) : (
                      <div className="text-center space-y-4">
                        <Upload className="w-12 h-12 text-muted-foreground mx-auto" />
                        <div>
                          <Label htmlFor="image-upload" className="cursor-pointer">
                            <span className="text-ai-purple hover:text-ai-purple/80">Click to upload</span>
                            <span className="text-muted-foreground"> or drag and drop</span>
                          </Label>
                          <Input
                            id="image-upload"
                            type="file"
                            accept="image/*"
                            className="hidden"
                            {...register('image')}
                            onChange={handleImageUpload}
                          />
                        </div>
                        <p className="text-sm text-muted-foreground">
                          PNG, JPG, WEBP up to 10MB
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="prompt">Animation Description</Label>
                  <Textarea
                    id="prompt"
                    placeholder="Describe how you want the image to move or animate..."
                    className="min-h-[100px]"
                    {...register('prompt', { required: true })}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Animation Style</Label>
                    <Select onValueChange={(value) => setValue('animationStyle', value)} defaultValue="smooth">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="smooth">Smooth Motion</SelectItem>
                        <SelectItem value="cinematic">Cinematic</SelectItem>
                        <SelectItem value="dramatic">Dramatic</SelectItem>
                        <SelectItem value="subtle">Subtle Movement</SelectItem>
                        <SelectItem value="dynamic">Dynamic Action</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Frame Rate</Label>
                    <Select onValueChange={(value) => setValue('frameRate', value)} defaultValue="30">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="24">24 FPS (Cinematic)</SelectItem>
                        <SelectItem value="30">30 FPS (Standard)</SelectItem>
                        <SelectItem value="60">60 FPS (Smooth)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-4">
                  <Label>Duration: {duration[0]} seconds</Label>
                  <Slider
                    value={duration}
                    onValueChange={(value) => setValue('duration', value)}
                    max={30}
                    min={2}
                    step={1}
                    className="w-full"
                  />
                </div>

                <div className="space-y-2">
                  <Label>Quality</Label>
                  <Select onValueChange={(value) => setValue('quality', value)} defaultValue="high">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="standard">720p HD</SelectItem>
                      <SelectItem value="high">1080p Full HD</SelectItem>
                      <SelectItem value="ultra">4K Ultra HD</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button 
                  type="submit" 
                  className="w-full" 
                  disabled={isGenerating || !uploadedImage}
                  variant="hero"
                >
                  {isGenerating ? (
                    <>
                      <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                      Generating Video...
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 mr-2" />
                      Generate Video
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
                  {generatedVideo && (
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  )}
                </div>
                
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center border-2 border-dashed border-muted-foreground/25">
                  {isGenerating ? (
                    <div className="text-center space-y-4">
                      <div className="w-12 h-12 border-4 border-ai-accent border-t-transparent rounded-full animate-spin mx-auto"></div>
                      <p className="text-muted-foreground">Creating your video...</p>
                      <p className="text-sm text-muted-foreground">This may take several minutes</p>
                    </div>
                  ) : generatedVideo ? (
                    <video 
                      src={generatedVideo} 
                      controls 
                      className="w-full h-full rounded-lg"
                    />
                  ) : (
                    <div className="text-center space-y-4">
                      <VideoIcon className="w-12 h-12 text-muted-foreground mx-auto" />
                      <p className="text-muted-foreground">Your generated video will appear here</p>
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

export default ImageToVideo;