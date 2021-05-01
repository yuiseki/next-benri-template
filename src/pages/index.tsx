import tw, { css } from "twin.macro";

const container = css`
  ${tw`mx-auto m-4 p-4 rounded bg-gray-400`}
`;

export const Home = (): JSX.Element => (
  <div css={container}>
    <main>
      <h1 tw="text-5xl font-bold">
        貧困可視化プロトタイプ
      </h1>
    </main>
  </div>
)

export default Home
