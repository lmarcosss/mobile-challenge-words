import {useEffect, useRef, useState} from 'react';
import Sound from 'react-native-sound';

Sound.setCategory('Playback');

export function useSoundPlayer(wordSound?: string) {
  const [sound, setSound] = useState<Sound>();
  const [isPlaying, setPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isAvailable, setAvailable] = useState(true);
  const [isLoading, setLoading] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    setLoading(true);

    if (wordSound) {
      const newSound = new Sound(wordSound, undefined, error => {
        if (error) {
          console.log('failed to load the sound', error);
          setAvailable(false);
          setLoading(false);
        } else {
          console.log('success to load the sound');
          setDuration(newSound.getDuration());
          setAvailable(true);
          setLoading(false);
        }
      });

      setSound(newSound);
    } else {
      setAvailable(false);
      setLoading(false);
    }
  }, [wordSound]);

  useEffect(() => {
    if (isPlaying && sound) {
      setCurrentTime(0);

      intervalRef.current = setInterval(() => {
        sound.getCurrentTime(seconds => {
          setCurrentTime(seconds);
        });
      }, 30);
    }

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [isPlaying, sound]);

  function onPlayPause() {
    if (!sound) {
      return;
    }

    if (isPlaying) {
      sound.pause();
      setPlaying(false);
    } else {
      setPlaying(true);

      sound.play((success: boolean) => {
        if (success) {
          console.log('successfully finished playing');
          setPlaying(false);
        } else {
          console.log('playback failed due to audio decoding errors');
        }
      });
    }
  }

  return {
    isPlaying,
    duration,
    currentTime,
    onPlayPause,
    isAvailable,
    isLoading,
  };
}
