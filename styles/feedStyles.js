import {styled} from 'styled-components'

export const Container = styled.View`
    flex:1;
    align-items:center;
    background-color: #ffffff;
    padding-left: 15px;
    padding-right:5px;
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

export const PostImg = styled.Image`
    width:95%;
    height:250px;
    margin-top:15px;
    margin-left:10px;
    margin-right: 1px;
`

export const Divider = styled.View`
    border-bottom-color:#dddddd;
    border-bottom-width: 1px;
    width:92%;
    align-self:center;
    margin-top: 15px;
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
    padding: 5px;
    background-color:${props=>props.active?'#2e64e515':'transparent'};
`

export const InteractionText = styled.Text`
    font-size: 12px;
    font-weight: bold;
    color:${props=> props.active?'#2e64e5':'#333'};
    margin-top: 5px;
    margin-left: 5px;
`
