import '@/App.css'
import { useRoutes } from 'react-router-dom'
import { Suspense } from 'react';
import routes from '@/router/index'
function App() {
  const element = useRoutes(routes);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {element}
    </Suspense>
  );
}

export default App
