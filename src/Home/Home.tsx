// import { NavigationComponent } from "../../shared/Navigation";
// import { Body } from "./containers/Body";
import NavBar from "../Components/NavBar";
import { PageContainer, Title } from "./Containers/Title";

export const HomeScreen = () => {
  return (
    <PageContainer>
      <NavBar />

      <Title></Title>

      {/* <Body></Body> */}
    </PageContainer>
  );
};
