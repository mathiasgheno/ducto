import esbuild from 'esbuild';

await esbuild.build({
  entryPoints: ['./src/index.js'],
  outfile: 'dist/index.cjs',
  format: 'cjs',
  bundle: true,
  platform: 'node',
  // minify: true,
});

await esbuild.build({
  entryPoints: ['./src/index.js'],
  outfile: 'dist/index.mjs',
  format: 'esm',
  platform: 'node',
  bundle: true,
});

console.log('build finished!');
