import { defineConfig, loadEnv } from 'vite';  // Add loadEnv import
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {  // Convert to function format
  const env = loadEnv(mode, process.cwd(), '');  // Load environment variables
  return {
    plugins: [react()],
    define: {
      'process.env': JSON.stringify(env)  // Add this section
    }
  };
});
