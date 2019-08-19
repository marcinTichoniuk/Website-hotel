import styled from 'styled-components';

const StyledHeader = styled.header`
  height: 60vh;
  min-height: 500px;
  background-image: url(${props => props.bgImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default StyledHeader;