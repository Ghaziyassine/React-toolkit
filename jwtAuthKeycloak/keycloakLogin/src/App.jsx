import PrivatePage from './components/PrivatePage';
import PublicPage from './components/PublicPage';
import useAuth from './hooks/useAuth';

function App() {
  const [isLogin,token ]= useAuth();
  return isLogin ? (
    <PrivatePage token={token} />
  ) : (
    <PublicPage />
  )
}

export default App
