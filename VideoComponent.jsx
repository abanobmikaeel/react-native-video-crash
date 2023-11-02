import React, { useRef, useState } from 'react'
import { ActivityIndicator, View, StyleSheet } from 'react-native'
import Video, { ResizeMode } from 'react-native-video'

export default function VideoComponent({ uri, showControls }) {
	const [contentLoading, setContentLoading] = useState(true)
	const videoRef = useRef()

	const onLoadstart = () => {
		setContentLoading(true)
	}

	const onLoadEnd = () => {
		setContentLoading(false)
		videoRef.current.resume()
	}

	return (
		<View style={{ flex: 1 }}>
			<Video
				source={{
					uri,
				}}
				ref={videoRef}
				resizeMode={ResizeMode.COVER}
				style={styles.video}
				controls={true}
				onLoadStart={() => onLoadstart()}
				onReadyForDisplay={() => onLoadEnd()}
			/>
			{contentLoading && (
				<ActivityIndicator
					size={40}
					color={'blue'}
					style={styles.activityIndicator}
				/>
			)}
		</View>
	)
}

const styles = StyleSheet.create({
	video: {
		width: '100%',
		height: 300,
		flex: 1,
	},
	activityIndicator: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		alignItems: 'center',
		justifyContent: 'center',
	},
})
