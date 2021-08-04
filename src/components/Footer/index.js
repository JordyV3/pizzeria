import React from 'react';
import {
  FaInstagram,
  FaGithub
} from 'react-icons/fa';
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcons,
  SocialIconLink
} from './FooterElements';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='#'>Pizza Italiana</SocialLogo>
            <SocialIcons>
              <SocialIconLink href='https://github.com/JordyV3' target='_blank' aria-label='Github' rel='noopener noreferrer' >
                <FaGithub/>
              </SocialIconLink>
              <SocialIconLink href='https://www.instagram.com/jordy_vega3' target='_blank' aria-label='Instagram' rel='noopener noreferrer'>
                <FaInstagram />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
