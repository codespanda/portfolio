import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Skeleton } from '@/components/ui/skeleton';

// Home is the primary route; the 404 page is code-split so it never
// weighs down the initial bundle.
import Home from '@/pages/Home';
const NotFound = lazy(() => import('@/pages/NotFound'));

function PageFallback() {
  return (
    <div className="flex min-h-[100svh] items-center justify-center p-6">
      <Skeleton className="h-40 w-full max-w-md" />
    </div>
  );
}

export default function App() {
  return (
    <Suspense fallback={<PageFallback />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}
