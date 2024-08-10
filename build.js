import esbuild from 'esbuild';
import { dtsPlugin } from 'esbuild-plugin-d.ts';

esbuild.build({
  entryPoints: ['./src/index.ts'],
  bundle: true,
  platform: 'browser', 
  target: ['es2020'],
  outdir: 'dist/esm',
  sourcemap: false,
  plugins: [dtsPlugin({tsconfig:'tsconfig.json'})],
  tsconfig: './tsconfig.json',
  format: 'esm',
  jsx:'automatic',
  external: ['react', 'react-dom'],  
  jsx: 'automatic',   
  minify: true,
}).catch(() => process.exit(1));


esbuild.build({
  entryPoints: ['./src/index.ts'],
  bundle: true,
  platform: 'browser', 
  target: ['es2020'],
  outdir: 'dist/cjs',
  sourcemap: false,
  plugins: [dtsPlugin({tsconfig:'tsconfig.json'})],
  tsconfig: './tsconfig.json',
  format: 'cjs',
  jsx:'automatic',
  external: ['react', 'react-dom'], 
  jsx: 'automatic',  
  minify: true,
}).catch(() => process.exit(1));
