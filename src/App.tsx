import Header from "./components/header";
import Layout from "./components/layout";
import Profile from "./components/profile";
import Repositories from "./components/repositories";
import { ResetCSS } from "./global/resetCSS";
import GithubProvider from "./providers/githubProvider";

function App() {
  return (
    <main>
      <GithubProvider>
      <ResetCSS/>
      <Layout>
        <Header/>
        <Profile/>
        <Repositories/>
      </Layout>
      </GithubProvider>
    </main>
  );
}

export default App;