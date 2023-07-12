import {React} from 'react'
import {FlatList} from 'react-native'
import NotificationCard from '../components/notification-card'
import {Container} from '../styles/feedStyles.js'
import Posts from '../dataSource/feed-data.js'


export default function NotificationSection(){
    return (
        <Container>
            <FlatList
            data = {Posts}
            renderItem={({item})=> <NotificationCard item={item}/>}
            keyExtractor={item=>item.id}
            showsVerticalScrollIndicator={false}
            />
        </Container>
    )
}
