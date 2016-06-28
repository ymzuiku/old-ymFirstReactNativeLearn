import React from 'react'  //Children, createMixin, PropTypes, Component
import ReactNative, {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Animated
} from 'react-native'

import An, {
    timings,
    springs,
    playParallel,
    playSequence,
} from './An.js'

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            textX: new Animated.Value(0),
            textY: new Animated.Value(0)
        }
        this.initProps()
    }
    initProps(){
        this.isMove = false
        this.pTextMiddle = {
            onStartShouldSetResponder:this.touchText,
            style:{
                fontSize:26,
                paddingLeft:this.state.textX,
                paddingTop:this.state.textY,
                backgroundColor:'#ffffff00'
            },
        }
    }
    render() {
        return (
            <View style={[ss.middle]}>
                <Animated.Text {...this.pTextMiddle}>Hello World,Touch Me</Animated.Text>
            </View>
        )
    }

    touchText = ()=> {
        let movePoint = 70
        if (this.isMove) {
            movePoint = 0
        }
        let anMove = timings([this.state.textX, this.state.textY], movePoint, 350)
        playParallel(anMove, ()=>{this.isMove = !this.isMove})
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
