import styled from "styled-components";

interface Styles {
  wrap: string;
}

const GridImage = styled.img`
  max-height: !inherit;
  max-width: 80%;
`;

// const logoThumbnail = {
//   imgSrc: "http://placekitten.com/10/10",
//   margin: {
//     margin: "1px 3px 0px 8px",
//   },
// };

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
  font-size: 28px;
  font-weight: 300;
  padding: 10px;
`;

export const Title: React.FC = (props) => {
  return (
    <TitleContainer>
      <TitleHeader>
        <GridImage src="http://www.thewowstyle.com/wp-content/uploads/2015/01/nature-image.jpg" />
        <GridImage src="/public/Terracotto/logo.JPG" />
        {/* <GridImage src={public/Facetune_08-10-2021-14-36-08.JPG} /> */}
        TERRACOTTO PLANTS
      </TitleHeader>
      <TitleBody>3056 W Diversey Ave</TitleBody>
      <TitleBody>Chicago, IL 60647</TitleBody>
    </TitleContainer>
  );
};
