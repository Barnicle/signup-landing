import Meta from "./Meta";
import Form from "./Form";
import GlobalStyle from "./styles/GlobalStyle";
import styled, { ThemeProvider } from "styled-components";
import theme from "./styles/Theme";
const StyledPage = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
  place-items: center;
  padding: 10px;
  padding-bottom: 100px;
  background: ${(props) => props.theme.red};
  background-image: url("/bg-intro-desktop.png");
  object-fit: cover;
  width: 100%;
  min-height: 100vh;
  .form__wrapper {
    display: flex;
    width: 100%;
    flex-flow: column;
    align-items: center;
  }
  @media (max-width: 425px) {
    background-image: url("/bg-intro-mobile.png");
  }
`;
const Page = () => (
  <React.Fragment>
    <GlobalStyle />
    <Meta />
    <ThemeProvider theme={theme}>
      <StyledPage>
        <StyledHeader>
          <h1>Learn to code by watching others</h1>
          <p>
            See how expirienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.
          </p>
        </StyledHeader>
        <div className="form__wrapper">
          <StyledOffer>
            <span>Try it free 7 days</span> then $20/mo. thereafter
          </StyledOffer>
          <Form />
        </div>
      </StyledPage>
    </ThemeProvider>
  </React.Fragment>
);

export default Page;

const StyledOffer = styled.p`
  padding: 15px;
  border-radius: 5px;
  text-align: center;
  font-size: 1.2rem;
  box-shadow: 0 6px rgba(0, 0, 0, 0.2);
  background: ${(props) => props.theme.blue};
  color: white;
  width: 70%;
  font-weight: 400;
  span {
    font-weight: 700;
  }
  @media (min-width: 650px) and (max-width: 730px) {
    width: 80%;
  }
`;

const StyledHeader = styled.div`
  text-align: center;
  color: white;
  width: 80%;
`;
