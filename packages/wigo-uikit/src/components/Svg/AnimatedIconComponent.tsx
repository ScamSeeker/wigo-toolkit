import React from "react";
import * as IconModule from ".";
import { StyledAnimatedIconComponent, StyledIconContainer } from "./styles";
import { IconComponentType, SvgProps } from "./types";

const Icons = IconModule as unknown as { [key: string]: React.FC<React.PropsWithChildren<SvgProps>> };

const AnimatedIconComponent: React.FC<React.PropsWithChildren<IconComponentType>> = ({
  iconName,
  color = "wigoWhite",
  activeColor = "wigoBlue",
  activeBackgroundColor,
  isActive = false,
  ...props
}) => {
  const IconElement = Icons[`${iconName}Icon`];
  const IconElementFill = Icons[`${iconName}FillIcon`];
  const hasFillIcon = IconElementFill !== undefined;
  return IconElement ? (
    <StyledAnimatedIconComponent isActive={isActive} hasFillIcon={hasFillIcon} {...props}>
      <StyledIconContainer activeBackgroundColor={activeBackgroundColor}>
        <IconElement color={color} />
      </StyledIconContainer>
      {hasFillIcon && (
        <StyledIconContainer activeBackgroundColor={activeBackgroundColor} {...props}>
          <IconElementFill color={activeColor} />
        </StyledIconContainer>
      )}
    </StyledAnimatedIconComponent>
  ) : null;
};

export default AnimatedIconComponent;
