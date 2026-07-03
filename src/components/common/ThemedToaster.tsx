import { Toaster } from 'sonner';
import { useTheme } from '@/hooks/useTheme';

/** Sonner toaster wired to the app's current theme. */
export function ThemedToaster() {
  const { theme } = useTheme();
  return <Toaster position="bottom-right" theme={theme} richColors closeButton />;
}
