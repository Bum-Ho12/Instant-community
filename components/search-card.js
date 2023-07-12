import {React} from 'react'
import {SearchListCard,UserImg,UserInfo,UserName,PostNickName, UserNameTag} from '../styles/search-style.js'


const SearchCard=({item})=>{

    return(
            <SearchListCard title="Local Modules">
                <UserInfo>
                    <UserImg source={item.userImg} />
                    <UserNameTag>
                        <UserName>
                            {item.userName}
                        </UserName>
                        <PostNickName>@{item.userName}</PostNickName>
                    </UserNameTag>
                </UserInfo>
            </SearchListCard>
    );
}

export default SearchCard