import * as S from "./style";
import Head from "next/head";

function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Weather App</title>
        <meta
          name="description"
          content="Weather app is an app that let you see weather forecast weekly."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <S.ContentWrapper>{children}</S.ContentWrapper>
    </div>
  );
}

export default Layout;
