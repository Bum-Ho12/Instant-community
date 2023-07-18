import {styled} from 'styled-components'

export const Container = styled.View`
    flex:1;
    align-items:center;
    background-color: #fff;
    padding-left: 15px;
    padding-right:5px;
`

export const UserInfo = styled.View`
    flex-direction:column;
    justify-content:flex-start;
    padding: 5px;
`;

export const InfoTitle = styled.Text`
    font-size:14px;
    font-weight:bold;
`;

export const InfoEntry = styled.InputField`
    padding: 10;
    marginTop: 5;
    marginBottom: 10;
    width: 100%;
    font-size: 16;
    
`

export const NameEntry = styled.Text`
    font-size:12px;
    color:#666;
    font-style:italic;
    margin-left: 10px;
`

export const AboutText = styled.Text`
    font-size:14px;
    padding-left: 15px;
    padding-right:15px;
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
