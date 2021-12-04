const { default: About } = require("./components/About/About");
const { default: Intro } = require("./components/intro/Intro");

const App = () => {
  return (
    <div>
      <Intro />
      <About />
    </div>
  );
};

export default App;
