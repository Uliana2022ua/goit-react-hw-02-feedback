import React from 'react';
import { Title, SectionWrap } from './Section.styled';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => (
  <SectionWrap>
    <Title>{title}</Title>
    {children}
  </SectionWrap>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
export default Section;