import React from "react";
import Button, { ButtonProps } from "./Button";

interface IconButtonProps extends ButtonProps {}

const IconButton: React.FC<React.PropsWithChildren<IconButtonProps>> = ({
  style = {},
  onPress,
  children,
}) => {
  return (
    <Button
      style={{
        borderRadius: 1000,
        alignSelf: "flex-start",
        backgroundColor: "transparent",
        ...(style as Object),
      }}
      onPress={onPress}
      children={children}
    />
  );
};

export default IconButton;
