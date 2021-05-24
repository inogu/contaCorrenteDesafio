import * as S from "../styles/styled";
import Layout from "../components/layout/layout";

function Home() {
  return (
    <Layout>
      <S.Container>
        <S.Title>
          Bem-vindo <br /> Banco Gustavo
        </S.Title>
      </S.Container>
    </Layout>
  );
}

export default Home;
