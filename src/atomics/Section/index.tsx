import React from 'react';
import styled from 'styled-components';

const SectionStyle = styled.section`
  height: 100vh;
  width: 100vw;
`;

const Section: React.FC<React.HTMLAttributes<any>> = ({ children, ...props }) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <SectionStyle {...props}>{children}</SectionStyle>;
};

export default Section;
