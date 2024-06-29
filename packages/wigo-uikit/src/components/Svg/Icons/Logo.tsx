import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <Svg viewBox="0 0 86 70" {...props}>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M63.6895 6.96878C63.709 6.9799 64.0098 7.15901 64.6641 8.13439C65.3778 9.1983 66.2139 10.7341 67.4706 13.0534L76.6143 29.9285C78.0471 32.5729 78.3987 33.2966 78.5314 33.9945C78.6572 34.6558 78.6565 35.3351 78.5292 35.9962C78.3949 36.6937 78.0418 37.4167 76.6031 40.058L67.4651 56.834C66.2089 59.1403 65.3737 60.6665 64.661 61.7238C64.0078 62.6928 63.7081 62.8706 63.6883 62.8818C63.1906 63.0952 62.6273 63.0952 62.1297 62.8818C62.1099 62.8706 61.8101 62.6928 61.157 61.7238C60.4443 60.6665 59.609 59.1403 58.3528 56.834L46.4577 34.9962L58.3473 13.0534C59.604 10.7341 60.4401 9.1983 61.1538 8.13439C61.8082 7.159 62.1089 6.9799 62.1284 6.96878C62.6267 6.75468 63.1912 6.75468 63.6895 6.96878ZM42.8151 28.2816L52.7944 9.86421C53.9553 7.72155 54.9345 5.91431 55.8377 4.56804C56.7439 3.21718 57.8887 1.82778 59.5827 1.09511C61.7052 0.177118 64.1127 0.177118 66.2352 1.09511C67.9292 1.82778 69.074 3.21718 69.9803 4.56804C70.8834 5.91434 71.8626 7.72163 73.0236 9.86435L82.2427 26.8787C82.3102 27.0032 82.3769 27.1261 82.4428 27.2475C83.5814 29.3451 84.4772 30.9954 84.8202 32.798C85.0973 34.2546 85.0957 35.7506 84.8153 37.2066C84.4684 39.0084 83.569 40.6567 82.4257 42.7518C82.3595 42.873 82.2925 42.9958 82.2248 43.1201L73.0112 60.035C71.851 62.1651 70.872 63.9626 69.9692 65.3019C69.0627 66.6468 67.9186 68.0285 66.2288 68.7577C64.11 69.672 61.7079 69.672 59.5891 68.7577C57.8993 68.0285 56.7553 66.6468 55.8487 65.3019C54.946 63.9627 53.967 62.1653 52.8069 60.0354L42.8151 41.6917L32.8234 60.0352C31.6632 62.1652 30.6842 63.9627 29.7814 65.3019C28.8749 66.6468 27.7309 68.0285 26.041 68.7577C23.9222 69.672 21.5202 69.672 19.4014 68.7577C17.7115 68.0285 16.5675 66.6468 15.661 65.3019C14.7582 63.9627 13.7793 62.1654 12.6192 60.0355L3.40538 43.1201C3.33764 42.9958 3.27066 42.873 3.2045 42.7518C2.06121 40.6567 1.16176 39.0084 0.814823 37.2066C0.534481 35.7506 0.53283 34.2546 0.80996 32.798C1.15291 30.9954 2.04873 29.3451 3.18738 27.2475C3.25328 27.1261 3.31999 27.0032 3.38746 26.8787L12.6066 9.8643C13.7676 7.7216 14.7467 5.91433 15.6499 4.56804C16.5561 3.21718 17.7009 1.82778 19.3949 1.09511C21.5174 0.177121 23.9249 0.17712 26.0475 1.09511C27.7415 1.82778 28.8863 3.21718 29.7925 4.56804C30.6957 5.91437 31.6749 7.72171 32.8359 9.86449L42.8151 28.2816ZM39.1724 34.9963L27.2774 56.834C26.0212 59.1403 25.1859 60.6665 24.4732 61.7238C23.8201 62.6926 23.5204 62.8706 23.5005 62.8818C23.0029 63.0952 22.4395 63.0952 21.9419 62.8818C21.9224 62.8708 21.6227 62.6932 20.9692 61.7238C20.2565 60.6665 19.4212 59.1403 18.165 56.834L9.02709 40.058C7.58838 37.4167 7.23526 36.6937 7.10095 35.9962C6.97366 35.3351 6.97291 34.6558 7.09875 33.9945C7.23151 33.2966 7.58304 32.5729 9.01592 29.9285L18.1596 13.0534C19.4163 10.7341 20.2523 9.1983 20.9661 8.13439C21.6205 7.15886 21.9213 6.97985 21.9406 6.96877C22.439 6.75469 23.0034 6.75469 23.5018 6.96877C23.5211 6.97985 23.8219 7.15887 24.4763 8.13439C25.1901 9.1983 26.0261 10.7341 27.2828 13.0534L39.1724 34.9963Z"
        fill="white"
      />
      <g opacity="0.3">
        <path
          d="M39.183 35.0318L42.82 28.3054L30.8317 6.17326C29.9898 4.61889 28.0472 4.04136 26.4928 4.88331C24.9384 5.72526 24.3609 7.66786 25.2029 9.22223L39.183 35.0318Z"
          fill="url(#paint0_linear_824_1059)"
        />
        <path
          d="M46.4155 34.935L42.7855 41.6603L54.7509 63.7888C55.5912 65.3429 57.5301 65.9203 59.0816 65.0785C60.633 64.2367 61.2094 62.2944 60.3691 60.7403L46.4155 34.935Z"
          fill="url(#paint1_linear_824_1059)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_824_1059"
          x1="64.5734"
          y1="62.726"
          x2="36.5219"
          y2="21.5464"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset="1" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_824_1059"
          x1="40.8764"
          y1="36.3068"
          x2="54.9309"
          y2="56.908"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset="0.598958" stop-opacity="0" />
        </linearGradient>
      </defs>
    </Svg>
  );
};

export default Icon;
