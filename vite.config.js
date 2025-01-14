import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
// import { visualizer } from 'rollup-plugin-visualizer';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), // React plugin with SWC for faster builds
    // visualizer({
    //   open: true, // Automatically open bundle analysis report in the browser
    //   filename: 'bundle-analysis.html', // Output file for analysis report
    // }),
  ],
  build: {
    // Adjust chunk size warning limit
    chunkSizeWarningLimit: 3000, // Increase limit to 1000 KB

    // Rollup options for chunk splitting
    rollupOptions: {
      output: {
        // Manual chunking to split dependencies and reduce large chunk sizes
        manualChunks: {
          vendor: ['react', 'react-dom'], // Split React and ReactDOM into a separate chunk
        },
      },
    },
  },
  // optimizeDeps: {
  //   // Pre-bundling dependencies to improve performance
  //   include: ['lodash-es'], // Example of explicitly included dependencies
  // },
  server: {
    // Customize development server options
    port: 465, // Port for dev server
    open: true, // Automatically open the app in the browser
  },
});
