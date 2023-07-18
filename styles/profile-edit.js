import {styled} from 'styled-components'

export const Container = styled.View`
    flex:1;
    align-items:center;
    background-color: #fff;
    padding-left: 15px;
    padding-right:5px;
`

export const InfoTitle = styled.Text`
    font-size:16px;
    font-weight:bold;
`;

export const Divider = styled.View`
    border-bottom-color:#dddddd;
    border-bottom-width: 1px;
    width:92%;
    align-self:center;
    margin-top: 5px;
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
