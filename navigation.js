import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer,useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {styled} from 'styled-components'
import React from 'react';
import NotificationSection from './screens/notifications';
import HomeFeed from './screens/home_feed';
import SettingsSection from './screens/settings';
import {Ionicons} from '@expo/vector-icons';
import {View,StyleSheet} from 'react-native'
import WorldFeed from './screens/world';
import SearchFilterScreen from './screens/search_filter';
import {AccountImg } from './styles/home-feed-styles'
import PostScreen from './screens/home-stack-screens/post-screen';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { PostText } from './styles/addPost-style';
import OnboardingScreen from './screens/onboardingScreen';
import LoginScreen from './screens/auth/login';
import SignUpScreen from './screens/auth/sign-up';
import ProfileScreen from './screens/home-stack-screens/profile';
import UserProfileScreen from './screens/settings-stack-screens/user-profile';
import EditProfileScreen from './screens/settings-stack-screens/edit-profile';
import DocViewerScreen from './screens/home-stack-screens/document-viewer-screen';
import PostViewScreen from './screens/home-stack-screens/post-view-screen';
import PrivacySection from './screens/settings-stack-screens/privacy-screen';
import NotificationSettingSection from './screens/settings-stack-screens/notification-settings-screen';

const Tab = createBottomTabNavigator()

function BottomTabs (){
    const navigation = useNavigation();
    return (
        <Tab.Navigator
            screenOptions={
                ({route})=>({
                    tabBarStyle:{
                        style: {
                        height: 80, // Set the desired height of the tab bar here
                        },
                    },
                    tabBarShowLabel:false,
                    tabBarIcon:({color,focused,size}) => {
                        let iconName;
                        if (route.name==='Feed'){
                            iconName =focused?'ios-home':'ios-home-outline';
                        }else if(route.name==='World'){
                            iconName = focused?'ios-globe':'ios-globe-outline';
                        }else if(route.name==='Search'){
                            iconName = focused?'search':'search';
                        }else if(route.name==='Notifications'){
                            iconName = focused?'notifications':'notifications-outline';
                        }else if(route.name ==='Settings'){
                            iconName = focused?'ios-settings':'ios-settings-outline'
                        }
                        return <View style={styles.iconContainer}>
                            <Ionicons name={iconName} size = {size} color={color}/>
                            {focused?<LowerBar/>:<View></View>}
                        </View>
                    }
            })}
            >
                <Tab.Screen name='Feed' component={HomeFeed}
                    options={{
                        headerTitleAlign:'center',
                        headerTitle:'Instant-community',
                        headerStyle:{
                            height:70,
                        },
                        headerLeft:()=>(
                            <TouchableOpacity
                            onPress={()=>navigation.navigate('UserProfile')}
                            >
                                <AccountImg
                                    source={require('./assets/images/person1.jpg')}
                                />
                            </TouchableOpacity>
                        ),
                        headerRight:()=>(
                            <View
                                style={{ marginRight: 10,
                                    alignContent:'center',
                                    alignItems:'center',
                                    alignContent:'center',
                                }}
                            >
                                <TouchableOpacity
                                    activeOpacity={0.6}
                                    style={styles.button}
                                >
                                    <Ionicons.Button
                                        name='ios-add-outline'
                                        color={'#333'}
                                        backgroundColor={'#2e64e515'}
                                        style={{
                                            alignContent:'center',
                                            alignItems:'center',
                                        }}
                                        size={25}
                                        onPress={()=>navigation.navigate('AddPost')}
                                    />
                                </TouchableOpacity>
                            </View>
                        )
                }}
            />
                <Tab.Screen name='World' component={WorldFeed}
                    options={{
                        headerTitleAlign:'center',
                        headerTitle:'Instant-community',
                        headerStyle:{
                            height:70,
                        },
                        headerLeft:()=>(
                            <TouchableOpacity
                            onPress={()=>navigation.navigate('UserProfile')}
                            >
                                <AccountImg
                                    source={require('./assets/images/person1.jpg')}
                                />
                            </TouchableOpacity>
                        ),
                        headerRight:()=>(
                            <View
                                style={{ marginRight: 10,
                                    alignContent:'center',
                                    alignItems:'center',
                                    alignContent:'center',
                                }}
                            >
                                <TouchableOpacity
                                    activeOpacity={0.6}
                                    style={styles.button}
                                >
                                    <Ionicons.Button
                                        name='ios-add-outline'
                                        color={'#333'}
                                        backgroundColor={'#2e64e515'}
                                        style={{
                                            alignContent:'center',
                                            alignItems:'center',
                                        }}
                                        size={25}
                                        onPress={()=>navigation.navigate('AddPost')}
                                    />
                                </TouchableOpacity>
                            </View>
                        )
                    }}
                />
                <Tab.Screen name='Search'
                    component={SearchFilterScreen}
                    options={{
                        headerRight:()=>{},
                        headerStyle:{
                            height:70,
                        },
                    headerTitleAlign:'center',
                    headerTitle:'',
                    headerLeft:()=>(
                        <View style={{ paddingTop:10 }}>
                            <TouchableOpacity
                                onPress={()=>navigation.navigate('Profile')}
                                >
                                    <AccountImg
                                        source={require('./assets/images/person1.jpg')}
                                    />
                            </TouchableOpacity>
                        </View>
                    ),
                }}
                />
                <Tab.Screen name='Notifications'
                component ={NotificationSection}
                options={{
                    headerRight:()=>{},
                    headerTitleAlign:'center',
                    headerStyle:{
                        height:60,
                    },
                }}
                />
                <Tab.Screen name='Settings'
                component={SettingsSection}
                options={{
                    headerRight:()=>{},
                    headerTitleAlign:'center',
                    headerStyle:{
                        height:60,
                    },
                }}
                />
        </Tab.Navigator>
    )
}

const Stack = createStackNavigator()
function HomeStackGroup(){
    const navigation = useNavigation();
    return (
        <Stack.Navigator
        screenOptions={{ headerShown:true }}
        >
            <Stack.Screen name='Onboarding'
            component={OnboardingScreen}
            options={{
                headerTitle:''
            }}/>
            <Stack.Screen name='Login'
            component={LoginScreen}
            options={{
                headerShown: false
            }}
            />
            <Stack.Screen name='SignUp'
            component={SignUpScreen}
            />
            <Stack.Screen name='Profile'
            component={ProfileScreen}
            options={{
                headerTitle:''
            }}/>
            <Stack.Screen name='UserProfile'
            component={UserProfileScreen}
            options={{
                headerTitle:''
            }}/>
            <Stack.Screen name='Instant-community'
            component={BottomTabs}
            options={{
                headerShown:false,
            }}
            />
            <Stack.Screen name='AddPost'
                component={PostScreen}
                options={{
                    headerTitle:'Create Post',
                    headerTitleAlign:'center',
                    headerRight:()=>(
                        <View
                            style={{ marginRight: 10,
                                alignContent:'center',
                                alignItems:'center',
                                alignContent:'center',
                            }}
                        >
                        <TouchableOpacity>
                            <PostText>Post</PostText>
                        </TouchableOpacity>
                        </View>
                    )
                }}/>
            <Stack.Screen name='EditProfile'
                component={EditProfileScreen}
                options={{
                    headerTitle:'',
                    headerTitleAlign:'center',
                    headerRight:()=>(
                        <View
                            style={{ marginRight: 10,
                                alignContent:'center',
                                alignItems:'center',
                                alignContent:'center',
                            }}
                        >
                        <TouchableOpacity>
                            <PostText>Save</PostText>
                        </TouchableOpacity>
                        </View>
                    )
                }}/>
                <Stack.Screen name='MediaView'
                component={DocViewerScreen}
                options={{
                    headerTitle:'',
                    headerTitleAlign:'center',
                    headerStyle:{
                        height:40,
                    }
                }}/>
                <Stack.Screen name='PostView'
                component={PostViewScreen}
                options={{
                    headerTitle:'',
                    headerTitleAlign:'center',
                }}/>
                <Stack.Screen name='PrivacyScreen'
                component={PrivacySection}
                options={{
                    headerTitle:'Privacy Settings',
                    headerTitleAlign:'center',
                    headerStyle:{
                        height:60,
                    }
                }}/>
                <Stack.Screen name='NotificationSettingSection'
                component={NotificationSettingSection}
                options={{
                    headerTitle:'Notification Settings',
                    headerTitleAlign:'center',
                    headerStyle:{
                        height:60,
                    }
                }}/>
        </Stack.Navigator>
    )
}

export default function Navigation(){
    return (
        <NavigationContainer>
            <HomeStackGroup/>
        </NavigationContainer>
    )
}


const styles = StyleSheet.create({
    iconContainer:{
        flexDirection: 'column',
        flex:1,
        alignContent: 'center',
        alignItems:'center',
        padding: 10,
        backgroundColor: '#fff',
    },
    button: {
        backgroundColor: '#2e64e515',
    },
});

const LowerBar = styled.View`
    border-bottom-color:#2e64e5;
    border-bottom-width: 4px;
    border-radius: 3px;
    width:20px;
    align-self:center;
    margin-top: 2px;
`