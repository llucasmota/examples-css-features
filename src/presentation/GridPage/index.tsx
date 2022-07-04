import { ContainerGridBlog, ContainerGridTwo } from './styles';

export const GridPage: React.FC = () => {
  return (
    <>
      <ContainerGridBlog>
        <header>Header</header>
        <main>MAIN</main>
        <aside>ASIDE</aside>
        <footer>FOOTER</footer>
      </ContainerGridBlog>
      <ContainerGridTwo>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </ContainerGridTwo>
    </>
  );
};
