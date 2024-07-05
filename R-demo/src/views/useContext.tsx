import { createContext, useContext, useState, ReactNode } from "react";
import "../App.css";
const ThemeContext = createContext<
  | { theme: string; setTheme: React.Dispatch<React.SetStateAction<string>> }
  | any
>(null);

export default function Context() {
  const [theme, setTheme] = useState<string>("light");
  return (
    // <ThemeContext.Provider value={{ theme, setTheme }}>
    <MyProviders theme={theme} setTheme={setTheme}>
      <Form />
      <label>
        <input
          type="checkbox"
          checked={theme === "dark"}
          onChange={(e) => {
            setTheme(e.target.checked ? "dark" : "light");
          }}
        />
        Use dark mode
      </label>
    </MyProviders>
    // </ThemeContext.Provider>
  );
}

// 封装Provider
interface MyProvidersProps {
  children: ReactNode | ReactNode[];
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}
function MyProviders({ children, theme, setTheme }: MyProvidersProps) {
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function Form() {
  return (
    <Panel title="Welcome">
      <Button>dark</Button>
      <Button>light</Button>
    </Panel>
  );
}

function Panel({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const { theme } = useContext(ThemeContext);
  const className = "panel-" + theme;
  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  );
}

function Button({ children }: { children: React.ReactNode }) {
  const { theme, setTheme } = useContext(ThemeContext);
  const className = "button-" + theme;
  return (
    <button onClick={() => setTheme(children)} className={className}>
      {}
      {children}
    </button>
  );
}
