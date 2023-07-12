import React from 'react'
import {Image,Text,Button,StyleSheet,View} from 'react-native'

import Onboarding from 'react-native-onboarding-swiper'

const OnboardingScreen = ({navigation})=>{
    return(
        <Onboarding
            onDone={()=>navigation.replace("Login")}
            onSkip={()=>navigation.replace("Login")}
            pages={[
                {
                    backgroundColor:'#a6e4d0',
                    image: <Image source={require('../assets/images/on1.png')}/>,
                    title:'Onboarding1',
                    subtitle: 'Welcome to Instant-community'
                },
                {
                    backgroundColor:'#fdeb93',
                    image: <Image source={require('../assets/images/on2.png')}/>,
                    title:'Onboarding2',
                    subtitle: 'Onboarding begins'
                },
            ]}
        />
    )
}


export default OnboardingScreen
