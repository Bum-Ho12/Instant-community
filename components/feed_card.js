import {React} from 'react'
import {Container,Tweet,Text,UserImg,UserInfo,UserName, UserInfoText, PostTime, PostText, PostImg, InteractionWrapper, Interaction, InteractionText} from '../styles/feedStyles.js'


export default function ListSectionFeedCard(){
    return(
        <Container>
            <Tweet title="Local Modules">
                <UserInfo>
                    <UserImg source={require('../assets/images/person1.jpg')} />
                    <UserInfoText>
                        <UserName>
                            John Doe
                        </UserName>
                        <PostTime>hours ago</PostTime><PostTime/>
                    </UserInfoText>
                </UserInfo>
                <PostText>My first post created</PostText>
                <PostImg source={require('../assets/images/person1.jpg')}/>
                <InteractionWrapper>
                    <Interaction>
                        <Ionicons name='heart-outline' size={25} />
                        <InteractionText>Like</InteractionText>
                    </Interaction>
                    <Interaction>
                    <Ionicons name='chatbox-ellipses-outline' size={25} />
                        <InteractionText>Comment  </InteractionText>
                    </Interaction>
                </InteractionWrapper>
            </Tweet>
        </Container>
    );
}

