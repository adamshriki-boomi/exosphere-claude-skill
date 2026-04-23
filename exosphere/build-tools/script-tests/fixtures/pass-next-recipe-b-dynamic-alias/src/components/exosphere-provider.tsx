'use client';

import { useEffect } from 'react';

export function ExosphereProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Dynamic import inside a client-only effect — icon.js only touches
    // window / customElements after hydration.
    import('@boomi/exosphere/dist/icon.js');
  }, []);
  return <>{children}</>;
}
