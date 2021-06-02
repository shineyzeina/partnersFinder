import React from "react";
import { Button } from "react-bootstrap";
import "./LoaderButton.css";

export default ({
  isLoading,
  text,
  loadingText,
  className = "",
  disabled = false,
  ...props
}) =>
  <Button
    className={`LoaderButton ${className}`}
    disabled={disabled || isLoading}
    {...props}
  >
    {isLoading && <i className="fa fa-refresh fa-spin" />}
    {!isLoading ? text : loadingText}
  </Button>;
