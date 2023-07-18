import React from 'react'
import {StyleSheet,View,Image} from 'react-native'
import {Feather} from '@expo/vector-icons'
import {styled} from 'styled-components'


const DocViewerScreen =({route})=>{
    return(
        <View style={styles.container} >
            <Image
                style={styles.Img}
                resizeMode= {'contain'}
                source = {route.params.item.postImg}
            />
            <View style={styles.docInteractionWrapper}>
                <Interaction
                    onPress={()=>alert('download this image')}
                >
                    <Feather name='share-2' size={24} color={'#2e64e5'}/>
                    <InteractionText>
                        Share
                    </InteractionText>
                </Interaction>
                <Interaction
                    onPress={()=>alert('download this image')}
                >
                    <Feather name='download' size={24}color={'#2e64e5'}/>
                    <InteractionText>
                        Download
                    </InteractionText>
                </Interaction>
            </View>
        </View>
    )
}

export default DocViewerScreen

const styles = StyleSheet.create({
    container:{
        flexDirection: 'column',
        flex:1,
        alignContent: 'center',
        alignItems:'center',
        padding: 10,
        backgroundColor: '#fff',
    },
    docInteractionWrapper:{
        flexDirection: 'row',
        justifyContent:'space-around',
        width: '100%',
        marginVertical: 20,
        marginHorizontal: 10,
    },
    Img:{
        width: '95%',
        height: '80%',
        marginTop: 10,
    }
})

const Interaction = styled.TouchableOpacity`
    flex-direction: column;
    justify-content:center;
    align-items:center;
    border-radius: 5px;
    padding: 5px;
    background-color: transparent;
`
const InteractionText = styled.Text`
    font-size: 12px;
    font-weight: bold;
    color:#2e64e5;
    margin-top: 5px;
    margin-left: 5px;
`
