import {React} from 'react'
import {FlatList} from 'react-native'
import {Container} from '../styles/feedStyles.js'
import ListSectionFeedCard from '../components/feed_card'
import Posts from '../dataSource/feed-data.js'


const HomeFeed=({navigation})=>{
    return (
        <Container>
            <FlatList
            data = {Posts}
            renderItem={({item})=> <ListSectionFeedCard
            item={item} navigation={navigation}/>}
            keyExtractor={item=>item.id}
            showsVerticalScrollIndicator={false}
            />
        </Container>
    )
}

export default  HomeFeed
