import React from 'react'
import Video, { ResizeMode } from 'react-native-video'

export default function VideoComponent({ uri, showControls }) {
	return (
		<Video
			source={{
				uri,
			}}
			resizeMode={ResizeMode.COVER}
			// style={{ width: '100%', height: 300, flex: 1, zIndex: 1 }}
			controls={false}
			repeat={true}
		/>
	)
}
