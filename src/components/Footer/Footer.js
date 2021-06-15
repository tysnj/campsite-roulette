import React from 'react'
import { IconContext } from 'react-icons/lib';
import { FooterContainer, ExternalLinkContainer, ExternalLinkWrapper } from './Footer.elements'


const Footer = () => {
  return (
    <FooterContainer>
      WANT MORE NEWS?
      <ExternalLinkContainer>
        <ExternalLinkWrapper href={'https://hn.algolia.com/?q=front-end+technology'} target='_blank' data-cy='footer-link'>
          Click Here
        </ExternalLinkWrapper>
      </ExternalLinkContainer>
    </FooterContainer>
  )
}

export default Footer


// TODO: 
//  Logo in Footer On Left
//  External Link on Right
//  Style/Add Link Title
//  Style/Add Link to HN
//  Add functionality to take to HN