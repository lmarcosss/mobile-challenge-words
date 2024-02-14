import React, {useEffect} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Slider} from 'react-native-awesome-slider';
import {useSharedValue} from 'react-native-reanimated';
import FontAwesome from 'react-native-vector-icons/FontAwesome6';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import style from './sound-player.style';
import {colors} from '@constants';

type SoundPlayerProps = {
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  onPlayPause(): void;
  isAvailable: boolean;
};

const roundValue = (value: number) => Number(value.toPrecision(3));

export function SoundPlayer({
  isPlaying,
  currentTime,
  duration,
  onPlayPause,
  isAvailable,
}: SoundPlayerProps) {
  const min = useSharedValue(0);
  const max = useSharedValue(0);
  const progress = useSharedValue(0);

  useEffect(() => {
    if (!isPlaying) {
      progress.value = 0;
    } else {
      progress.value = roundValue(currentTime);
    }
  }, [currentTime, progress, isPlaying]);

  useEffect(() => {
    max.value = roundValue(duration);
  }, [duration, max, isPlaying]);

  if (!isAvailable) {
    return (
      <View style={style.unavailableContainer}>
        <Text style={style.unavailableText}>
          Audio for this word is not available! ⚠️
        </Text>
      </View>
    );
  }

  return (
    <GestureHandlerRootView style={style.container}>
      <TouchableOpacity onPress={onPlayPause} style={style.button}>
        <FontAwesome
          name={isPlaying ? 'pause' : 'play'}
          color={colors.SECONDARY_FONT}
          size={24}
        />
      </TouchableOpacity>

      <Slider
        progress={progress}
        minimumValue={min}
        maximumValue={max}
        disable
        theme={{
          maximumTrackTintColor: colors.SECONDARY_FONT,
          minimumTrackTintColor: '#fff',
          disableMinTrackTintColor: '#fff',
        }}
      />
    </GestureHandlerRootView>
  );
}
