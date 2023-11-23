import { css } from '@emotion/react';
import styled from '@emotion/styled';

// Styles
import styles from '../styles/theme.js';

const Footer = ({ userData }) => {

  const motivationalPhrases = {
    'lose-fat': 'find joy in every step towards a leaner, healthier you.',
    'increase-strength': 'feel empowered with every new level of strength you achieve.',
    'build-muscle': 'relish the journey as your muscles grow and your physique transforms.',
    'maintenance': 'continue to take pride in maintaining your fitness and well-being.',
    'improve-endurance': 'discover new strengths as you push your endurance further.'
  };  

  return (
    <div css={css` 
      padding: 3rem 0;
      border-top: 1px solid #777;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 0.875rem;
      `}>
        <p>Hope you {motivationalPhrases[userData.goal]}</p> 
      <div
        css={css`
          display: flex;
          gap: 2rem;
          color: white;
        `}> 
        <a href='https://github.com/GRdevelops'>GitHub</a>
        <a href='https://www.desengineers.co/'>Portfolio</a>
      </div> 
    </div>
  )
}

export default Footer;