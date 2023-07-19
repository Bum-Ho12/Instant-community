import React from 'react'
import {Image,Text,View,StyleSheet,SafeAreaView,ScrollView,TouchableOpacity} from 'react-native'
import Posts from '../../dataSource/feed-data.js'
import UserListSectionFeedCard from '../../components/user-feed-cards.js'
import {chooseFromLibrary,photoFromCamera} from '../../components/avatar-component'

const UserProfileScreen= ({navigation})=>{
    return(
        <SafeAreaView
            style={{ flex:1,backgroundColor:'#fff' }}
        >
            <ScrollView
                style={styles.container}
                contentContainerStyle = {{ justifyContent:'center',
                alignItems:'center'
            }}
            showsVerticalScrollIndicator={false}
            >
                <Image
                    style={styles.userImg}
                    source={require('../../assets/images/person1.jpg')}
                />
                <Text style={styles.userName}> John Doe</Text>
                <Text style={styles.aboutUser}>
                Lorem ipsum hello world text for testing words and letters.
                </Text>
                <View style={styles.userBtnWrapper}>
                    <TouchableOpacity
                    style={styles.userBtn}
                    onPress={()=>{navigation.navigate('EditProfile')}}
                    >
                        <Text style={styles.userBtnTxt}>Edit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={styles.userBtn}
                    onPress={()=>{}}
                    >
                        <Text style={styles.userBtnTxt}>Logout</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.userInfoWrapper}>
                    <View style={styles.userInfoItem}>
                        <Text
                            style={styles.userInfoTitle}
                        >
                            10
                        </Text>
                        <Text
                            style={styles.userInfoText}
                        >
                            Posts
                        </Text>
                    </View>
                    <View style={styles.userInfoItem}>
                        <Text
                            style={styles.userInfoTitle}
                        >
                            178
                        </Text>
                        <Text
                            style={styles.userInfoText}
                        >
                            Friends
                        </Text>
                    </View>
                    <View style={styles.userInfoItem}>
                        <Text
                            style={styles.userInfoTitle}
                        >
                            167
                        </Text>
                        <Text
                            style={styles.userInfoText}
                        >
                            Followers
                        </Text>
                    </View>
                </View>
                    {Posts.map((item)=> (
                        <UserListSectionFeedCard
                        key={item.id}
                            item={item} navigation={navigation}
                        />
                    ))}
            </ScrollView>
        </SafeAreaView>
    )
}

export default UserProfileScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    userImg:{
        height: 150,
        width: 150,
        borderRadius: 75
    },
    userName:{
        fontSize: 12,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10
    },
    aboutUser:{
        fontSize: 12,
        fontWeight: '600',
        color: '#666',
        textAlign: 'center',
        marginBottom: 10
    },
    userBtnWrapper:{
        flexDirection:'row',
        justifyContent: 'center',
        width: '100%',
        marginBottom: 10,
    },
    userBtn:{
        borderColor: '#2e64e5',
        borderWidth: 2,
        borderRadius: 3,
        paddingVertical: 8,
        paddingHorizontal: 12,
        marginHorizontal: 5
    },
    userBtnTxt:{
        color:'#2e64e5',
    },
    userInfoWrapper:{
        flexDirection: 'row',
        justifyContent:'space-around',
        width: '100%',
        marginVertical: 20,
    },
    userInfoItem:{
        justifyContent: 'center',
    },
    userInfoTitle:{
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
        textAlign: 'center'
    },
    userInfoText:{
        fontSize: 12,
        color:'#666',
        textAlign: 'center'
    }
})
