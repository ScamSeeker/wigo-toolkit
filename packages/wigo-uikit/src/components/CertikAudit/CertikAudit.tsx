import React from "react";
import styled from "styled-components";
import { Certik } from "../Svg";

export interface Props {
  certikURL?: string;
}

const CertikLink = styled.a`
  display: flex;
  align-items: center;
  }
`;

const CertikAudit: React.FC<React.PropsWithChildren<Props>> = ({ certikURL }) => {
  return (
    <CertikLink href={certikURL} target="_blank">
      <Certik width="95px" />
    </CertikLink>
  );
};

export default React.memo(CertikAudit);
