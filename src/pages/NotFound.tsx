import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { css, keyframes } from '@emotion/react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  // Keyframes for animations
  const bounce = keyframes`
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  `;

  const pulse = keyframes`
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  `;

  const fadeInUp = keyframes`
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  `;

  const fadeIn = keyframes`
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  `;

  // CSS styles using Emotion
  const containerStyle = css`
    display: flex;
    min-height: 100vh;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #ffffff 0%, #eff6ff 100%);
  `;

  const contentStyle = css`
    text-align: center;
    max-width: 28rem;
    margin-left: 1rem;
    margin-right: 1rem;
  `;

  const iconContainerStyle = css`
    margin-bottom: 2rem;
    position: relative;
  `;

  const bouncingCircleStyle = css`
    width: 8rem;
    height: 8rem;
    margin-left: auto;
    margin-right: auto;
    background-color: #3b82f6;
    border-radius: 9999px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    animation: ${bounce} 1s infinite;
  `;

  const errorBadgeStyle = css`
    position: absolute;
    top: -0.5rem;
    right: -0.5rem;
    background-color: #000000;
    color: #ffffff;
    border-radius: 9999px;
    width: 3rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.25rem;
    font-weight: bold;
    animation: ${pulse} 2s infinite;
  `;

  const titleStyle = css`
    margin-bottom: 1.5rem;
    font-size: 3.75rem;
    font-weight: 900;
    color: #000000;
    letter-spacing: -0.025em;
    animation: ${pulse} 2s infinite;
  `;

  const mainContentStyle = css`
    margin-bottom: 1.5rem;
    animation: ${fadeInUp} 0.6s ease-out;
  `;

  const subtitleStyle = css`
    font-size: 1.5rem;
    font-weight: 600;
    color: #000000;
    margin-bottom: 0.5rem;
  `;

  const descriptionStyle = css`
    color: #4b5563;
    margin-bottom: 1rem;
  `;

  const pathStyle = css`
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
    color: #2563eb;
    background-color: #eff6ff;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
  `;

  const errorBoxStyle = css`
    margin-bottom: 2rem;
    padding: 1rem;
    background-color: #000000;
    color: #ffffff;
    border-radius: 0.5rem;
    animation: ${fadeIn} 0.6s ease-out 0.3s both;
  `;

  const errorHeaderStyle = css`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0.5rem;
  `;

  const homeButtonStyle = css`
    display: inline-flex;
    align-items: center;
    padding: 0.75rem 1.5rem;
    background-color: #2563eb;
    color: #ffffff;
    font-weight: 600;
    border-radius: 0.5rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease-in-out;
    animation: ${fadeIn} 0.6s ease-out 0.5s both;
    
    &:hover {
      background-color: #1d4ed8;
      transform: scale(1.05);
    }
  `;

  const helpTextStyle = css`
    margin-top: 2rem;
    font-size: 0.875rem;
    color: #6b7280;
    animation: ${fadeIn} 0.6s ease-out 0.7s both;
  `;

  return (
    <div css={containerStyle}>
      <div css={contentStyle}>
        {/* Animated 404 Icon */}
        <div css={iconContainerStyle}>
          <div css={bouncingCircleStyle}>
            <svg 
              css={css`width: 4rem; height: 4rem; color: #ffffff;`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 20a7.962 7.962 0 01-5-1.709"
              />
            </svg>
          </div>
          <div css={errorBadgeStyle}>
            404
          </div>
        </div>

        {/* Main Content */}
        <h1 css={titleStyle}>
          404
        </h1>
        
        <div css={mainContentStyle}>
          <p css={subtitleStyle}>Page Not Found</p>
          <p css={descriptionStyle}>
            The page <span css={pathStyle}>{location.pathname}</span> doesn't exist.
          </p>
        </div>

        {/* Error Details */}
        <div css={errorBoxStyle}>
          <div css={errorHeaderStyle}>
            <svg css={css`width: 1.25rem; height: 1.25rem; margin-right: 0.5rem; color: #60a5fa;`} fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <span css={css`font-weight: 600;`}>Error Details</span>
          </div>
          <p css={css`font-size: 0.875rem; color: #bfdbfe;`}>Route not found: {location.pathname}</p>
        </div>

        {/* Home Button */}
        <a 
          href="/" 
          css={homeButtonStyle}
        >
          <svg css={css`width: 1.25rem; height: 1.25rem; margin-right: 0.5rem;`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          Return to Homepage
        </a>

        {/* Additional Help */}
        <div css={helpTextStyle}>
           <p>If you believe this is an error, please contact support.</p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;