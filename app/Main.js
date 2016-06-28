import React from 'react'  //Children, createMixin, PropTypes, Component
import ReactNative, {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Animated
} from 'react-native'

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <View style={[ss.middle]}>
                <Text style={[{fontSize:50}]}>Hello world</Text>
            </View>
        )
    }
}

const ss = StyleSheet.create({
    middle:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})

ReactNative.AppRegistry.registerComponent('basic', ()=>Main)
