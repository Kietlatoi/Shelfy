import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { FullScreenLoading } from './components/LoadingStates';
import { Layout } from './components/Layout';

const LoginPage = lazy(() => import('./pages/login'));
const DashboardPage = lazy(() => import('./pages/dashboard'));
const WardrobePage = lazy(() => import('./pages/wardrobe'));
const AddItemPage = lazy(() => import('./pages/add-item'));
const OutfitSuggestionsPage = lazy(() => import('./pages/suggestions'));
const VirtualTryOnPage = lazy(() => import('./pages/virtual-try-on'));
const PremiumPage = lazy(() => import('./pages/premium'));
const ProfilePage = lazy(() => import('./pages/profile'));

function App() {
  return (
    <Router>
      <Suspense fallback={<FullScreenLoading />}>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<Layout><DashboardPage /></Layout>} />
          <Route path="/wardrobe" element={<Layout><WardrobePage /></Layout>} />
          <Route path="/add-item" element={<Layout><AddItemPage /></Layout>} />
          <Route path="/ai-outfit" element={<Navigate to="/dashboard" replace />} />
          <Route path="/suggestions" element={<Layout><OutfitSuggestionsPage /></Layout>} />
          <Route path="/virtual-try-on" element={<Layout><VirtualTryOnPage /></Layout>} />
          <Route path="/profile" element={<Layout><ProfilePage /></Layout>} />
          <Route path="/premium" element={<Layout><PremiumPage /></Layout>} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
