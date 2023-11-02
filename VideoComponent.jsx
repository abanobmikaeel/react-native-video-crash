import React from 'react'
import Video, { ResizeMode } from 'react-native-video'

export default function VideoComponent({ uri, showControls }) {
	return (
		<Video
			source={{
				uri,
			}}
			resizeMode={ResizeMode.COVER}
			style={{ width: '100%', flex: 1, zIndex: 1 }}
			controls={true}
			repeat={true}
		/>
	)
}
