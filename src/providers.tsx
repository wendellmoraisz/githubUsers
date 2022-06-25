import GithubProvider from "./providers/githubProvider";
import { ResetCSS } from "./global/resetCSS";
import App from "./App";

function Providers() {

    return (
        <main>
            <GithubProvider>
                <ResetCSS />
                <App />
            </GithubProvider>
        </main>
    );
}

export default Providers;