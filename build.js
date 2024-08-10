import esbuild from 'esbuild';
import { dtsPlugin } from 'esbuild-plugin-d.ts';

// Build configuration for esbuild
esbuild.build({
  entryPoints: ['./src/index.ts'],
  bundle: true,
  platform: 'node',
  target: ['node14'],
  outdir: 'dist',
  sourcemap: false,
  plugins: [dtsPlugin()],
  minify: true,
  tsconfig: './tsconfig.json',
  format: 'esm',
  loader: {
    '.ts': 'ts',
    '.tsx': 'tsx'  // Handle JSX/TSX files
  }
}).catch(() => process.exit(1));
