import "./App.css";
// import { MuiSelect } from "./components/muiSelect";
import { MuiTextField } from "./components/muiTextfield";
// import { MuiButton } from "./components/muiButton";
// import { MuiTypograraphy } from "./components/muiTypography";
import { MuiRadioButton } from "./components/muiRadiobutton";
import { MuiCheckbox } from "./components/muiCheckbox";

function App() {
  return (
    <div className="App">
      <h1>This is a new React App</h1>
      {/* <MuiTypograraphy /> */}
      {/* <MuiButton /> */}
      <MuiTextField />
      {/* <MuiSelect /> */}
      <MuiRadioButton />
      <MuiCheckbox />
    </div>
  );
}

export default App;
