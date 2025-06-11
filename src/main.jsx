import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import { OramaCloud } from "@oramacloud/react-client"
import { ThemeProvider } from "./components/theme-provider.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <OramaCloud
      endpoint="https://cloud.orama.run/v1/indexes/ps1-pal-xoine7"
      apiKey="lyJKdJUUWjIhQWg9AkiwRpRoaDpW3QL4"
    >
      <App />
    </OramaCloud>
  </ThemeProvider>
)
