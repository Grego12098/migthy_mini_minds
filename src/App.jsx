import { useState } from 'react';
import './App.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Outlet,
} from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import About from './pages/About';
import AppLayout from './pages/AppLayout';
import Journal from './pages/Journal';
import MoodMap from './pages/MoodMap';
import AddEntry from './pages/AddEntry';
import WelcomePage from './pages/WelcomePage';
import ThanksPage from './pages/ThanksPage';
import ProfilePage from './pages/ProfilePage';
import { AuthProvider } from './auth/AuthProvider';
import SkipLogin from './SkipLogin';
import RequireLogin from './RequireLogin';

function App() {
  const [theme, setTheme] = useState('');

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
  };
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Outlet />}>
        <Route element={<SkipLogin />}>
          <Route
            path="/"
            element={<Login />}
          />
          <Route
            path="signup"
            element={<SignUp />}
          />

          <Route
            path="about"
            element={<About />}
          />
        </Route>

        <Route element={<RequireLogin />}>
          <Route element={<AppLayout handleThemeChange={handleThemeChange} />}>
            <Route
              path="profile"
              element={<ProfilePage />}
            />
            <Route
              path="journal"
              element={<Journal />}
            />
            <Route
              path="moodMap"
              element={<MoodMap />}
            />
            <Route
              path="welcomePage"
              element={<WelcomePage />}
            />
            <Route
              path="addEntry"
              element={<AddEntry />}
            />
            <Route
              path="thanksPage"
              element={<ThanksPage />}
            />
          </Route>
        </Route>
      </Route>
    )
  );

  const queryClient = new QueryClient();

  return (
    <div
      className={`bg-skin-base ${theme} h-screen overflow-y-scroll scrollbar-app overflow-x-auto`}>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;