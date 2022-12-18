import { InputHTMLAttributes } from "react";
import styled from "styled-components";
import Text from "../Text/Text";
import WigoRound from "./svg/wigo.svg";

interface SliderLabelProps {
  progress: string;
}

interface StyledInputProps extends InputHTMLAttributes<HTMLInputElement> {
  isMax: boolean;
}

interface DisabledProp {
  disabled?: boolean;
}

const getCursorStyle = ({ disabled = false }: DisabledProp) => {
  return disabled ? "not-allowed" : "cursor";
};

const getBaseThumbStyles = ({ isMax, disabled }: StyledInputProps) => `
  -webkit-appearance: none;
  background-image: url(${isMax ? WigoRound : WigoRound});
  background-color: transparent;
  border: 0;
  cursor: ${getCursorStyle};
  width: 24px;
  height: 24px;
  filter: ${disabled ? "grayscale(100%)" : "none"};
  transform: translate(-1px, 2px);
  transition: 200ms transform;
  box-shadow: none;
  border-radius: 0;

  &:hover {
    transform: ${disabled ? "scale(1) translate(-2px, 0)" : "scale(1.1) translate(-3px, 0)"};
  }
`;

export const SliderLabelContainer = styled.div`
  bottom: 0;
  position: absolute;
  left: 0;
  width: 100%;
`;

export const SliderLabel = styled(Text)<SliderLabelProps>`
  bottom: 0;
  font-size: 12px;
  left: ${({ progress }) => progress};
  position: absolute;
  text-align: center;
  min-width: 24px; // Slider thumb size
`;

export const WiggySlider = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
`;

export const StyledInput = styled.input<StyledInputProps>`
  cursor: ${getCursorStyle};
  height: 32px;
  position: relative;

  ::-webkit-slider-thumb {
    ${getBaseThumbStyles}
  }

  ::-moz-range-thumb {
    ${getBaseThumbStyles}
  }

  ::-ms-thumb {
    ${getBaseThumbStyles}
  }
`;

export const BarBackground = styled.div<DisabledProp>`
  background-color: ${({ theme, disabled }) => theme.colors[disabled ? "textDisabled" : "inputSecondary"]};
  height: 4px;
  position: absolute;
  top: 18px;
  width: 100%;
`;

export const BarProgress = styled.div<DisabledProp>`
  background-color: ${({ theme }) => theme.colors.primary};
  filter: ${({ disabled }) => (disabled ? "grayscale(100%)" : "none")};
  height: 4px;
  position: absolute;
  top: 18px;
`;
