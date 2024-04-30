import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// This enables absolute imports like `import { useOidc } from "oidc";`
// instead of `import { useOidc } from "../../oidc";`
import tsconfigPaths from "vite-tsconfig-paths";


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
})
