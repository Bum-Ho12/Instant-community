import {React} from 'react'
import {SearchListCard,UserImg,UserInfo,UserName,PostNickName, UserNameTag} from '../styles/search-style.js'
import { TouchableOpacity } from 'react-native-gesture-handler';


const SearchCard=({item,navigation})=>{

    return(
            <SearchListCard title="Local Modules">
                <TouchableOpacity
                onPress={()=>{navigation.navigate('Profile')}}
                >
                    <UserInfo>
                        <UserImg source={item.userImg} />
                        <UserNameTag>
                            <UserName>
                                {item.userName}
                            </UserName>
                            <PostNickName>@{item.userName}</PostNickName>
                        </UserNameTag>
                    </UserInfo>
                </TouchableOpacity>
            </SearchListCard>
    );
}

export default SearchCard