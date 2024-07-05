import "./App.css";
import FormWithReactHookForm from "./components/form-with-react-hook-form";
import FormWithoutReactHookForm from "./components/form-without-react-hook-form";


function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <FormWithReactHookForm />
      <FormWithoutReactHookForm />
    </main>
  );
}

export default App;
