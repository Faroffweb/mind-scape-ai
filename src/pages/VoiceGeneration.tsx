import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Navigation } from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import { MicIcon, Play, Download, RefreshCw, Pause } from 'lucide-react';

interface FormData {
  text: string;
  language: string;
  voice: string;
  gender: string;
  speed: number[];
  pitch: number[];
  emotion: string;
}

const VoiceGeneration = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedAudio, setGeneratedAudio] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioElement, setAudioElement] = useState<HTMLAudioElement | null>(null);
  
  const { register, handleSubmit, setValue, watch } = useForm<FormData>({
    defaultValues: {
      speed: [1],
      pitch: [1],
      language: 'english',
      voice: 'natural',
      gender: 'female',
      emotion: 'neutral'
    }
  });

  const speed = watch('speed');
  const pitch = watch('pitch');

  const onSubmit = async (data: FormData) => {
    if (!data.text.trim()) {
      toast.error('Please enter some text to generate speech');
      return;
    }

    setIsGenerating(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // Mock generated audio URL
      setGeneratedAudio('https://www.soundjay.com/misc/sounds/bell-ringing-05.wav');
      
      toast.success('Voice generated successfully!');
    } catch (error) {
      toast.error('Failed to generate voice. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  const handlePlayPause = () => {
    if (!generatedAudio) return;

    if (isPlaying) {
      audioElement?.pause();
      setIsPlaying(false);
    } else {
      if (!audioElement) {
        const audio = new Audio(generatedAudio);
        audio.onended = () => setIsPlaying(false);
        setAudioElement(audio);
        audio.play();
      } else {
        audioElement.play();
      }
      setIsPlaying(true);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Badge variant="secondary" className="mb-4">
              <MicIcon className="w-4 h-4 mr-2" />
              Voice Generation
            </Badge>
            <h1 className="text-4xl font-bold mb-4">
              Create Natural <span className="bg-gradient-accent bg-clip-text text-transparent">AI Voices</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl">
              Generate natural-sounding voiceovers in multiple languages with full control over tone and style.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Input Form */}
            <Card className="p-8">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="text">Text to Speech</Label>
                  <Textarea
                    id="text"
                    placeholder="Enter the text you want to convert to speech..."
                    className="min-h-[120px]"
                    {...register('text', { required: true })}
                  />
                  <p className="text-sm text-muted-foreground">
                    Maximum 5000 characters per generation
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Language</Label>
                    <Select onValueChange={(value) => setValue('language', value)} defaultValue="english">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="english">English</SelectItem>
                        <SelectItem value="hindi">Hindi</SelectItem>
                        <SelectItem value="spanish">Spanish</SelectItem>
                        <SelectItem value="french">French</SelectItem>
                        <SelectItem value="german">German</SelectItem>
                        <SelectItem value="japanese">Japanese</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Gender</Label>
                    <Select onValueChange={(value) => setValue('gender', value)} defaultValue="female">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="child">Child</SelectItem>
                        <SelectItem value="elderly">Elderly</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Voice Type</Label>
                    <Select onValueChange={(value) => setValue('voice', value)} defaultValue="natural">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="natural">Natural</SelectItem>
                        <SelectItem value="professional">Professional</SelectItem>
                        <SelectItem value="conversational">Conversational</SelectItem>
                        <SelectItem value="narrative">Narrative</SelectItem>
                        <SelectItem value="robotic">Robotic</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Emotion</Label>
                    <Select onValueChange={(value) => setValue('emotion', value)} defaultValue="neutral">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="neutral">Neutral</SelectItem>
                        <SelectItem value="happy">Happy</SelectItem>
                        <SelectItem value="sad">Sad</SelectItem>
                        <SelectItem value="excited">Excited</SelectItem>
                        <SelectItem value="calm">Calm</SelectItem>
                        <SelectItem value="angry">Angry</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-4">
                  <Label>Speed: {speed[0]}x</Label>
                  <Slider
                    value={speed}
                    onValueChange={(value) => setValue('speed', value)}
                    max={2}
                    min={0.5}
                    step={0.1}
                    className="w-full"
                  />
                </div>

                <div className="space-y-4">
                  <Label>Pitch: {pitch[0]}x</Label>
                  <Slider
                    value={pitch}
                    onValueChange={(value) => setValue('pitch', value)}
                    max={2}
                    min={0.5}
                    step={0.1}
                    className="w-full"
                  />
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
                      Generating Voice...
                    </>
                  ) : (
                    <>
                      <MicIcon className="w-4 h-4 mr-2" />
                      Generate Voice
                    </>
                  )}
                </Button>
              </form>
            </Card>

            {/* Preview/Result */}
            <Card className="p-8">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Audio Preview</h3>
                  {generatedAudio && (
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Download MP3
                    </Button>
                  )}
                </div>
                
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center border-2 border-dashed border-muted-foreground/25">
                  {isGenerating ? (
                    <div className="text-center space-y-4">
                      <div className="w-12 h-12 border-4 border-ai-accent border-t-transparent rounded-full animate-spin mx-auto"></div>
                      <p className="text-muted-foreground">Generating your voice...</p>
                    </div>
                  ) : generatedAudio ? (
                    <div className="text-center space-y-6">
                      <div className="w-20 h-20 rounded-full bg-gradient-accent flex items-center justify-center mx-auto">
                        <MicIcon className="w-10 h-10 text-white" />
                      </div>
                      <div className="space-y-4">
                        <p className="text-foreground font-medium">Audio Generated Successfully</p>
                        <div className="flex justify-center space-x-4">
                          <Button 
                            onClick={handlePlayPause}
                            variant="outline"
                            size="lg"
                          >
                            {isPlaying ? (
                              <>
                                <Pause className="w-4 h-4 mr-2" />
                                Pause
                              </>
                            ) : (
                              <>
                                <Play className="w-4 h-4 mr-2" />
                                Play Preview
                              </>
                            )}
                          </Button>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Click play to preview your generated voice
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center space-y-4">
                      <MicIcon className="w-12 h-12 text-muted-foreground mx-auto" />
                      <p className="text-muted-foreground">Your generated voice will appear here</p>
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

export default VoiceGeneration;