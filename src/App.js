import "./App.css";
import Registration from "./Components/Registration/Registration";
import Test from "./Components/Test";
import { NewHeader } from "./Components/NewHeader";

function App() {
  return (
    <div>
      <NewHeader />
      <Registration />

      <Test />
    </div>
  );
}

export default App;
