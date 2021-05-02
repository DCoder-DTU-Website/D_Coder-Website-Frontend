import React from 'react';
import tw from "twin.macro";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

const Container = tw.div`text-gray-600 bg-gray-900`
const InnerContainer = tw.div`container px-5 py-24 mx-auto`
const ContainerWrap = tw.div`flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4`

const LeftSideDetails = tw.div`p-4 md:w-1/4 sm:mb-0 mb-6`
const Image = tw.img`object-cover object-center rounded-full h-full w-full`
const ImageContainer = tw.div`rounded-lg h-64 md:px-4 overflow-hidden`
const UserName = tw.div`text-center md:my-8`
const SocialMedia = tw.div`md:my-8 text-center`
const CodingLinks = tw.div`grid md:grid-cols-6`
const TextCard = tw.div`p-4 md:mx-8 md:w-2/3 w-full`
const InnerTextCard = tw.div`h-auto bg-gray-100 p-8 rounded md:mb-8`

const UserProfile = (props) => {
    return(
        <>
        <Container>
            <InnerContainer>
                <ContainerWrap>
                <LeftSideDetails>
                    <ImageContainer>
                    <Image alt="content" className="" src={props.image} />                                                            
                    </ImageContainer>
                    <UserName>
                    {props.username}
                    
                    </UserName>
                    <SocialMedia>
                    <a href = {props.linkedin} target = "_blank" style = {{marginRight:"4%"}}>
                        <LinkedInIcon/>
                    </a>
                    <a href = {props.github} target = "_blank">
                        <GitHubIcon/>
                    </a>
                    </SocialMedia>
                </LeftSideDetails>
                <TextCard>
                    <InnerTextCard>
                    <CodingLinks>
                        <div>
                     {props.firstName}  {props.lastName}
                     </div>
                     <div>
                     {props.email}
                     </div>
                    </CodingLinks>
                    <CodingLinks>
                        <div>
                    Year: {props.year}</div>
                    <div>
                    Branch: {props.branch}</div>
                    <div>
                    Contact: {props.contact}</div>
                    </CodingLinks>
                    Description: {props.description}<br/>
                    </InnerTextCard>

                    <InnerTextCard>
                        Working With: {props.workingWith}<br/>
                        Skills: {props.techStack}<br/>
                        <CodingLinks>
                            <a href = {props.codechef} target = "_blank">
                                Codechef
                            </a>
                            <a href = {props.codeforces} target = "_blank">
                                Codeforces
                            </a>
                            <a href = {props.leetcode} target = "_blank">
                                Leetcode
                            </a>
                        </CodingLinks>
                    </InnerTextCard>
                </TextCard>
                </ContainerWrap>
            </InnerContainer>
        </Container>

        </>
    );
};

export default UserProfile;