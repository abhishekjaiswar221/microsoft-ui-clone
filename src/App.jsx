import HeaderNavigation from "./components/layout/HeaderNavigation";
import Button from "./components/ui/Button";

const App = () => {
  return (
    <>
      <HeaderNavigation />
      <Button btnText={"Learn more"} />
      {/* <h2 className="font-mono text-xs text-green-600 bg-zinc-600 md-mobile:text-4xl lg-mobile:text-5xl tablet:text-6xl laptop:text-7xl lg-laptop:text-8xl 4k-monitor:text-9xl">
        Hello
      </h2> */}
    </>
  );
};

export default App;
