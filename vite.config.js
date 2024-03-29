import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
  plugins: [sveltekit()],
  kit: {
    // Other configuration options...
    vite: {
      // Other Vite options...
      optimizeDeps: {
        // Other options...
        include: ['firebase/auth'] // Include Firebase auth module in optimization
      }
    }
  }
});
