import styled from "styled-components";
const StyledTerms = styled.p`
  font-size: 1rem;
  width: 220px;
  text-align: center;
  a {
    color: ${(props) => props.theme.red};
  }
`;
export default StyledTerms;
