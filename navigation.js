import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import NotificationSection from './screens/notifications';
import HomeFeed from './screens/home_feed';
import SettingsSection from './screens/settings';
import {Ionicons} from '@expo/vector-icons';
import WorldFeed from './screens/world';
import SearchFilterScreen from './screens/search_filter';

const Tab = createBottomTabNavigator()

function BottomTabs (){
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
                            iconName = focused?'globe':'globe';
                        }else if(route.name==='Search'){
                            iconName = focused?'search':'search';
                        }else if(route.name==='Notifications'){
                            iconName = focused?'notifications':'notifications-outline';
                        }else if(route.name ==='Settings'){
                            iconName = focused?'cog':'cog-outline'
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
    return (
        <Stack.Navigator screenOptions={{ headerShown:false }}>
            <Stack.Screen name='Feeds' component={BottomTabs}/>
            {/* <Stack.Screen name='Notifications' component={BottomTabs}/>
            <Stack.Screen name='Settings' component={BottomTabs}/> */}
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
