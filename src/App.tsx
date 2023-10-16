import Remaid from "./Remaid";
import Header from "./Header";
import Footer from "./Footer";
import { MermaidConfig } from "mermaid";

export default function App() {
  const MERMAID_APP_CONFIG: Partial<MermaidConfig> = {
    theme: "dark",
    fontFamily: "system-ui",
    themeVariables: {
      quadrantPointFill: "#1971c2",
      quadrant1Fill: "transparent",
      quadrant2Fill: "transparent",
      quadrant3Fill: "transparent",
      quadrant4Fill: "transparent",
    },
  };

  return (
    <>
      <Header />
      <div className="flex flex-col gap-8 items-center w-full my-8 px-4 sm:px-0">
        <div className="w-full sm:w-1/2 max-w-lg">
          <Remaid
            id="languages"
            className="flex justify-center"
            graph="languages.mmd"
            loading={
              <div className="aspect-square max-w-lg bg-gray-600 rounded-md animate-pulse" />
            }
            config={MERMAID_APP_CONFIG}
          />
          <p className="italic text-sm">* : Non-programming language</p>
        </div>
        <hr className="w-full sm:w-1/2 max-w-lg my-8" />
        <Remaid
          id="technologies"
          className="w-full sm:w-1/2 flex justify-center"
          graph="technologies.mmd"
          loading={
            <div className="aspect-square max-w-lg bg-gray-600 rounded-md animate-pulse" />
          }
          config={MERMAID_APP_CONFIG}
        />
        <hr className="w-full sm:w-1/2 max-w-lg my-8" />
        <Remaid
          id="tools-services"
          className="w-full sm:w-1/2 flex justify-center"
          graph="tools-services.mmd"
          loading={
            <div className="aspect-square max-w-lg bg-gray-600 rounded-md animate-pulse" />
          }
          config={MERMAID_APP_CONFIG}
        />
      </div>
      <Footer />
    </>
  );
}
