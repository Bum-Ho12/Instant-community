import {React} from 'react'
import {Ionicons} from '@expo/vector-icons';
import {Container, SearchAlignment, SearchBg, SearchText,ListContainer, SearchInputField} from '../styles/search-style'
import { FlatList } from 'react-native-gesture-handler';
import Posts from '../dataSource/feed-data.js'
import SearchCard from '../components/search-card';


export default function SearchFilterScreen(){
    return (
        <Container>
            <SearchBg>
                <SearchAlignment>
                <SearchInputField
                    placeholder='Search'
                    multiline
                    numberOfLines={1}
                />
                    <Ionicons />
                </SearchAlignment>
            </SearchBg>
            <ListContainer>
                <FlatList
                    data = {Posts}
                    renderItem={({item})=> <SearchCard item={item}/>}
                    keyExtractor={item=>item.id}
                    showsVerticalScrollIndicator={false}
                />
            </ListContainer>
        </Container>
    )
}
