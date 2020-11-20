import styled from 'styled-components'
import { useState } from 'react'
import ComingSoonBanner from './ComingSoonBanner'
import { LogoWhiteS } from './Logo'

const StyledHeaderWrapper = styled.div`
    height: ${props => props.banner ? '113px' : '60px'};
    transition: transform 0.3s, height 0.3s;
    transform: translateY(${props => props.banner ? '0px' : '-40px'});
`

const StyledHeader = styled.header`
    position: absolute;
    top: 0;
    width: 100%;

    background-color: ${props => props.theme.navy};

    h1 {
        color: ${props => props.theme.white};
        margin: 5px 0;
    }
`

const StyledContentWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin: 12px 0;
`

const StyledContent = styled.div`
    display: flex;
    align-items: center;
    width: 90%;
    max-width: 1400px;
`

const StyledLogoWrapper = styled.div`
    height: 48px;
    margin-right: 20px;
`

function Header() {

    const [bannerPresent, setBannerPresent] = useState(true)

    function closeBanner() {
        setBannerPresent(false)
    }

    return (
        <StyledHeaderWrapper banner={bannerPresent}>
            <StyledHeader>
                <ComingSoonBanner 
                    onBannerClose={closeBanner}
                    bannerPresent={bannerPresent}
                />
                <StyledContentWrapper>
                    <StyledContent>
                        <StyledLogoWrapper>
                            <LogoWhiteS/>
                        </StyledLogoWrapper>
                        <h1>Re-Imagine Education</h1>
                    </StyledContent>
                </StyledContentWrapper>
            </StyledHeader>
        </StyledHeaderWrapper>
    )
}

export default Header