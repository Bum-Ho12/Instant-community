import {styled} from 'styled-components'

export const Container = styled.View`
    flex:1;
    align-items:center;
    background-color: #fff;
    padding-left: 15px;
    padding-right:5px;
`
export const Note = styled.View`
    background-color: #f8f8f8;
    width: 100%;
    margin-top:10px;
    margin-bottom: 5px;
    border-radius: 10px;
    padding-bottom: 10px;
`

export const UserInfo = styled.View`
    flex-direction:row;
    justify-content:flex-start;
    padding: 5px;
`;

export const UserNameTag = styled.View`
    flex-direction:row;
    justify-content:flex-start;
`;

export const UserImg = styled.Image`
    width: 50px;
    height:50px;
    border-radius:25px;
    margin-bottom: 10px;
    margin-right: 10px;
`;

export const UserInfoText = styled.View`
    flex-direction: column;
    justify-content: center;
    margin-left: 10px;
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
`

export const PostTime = styled.Text`
    font-size:12px;
    color:#666;
`

export const PostText = styled.Text`
    font-size:14px;
    padding-left: 15px;
    padding-right:15px;
`