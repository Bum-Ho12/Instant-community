import {styled} from 'styled-components'

export const Container = styled.View`
    flex:1;
    align-items:center;
    background-color: #fff;
    padding-left: 5px;
    padding-right:15px;
`
export const ListContainer = styled.View`
    align-items:flex-start;
    width: 100%;
`
export const SearchBg = styled.View`
    background-color: #f8f8f8;
    width: 90%;
    height:40px;
    margin-top: 5px;
    margin-bottom: 20px;
    border-radius: 5px;
`

export const SearchAlignment = styled.View`
    flex-direction:row;
    justify-content:center;
    padding: 5px;
`;

export const SearchText = styled.Text`
    font-size:14px;
    font-weight:bold;
`;
export const SearchInputField = styled.TextInput`
    justify-content: center;
    align-items: center;
    font-size: 14px;
    text-align: center;
    width: 70%;
`

export const SearchListCard = styled.View`
    width: 100%;
    margin-top:5px;
    margin-bottom: 5px;
    border-radius: 10px;
    padding-bottom: 10px;
`

export const UserInfo = styled.View`
    flex-direction:row;
    justify-content:flex-start;
    align-content: center;
    align-items: center;
    padding: 5px;
`;

export const UserNameTag = styled.View`
    flex-direction:row;
    justify-content:flex-start;
`;

export const UserImg = styled.Image`
    width: 30px;
    height:30px;
    border-radius:15px;
    margin-bottom: 5px;
    margin-right: 10px;
`;

export const UserName = styled.Text`
    font-size:14px;
    font-weight:bold;
`;

export const PostNickName = styled.Text`
    font-size:12px;
    color:#666;
    font-style:italic;
    margin-left: 10px;
    margin-right: 20px;
`
