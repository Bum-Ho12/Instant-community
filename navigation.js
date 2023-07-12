import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer,useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import React from 'react';
import NotificationSection from './screens/notifications';
import HomeFeed from './screens/home_feed';
import SettingsSection from './screens/settings';
import {Ionicons} from '@expo/vector-icons';
import {View,StyleSheet} from 'react-native'
import WorldFeed from './screens/world';
import SearchFilterScreen from './screens/search_filter';
import {AccountImg } from './styles/home-feed-styles'
import PostScreen from './screens/post-screen';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { PostText } from './styles/addPost-style';

const Tab = createBottomTabNavigator()

function BottomTabs (){
    return (
        <Tab.Navigator
            screenOptions={
                ({route})=>({
                    headerShown:false,
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
                        return <Ionicons name={iconName} size = {size} color={color}/>
                    }
            })}
            >
                <Tab.Screen name='Feed' component={HomeFeed}/>
                <Tab.Screen name='World' component={WorldFeed}/>
                <Tab.Screen name='Search' component={SearchFilterScreen}/>
                <Tab.Screen name='Notifications' component ={NotificationSection}/>
                <Tab.Screen name='Settings' component={SettingsSection}/>
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
            <Stack.Screen name='Instant-community'
            component={BottomTabs}
            options={{
                headerTitleAlign:'center',
                headerLeft:()=>(
                    <AccountImg
                        source={require('./assets/images/person1.jpg')}
                    />
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
            <Stack.Screen name='AddPost'
                component={PostScreen}
                options={{
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
                }}
            />
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
    button: {
        backgroundColor: '#2e64e515',
    },
});