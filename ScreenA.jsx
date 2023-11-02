import { Button, StyleSheet, Text, View } from 'react-native'
import VideoComponent from './VideoComponent'

export default function ScreenA({ navigation }) {
	return (
		<View style={styles.container}>
			<VideoComponent
				uri={
					'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
				}
				showControls={true}
			/>
			<Button
				title="navigate"
				onPress={() => navigation.navigate('ScreenB')}
			></Button>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		height: 300,
	},
})
