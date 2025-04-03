import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import AuthMiddleware from './Middleware.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route element={<AuthMiddleware />}>
      <Route path="/" element={<Home />} />
      </Route>
      <Route path="/login" element={<App />} />
    </Routes>
  </BrowserRouter>
  </StrictMode>
);
