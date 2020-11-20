import styled from 'styled-components'
import Contact from './Contact'
import Socials from './Socials'


const StyledFooter = styled.footer`
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: ${props => props.theme.navy};
`

const StyledContentWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    height: 240px;
    width: 90%;
    max-width: 1400px;
    padding: 30px 0;
`

function Footer() {
    return (
        <StyledFooter>
           <StyledContentWrapper>
                <Contact/>
                <Socials/>
            </StyledContentWrapper>
        </StyledFooter>
    )
}

export default Footer