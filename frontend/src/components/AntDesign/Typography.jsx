import React from "react";
import { Typography } from "antd";
import PropTypes from "prop-types";

const { Text, Title: AntTitle } = Typography;

const Title = ({ children, level, ...props }) => (
  <AntTitle
    level={level}
    style={{ color: "#000e3d", ...props.style }}
    {...props}
  >
    {children}
  </AntTitle>
);
Title.propTypes = {
  children: PropTypes.node.isRequired,
  level: PropTypes.number,
  style: PropTypes.object,
};

export { Text, Title };
