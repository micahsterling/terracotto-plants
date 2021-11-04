import { NavigationComponent } from "../../shared/Navigation";
import { Body } from "./containers/Body";
import { PageContainer, Title } from "./containers/Title";

export const HomeScreen = () => {
  return (
    <PageContainer>
      <NavigationComponent />

      <Title></Title>

      <Body></Body>
    </PageContainer>
  );
};
