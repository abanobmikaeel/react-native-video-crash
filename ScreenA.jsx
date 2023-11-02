import { Button, StyleSheet, Text, View } from 'react-native'
import VideoComponent from './VideoComponent'

export default function ScreenA({ navigation }) {
	return (
		<View style={styles.container}>
			<View style={styles.videoContainer}>
				<VideoComponent
					uri={
						'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
					}
					showControls={true}
				/>
			</View>
			<Button
				title="navigate"
				onPress={() => navigation.navigate('ScreenB')}
			></Button>
		</View>
	)
}

const styles = StyleSheet.create({
	videoContainer: {
		height: 400,
		backgroundColor: 'black',
	},
})
