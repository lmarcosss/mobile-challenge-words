import {useEffect, useRef, useState} from 'react';
import {Alert} from 'react-native';
import Sound from 'react-native-sound';

Sound.setCategory('Playback');

const DELAY_TIME_IN_MS = 70;

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
          Alert.alert('failed to load the sound', error);
          setAvailable(false);
          setLoading(false);
        } else {
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
          setCurrentTime(
            previousCurrentTime => previousCurrentTime * 0.3 + seconds,
          );
        });
      }, DELAY_TIME_IN_MS);
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
      sound.stop();
      setPlaying(false);
    } else {
      setPlaying(true);

      sound.play((success: boolean) => {
        if (success) {
          setPlaying(false);
        } else {
          Alert.alert('playback failed due to audio decoding errors');
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
