import { StyleSheet, View } from 'react-native'

export default function ScreenB() {
	return <View style={styles.container}>{/* <VideoComponent /> */}</View>
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
})
