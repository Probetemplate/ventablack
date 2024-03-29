// src/lib/authGuard.ts
import { auth } from '$app/stores';
import { goto } from '$app/navigation';
import type { Page } from '@sveltejs/kit';

export function authGuard({ page }: { page: Page }) {
  const unsubscribe = auth.subscribe((user: any) => {
    if (!user) {
      goto('/login');
    }
  });

  return {
    destroy() {
      unsubscribe();
    }
  };
}
