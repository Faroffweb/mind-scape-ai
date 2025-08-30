import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Navigation } from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import { UserIcon, Upload, Play, Download, RefreshCw } from 'lucide-react';

interface FormData {
  sourceVideo: FileList;
  targetFace: FileList;
  quality: string;
  faceEnhancement: string;
}

const FaceSwap = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [sourceVideo, setSourceVideo] = useState<string | null>(null);
  const [targetFace, setTargetFace] = useState<string | null>(null);
  const [processedVideo, setProcessedVideo] = useState<string | null>(null);
  
  const { register, handleSubmit, setValue } = useForm<FormData>({
    defaultValues: {
      quality: 'high',
      faceEnhancement: 'moderate'
    }
  });

  const handleVideoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setSourceVideo(url);
    }
  };

  const handleFaceUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setTargetFace(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = async (data: FormData) => {
    if (!sourceVideo || !targetFace) {
      toast.error('Please upload both video and face image');
      return;
    }

    setIsProcessing(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 8000));
      
      setProcessedVideo('https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4');
      
      toast.success('Face swap completed successfully!');
    } catch (error) {
      toast.error('Failed to process video. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Badge variant="secondary" className="mb-4">
              <UserIcon className="w-4 h-4 mr-2" />
              Face Swap Technology
            </Badge>
            <h1 className="text-4xl font-bold mb-4">
              Advanced <span className="bg-gradient-feature bg-clip-text text-transparent">Face Replacement</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl">
              Replace faces in videos with advanced AI technology for natural-looking results.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Input Form */}
            <Card className="p-8">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-4">
                  <Label>Source Video</Label>
                  <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6">
                    {sourceVideo ? (
                      <div className="relative">
                        <video 
                          src={sourceVideo} 
                          controls 
                          className="w-full h-32 object-cover rounded-lg"
                        />
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          className="absolute top-2 right-2"
                          onClick={() => setSourceVideo(null)}
                        >
                          Remove
                        </Button>
                      </div>
                    ) : (
                      <div className="text-center space-y-4">
                        <Upload className="w-12 h-12 text-muted-foreground mx-auto" />
                        <div>
                          <Label htmlFor="video-upload" className="cursor-pointer">
                            <span className="text-ai-purple hover:text-ai-purple/80">Upload source video</span>
                          </Label>
                          <input
                            id="video-upload"
                            type="file"
                            accept="video/*"
                            className="hidden"
                            {...register('sourceVideo')}
                            onChange={handleVideoUpload}
                          />
                        </div>
                        <p className="text-sm text-muted-foreground">MP4, MOV, AVI up to 100MB</p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="space-y-4">
                  <Label>Target Face Image</Label>
                  <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6">
                    {targetFace ? (
                      <div className="relative">
                        <img 
                          src={targetFace} 
                          alt="Target face" 
                          className="w-full h-32 object-cover rounded-lg"
                        />
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          className="absolute top-2 right-2"
                          onClick={() => setTargetFace(null)}
                        >
                          Remove
                        </Button>
                      </div>
                    ) : (
                      <div className="text-center space-y-4">
                        <Upload className="w-12 h-12 text-muted-foreground mx-auto" />
                        <div>
                          <Label htmlFor="face-upload" className="cursor-pointer">
                            <span className="text-ai-purple hover:text-ai-purple/80">Upload target face</span>
                          </Label>
                          <input
                            id="face-upload"
                            type="file"
                            accept="image/*"
                            className="hidden"
                            {...register('targetFace')}
                            onChange={handleFaceUpload}
                          />
                        </div>
                        <p className="text-sm text-muted-foreground">Clear, front-facing photo works best</p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Quality</Label>
                    <Select onValueChange={(value) => setValue('quality', value)} defaultValue="high">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="standard">Standard</SelectItem>
                        <SelectItem value="high">High Quality</SelectItem>
                        <SelectItem value="ultra">Ultra HD</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Face Enhancement</Label>
                    <Select onValueChange={(value) => setValue('faceEnhancement', value)} defaultValue="moderate">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">None</SelectItem>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="moderate">Moderate</SelectItem>
                        <SelectItem value="strong">Strong</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full" 
                  disabled={isProcessing || !sourceVideo || !targetFace}
                  variant="hero"
                >
                  {isProcessing ? (
                    <>
                      <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                      Processing Face Swap...
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 mr-2" />
                      Start Face Swap
                    </>
                  )}
                </Button>
              </form>
            </Card>

            {/* Preview/Result */}
            <Card className="p-8">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Result</h3>
                  {processedVideo && (
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  )}
                </div>
                
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center border-2 border-dashed border-muted-foreground/25">
                  {isProcessing ? (
                    <div className="text-center space-y-4">
                      <div className="w-12 h-12 border-4 border-ai-purple border-t-transparent rounded-full animate-spin mx-auto"></div>
                      <p className="text-muted-foreground">Processing face swap...</p>
                      <p className="text-sm text-muted-foreground">This may take several minutes</p>
                    </div>
                  ) : processedVideo ? (
                    <video 
                      src={processedVideo} 
                      controls 
                      className="w-full h-full rounded-lg"
                    />
                  ) : (
                    <div className="text-center space-y-4">
                      <UserIcon className="w-12 h-12 text-muted-foreground mx-auto" />
                      <p className="text-muted-foreground">Your face-swapped video will appear here</p>
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

export default FaceSwap;