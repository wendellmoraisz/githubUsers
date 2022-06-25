import Layout from "./components/layout";
import Profile from "./components/profile";
import Repositories from "./components/repositories";

function App() {
  return (
      <Layout>
        <Profile/>
        <Repositories/>
      </Layout>
  );
}

export default App;