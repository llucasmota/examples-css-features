import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;


}

html {
  scroll-snap-type: both mandatory;


}
body, ul, li, p {
  list-style: none;
  font-size: 1.2rem;
  font-family: Arial;
}

a {
  text-decoration: none;
}

body {
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.text};
  font: 400 16px 'Montserrat', sans-serif;
   width: 100vw;
   height: 100vh;

}
`;
