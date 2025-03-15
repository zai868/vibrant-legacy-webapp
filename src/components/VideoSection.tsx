
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';

interface VideoProps {
  id: string;
  title: string;
  thumbnail?: string;
}

const VideoSection = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  
  const videos: VideoProps[] = [
    {
      id: "tMRt7vBzW8Q",
      title: "Enactus EMI - Présentation",
      thumbnail: "https://img.youtube.com/vi/tMRt7vBzW8Q/maxresdefault.jpg"
    },
    {
      id: "FoQw0qOR6os",
      title: "Enactus EMI en action",
      thumbnail: "https://img.youtube.com/vi/FoQw0qOR6os/maxresdefault.jpg"
    }
  ];

  const VideoCard = ({ video }: { video: VideoProps }) => {
    return (
      <div className="flex flex-col bg-white dark:bg-enactus-black rounded-lg overflow-hidden shadow-lg transform transition-all hover:-translate-y-1 hover:shadow-xl">
        <div className="relative overflow-hidden" style={{ paddingBottom: "56.25%" /* 16:9 aspect ratio */ }}>
          {activeVideo === video.id ? (
            <iframe
              src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
              className="absolute inset-0 w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <>
              <img 
                src={video.thumbnail} 
                alt={video.title} 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Button 
                  onClick={() => setActiveVideo(video.id)} 
                  variant="ghost"
                  className="rounded-full h-16 w-16 bg-enactus-yellow/80 hover:bg-enactus-yellow text-black"
                >
                  <Play className="h-8 w-8 fill-current" />
                </Button>
              </div>
            </>
          )}
        </div>
        <div className="p-4">
          <h3 className="font-medium text-lg dark:text-white">{video.title}</h3>
        </div>
      </div>
    );
  };

  return (
    <section className="bg-gray-50 dark:bg-enactus-dark py-16">
      <div className="container mx-auto px-4">
        <h2 className="section-title dark:text-white">
          Nos Vidéos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
