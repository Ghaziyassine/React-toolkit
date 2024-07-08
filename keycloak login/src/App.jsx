import PrivatePage from './components/PrivatePage';
import PublicPage from './components/PublicPage';
import useAuth from './hooks/useAuth';

function App() {
  const isLogin = useAuth();
  return isLogin ? (
    <PrivatePage />
  ) : (
    <PublicPage />
  )
}

export default App
