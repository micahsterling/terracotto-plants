import styled from "styled-components";

interface Styles {
  wrap: string;
}

export const PageContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow: none;
  background: #172230;
`;

const TitleContainer = styled.div`
  width: 100%;
  height: auto;
  overflow: none;
  background: black;
`;
const TitleHeader = styled.h1`
  text-align: center;
  color: #ffbe35;
  font-size: 3.75rem;
  font-weight: 300;
  padding: 25px 0;
`;
const TitleBody = styled.p`
  text-align: center;
  color: white;
  font-size: 38px;
  font-weight: 300;
  padding: 10px;
`;

export const Title = () => {
  return (
    <TitleContainer>
      <TitleHeader>TERROCOTTO PLANTS</TitleHeader>
      <TitleBody></TitleBody>
    </TitleContainer>
  );
};
