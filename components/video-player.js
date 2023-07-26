import React,{useState,useRef} from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { Video, ResizeMode } from 'expo-av';

const  VideoPlayer=({url})=> {
  const video = useRef(null);
  const [status, setStatus] = useState({});
  return (
    <View style={styles.container}>
      <Video
        height= {200}
        width={400}
        ref={video}
        style={styles.video}
        source={{
          uri: url,
        }}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
      <View style={styles.buttons}>
        <Button
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
        />
      </View>
    </View>
  );
}
export default VideoPlayer

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  video: {
    alignSelf: 'center',
    width: 320,
    height: 200,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    color:'#2e64e5'
  },
});
