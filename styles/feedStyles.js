import {styled} from 'styled-components'

export const Container = styled.View`
    flex:1;
    justify-content: center;
    align-items:center;
    background-color: #fff;
    padding: 20px;
`
export const Tweet = styled.View`
    background-color: #f8f8f8;
    width: 100%;
    margin-bottom: 20px;
    border-radius: 10px;
`

export const UserInfo = styled.View`
    flex-direction:row;
    justify-content:flex-start;
`;

export const UserImg = styled.Image`
    width: 50px;
    height:50px;
    border-radius:25px;
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

export const PostTime = styled.Text`
    font-size:12px;
    color:#666;
`

export const PostText = styled.Text`
    font-size:14 px;
    padding-left: 15px;
    padding-right:15px;
`

export const PostImg = styled.Image`
    width:100%;
    height:250px;
    margin-top:15px;
`

export const Divider = styled.View`
    border-bottom-color:#dddddd;
    border-bottom-width: 1px;
    width:92%;
    align-self:center;
`
export const InteractionWrapper = styled.View`
    flex-direction:row;
    justify-content: space-around;
    padding: 15px;
`
export const Interaction = styled.TouchableOpacity`
    flex-direction: row;
    justify-content:center;
    border-radius: 5px;
    padding:2px 5px;
`

export const InteractionText = styled.Text`
    font-size:12 px;
    font-weight: bold;
    color:#333;
    margin-top: 5px;
    margin-left: 5px;
`
