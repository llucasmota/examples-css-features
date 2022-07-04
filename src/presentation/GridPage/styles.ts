import styled from 'styled-components';

export const ContainerGridBlog = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: 20vh 70vh 10vh;
  grid-template-areas: 'header header' 'main aside' 'footer footer';

  color: burlywood;
  text-align: center;
  header {
    background-color: yellow;
    /* grid-column-start: 1;
    grid-column-end: 3; */
    /* short */
    grid-area: header;
  }
  main {
    background-color: blue;
    grid-area: main;
  }
  aside {
    background-color: green;
    grid-area: aside;
  }
  footer {
    background-color: red;
    grid-area: footer;
  }
`;

export const ContainerGridTwo = styled.div`
  background: black;
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  justify-items: center;
  align-items: center;
  grid-gap: 5px;
  & > div {
    background-color: #7159c1;
    width: 50%;
    height: 50%;
  }
  /* & > div:first-of-type {
    justify-self: center;
  } */
`;
