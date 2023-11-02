import { Button, StyleSheet, View } from 'react-native'
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
			<Button onPress={navigation.navigate('ScreenB')}></Button>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
})
