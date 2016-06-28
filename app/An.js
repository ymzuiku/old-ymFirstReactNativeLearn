import ReactNative, {
    Animated,
    Easing,
} from 'react-native'

module.exports = {
    playParallel,
    playSequence,
    timing,
    timings,
    spring,
    springs
}

export function playParallel(anima, func = ()=>{}) {
    if (anima.length > 0) {
        Animated.parallel(anima).start(func())
    } else {
        anima.start(func())
    }
}
export function playSequence(anima, delay = 0, func = ()=>{}) {
    if (delay == 0) {
        Animated.sequence(anima).start(func())
    } else {
        Animated.stagger(delay, anima).start(func())
    }
}

export function timing(value, toValue, time, delay = 0, easing = Easing.bezier(0.3, 0, 0, 1)) {
    let anima = Animated.timing(value, {
        toValue: toValue,
        delay: delay, //延迟开始动画
        duration: time, //持续时间,单位ms
        easing: easing //缓进缓出
    })
    return anima
}

export function timings(value, toValue, time, delay = 0, easing = Easing.bezier(0.3, 0, 0, 1)) {
    let animas = []
    for (var i = value.length - 1; i >= 0; i--) {
        let anima = Animated.timing(value[i], {
            toValue: toValue,
            delay: delay, //延迟开始动画
            duration: time, //持续时间,单位ms
            easing: easing //缓进缓出
        })
        animas[i] = anima
    }
    return animas
}

export function spring(value, toValue, friction = 7, tension = 40) {
    let anima = Animated.spring(value, {
        toValue: toValue,
        friction: friction, //摩擦力,默认7
        tension: tension, //张力,默认40
    })
    return anima
}

export function springs(value, toValue, friction = 7, tension = 40) {
    let animas = []
    for (var i = value.length - 1; i >= 0; i--) {
        let anima = Animated.spring(value[i], {
            toValue: toValue,
            friction: friction, //摩擦力,默认7
            tension: tension, //张力,默认40
        })
        animas[i] = anima
    }
    return animas
}
