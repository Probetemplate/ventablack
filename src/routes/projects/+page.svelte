// src/routes/projects/+page.svelte
<script context="module" lang="ts">
  import { authGuard } from '$lib/authGuard';
  
  export const load = async () => ({
    // Import your page component dynamically
    default: (await import('./PageComponent.svelte')).default,
    // Apply authGuard to the page
    ...authGuard
  });
</script>
