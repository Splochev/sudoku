import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import PageLayout from "./components/layouts/PageLayout";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./stores/store";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <ToastContainer />
        <BrowserRouter>
          <PageLayout />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
