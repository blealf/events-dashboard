import SideNav from './components/Nav/SideNav';
import MobileNav from './components/Nav/MobileNav';
import { ThemeProvider } from './Context/ThemeProvider';
import { ModalProvider } from './Context/ModalProvider';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {

  /* The `mainClassNames` constant is a string that contains a combination of CSS classes based on the
  current theme state. It uses template literals to dynamically include the `theme` state variable
  along with other CSS classes. */
  const mainClassNames = `font-inter bg-main-light dark:bg-main-alt-dark m-0 p-0 w-full min-h-[100vh]`

  return (
    <main className={`${mainClassNames}`}>
      <ThemeProvider>
        <MobileNav />
        <ModalProvider>
            <div className="w-full relative flex flex-col md:flex-row justify-start items-start">
              <SideNav />
              <Dashboard />
            </div>
        </ModalProvider>
      </ThemeProvider>
    </main>
  )
}

export default App
