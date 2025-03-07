import React from 'react';
import styled from 'styled-components';


const HeroBgAnimation = () => {
 
  const Div = styled.div`
  width:600px;
  height: 500px;
`;

  return (
  <Div>
   <svg
      className="BgAnimation__svg"
      viewBox="0 0 602 602"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    > 
      <g opacity="0.15">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M201.337 87.437C193.474 79.5738 180.725 79.5738 172.862 87.437L87.437 172.862C79.5739 180.725 79.5739 193.474 87.437 201.337L400.663 514.563C408.526 522.426 421.275 522.426 429.138 514.563L514.563 429.138C522.426 421.275 522.426 408.526 514.563 400.663L201.337 87.437ZM30.4869 115.912C-8.82897 155.228 -8.82897 218.972 30.4869 258.287L343.713 571.513C383.028 610.829 446.772 610.829 486.088 571.513L571.513 486.088C610.829 446.772 610.829 383.028 571.513 343.713L258.287 30.4869C218.972 -8.82896 155.228 -8.82896 115.912 30.4869L30.4869 115.912Z"
          stroke="url(#paint0_radial)"
          id="path_0"
        />
        <path
          d="M514.563 201.337C522.426 193.474 522.426 180.725 514.563 172.862L429.138 87.437C421.275 79.5738 408.526 79.5739 400.663 87.437L358.098 130.002L301.148 73.0516L343.713 30.4869C383.028 -8.82896 446.772 -8.82896 486.088 30.4869L571.513 115.912C610.829 155.228 610.829 218.972 571.513 258.287L357.802 471.999L300.852 415.049L514.563 201.337Z"
          stroke="url(#paint1_radial)"
          id="path_1"
        />
        <path
          d="M243.901 471.999L201.337 514.563C193.474 522.426 180.725 522.426 172.862 514.563L87.437 429.138C79.5739 421.275 79.5739 408.526 87.437 400.663L301.148 186.952L244.198 130.002L30.4869 343.713C-8.82897 383.028 -8.82897 446.772 30.4869 486.088L115.912 571.513C155.228 610.829 218.972 610.829 258.287 571.513L300.852 528.949L243.901 471.999Z"
          stroke="url(#paint2_radial)"
          id="path_2"
        />
      </g>
      <ellipse
        cx="295.027"
        cy="193.118"
        rx="1.07306"
        ry="1.07433"
        fill="#945DD6"
      >
        <animateMotion dur="10s" repeatCount="indefinite" rotate="auto">
          <mpath href="#path_2" />
        </animateMotion>
      </ellipse>
      <path
        d="M294.685 193.474L268.932 219.258"
        stroke="url(#paint3_linear)"
      >
        <animateMotion dur="10s" repeatCount="indefinite" rotate="auto">
          <mpath href="#path_2" />
        </animateMotion>
      </path>
      <ellipse
        cx="295.027"
        cy="193.118"
        rx="1.07306"
        ry="1.07433"
        fill="#46737"
      >
        <animateMotion
          dur="5s"
          begin="1"
          repeatCount="indefinite"
          rotate="auto"
        >
          <mpath href="#path_2" />
        </animateMotion>
      </ellipse>
      <path
        d="M294.685 193.474L268.932 219.258"
        stroke="url(#paint7_linear)"
      >
        <animateMotion
          dur="5s"
          begin="1"
          repeatCount="indefinite"
          rotate="auto"
        >
          <mpath href="#path_2" />
        </animateMotion>
      </path>
      <ellipse
        cx="476.525"
        cy="363.313"
        rx="1.07433"
        ry="1.07306"
        transform="rotate(90 476.525 363.313)"
        fill="#945DD6"
      >
        <animateMotion dur="10s" repeatCount="indefinite" rotate="auto">
          <mpath href="#path_0" />
        </animateMotion>
      </ellipse>
      <path
        d="M476.171 362.952L450.417 337.168"
        stroke="url(#paint4_linear)"
      >
        <animateMotion dur="10s" repeatCount="indefinite" rotate="auto">
          <mpath href="#path_0" />
        </animateMotion>
      </path>
      <ellipse
        cx="382.164"
        cy="155.029"
        rx="1.07433"
        ry="1.07306"
        transform="rotate(90 382.164 155.029)"
        fill="#F46737"
      >
        <animateMotion
          dur="10s"
          begin="1"
          repeatCount="indefinite"
          rotate="auto"
        >
          <mpath href="#path_0" />
        </animateMotion>
      </ellipse>
      <path
        d="M381.81 154.669L356.057 128.885"
        stroke="url(#paint5_linear)"
      >
        <animateMotion
          dur="10s"
          begin="1"
          repeatCount="indefinite"
          rotate="auto"
        >
          <mpath href="#path_0" />
        </animateMotion>
      </path>
      <ellipse
        cx="333.324"
        cy="382.691"
        rx="1.07306"
        ry="1.07433"
        transform="rotate(-180 333.324 382.691)"
        fill="#F46737"
      >
        <animateMotion
          dur="5s"
          begin="0"
          repeatCount="indefinite"
          rotate="auto"
        >
          <mpath href="#path_1" />
        </animateMotion>
      </ellipse>
      <path
        d="M333.667 382.335L359.42 356.551"
        stroke="url(#paint6_linear)"
      >
        <animateMotion
          dur="5s"
          begin="0"
          repeatCount="indefinite"
          rotate="auto"
        >
          <mpath href="#path_1" />
        </animateMotion>
      </path>
      <ellipse
        cx="476.525"
        cy="363.313"
        rx="1.07433"
        ry="1.07306"
        transform="rotate(90 476.525 363.313)"
        fill="#13ADC7"
      >
        <animateMotion dur="3s" repeatCount="indefinite" rotate="auto">
          <mpath href="#path_0" />
        </animateMotion>
      </ellipse>
      <path
        d="M476.171 362.952L450.417 337.168"
        stroke="url(#paint7_linear)"
      >
        <animateMotion dur="3s" repeatCount="indefinite" rotate="auto">
          <mpath href="#path_0" />
        </animateMotion>
      </path>
      <defs>
        <radialGradient
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(301 301) rotate(90) scale(301 301)"
          id="paint0_radial"
        >
          <stop stopColor="#fff" />
          <stop offset="1" />
        </radialGradient>
        <radialGradient
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(301 301) rotate(90) scale(301 301)"
          id="paint1_radial"
        >
          <stop stopColor="#fff" />
          <stop offset="1" />
        </radialGradient>
        <radialGradient
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(301 301) rotate(90) scale(301 301)"
          id="paint2_radial"
        >
          <stop stopColor="#fff" />
          <stop offset="1" />
        </radialGradient>
        <linearGradient
          x1="281.106"
          x2="320.177"
          y1="206.676"
          y2="167.605"
          id="paint3_linear"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset="1" />
        </linearGradient>
        <linearGradient
          x1="281.106"
          x2="320.177"
          y1="206.676"
          y2="167.605"
          id="paint4_linear"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset="1" />
        </linearGradient>
        <linearGradient
          x1="368.285"
          x2="407.356"
          y1="138.092"
          y2="99.0203"
          id="paint5_linear"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset="1" />
        </linearGradient>
        <linearGradient
          x1="347.326"
          x2="308.254"
          y1="395.251"
          y2="434.323"
          id="paint6_linear"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset="1" />
        </linearGradient>
        <linearGradient
          x1="468.506"
          x2="507.577"
          y1="345.006"
          y2="305.935"
          id="paint7_linear"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset="1" />
        </linearGradient>
      </defs>
     </svg> 
  </Div>
    );
};

export default HeroBgAnimation;
