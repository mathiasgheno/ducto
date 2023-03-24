import esbuild from 'esbuild';

async function build(format) {
  const output = `dist/bundle.${format}.js`;
  await esbuild.build({
    entryPoints: ['src/index.js'],
    outfile: output,
    format: format,
    target: 'es2020',
    minify: true,
    sourcemap: true,
    bundle: true,
  });
}

async function run() {
  await build('cjs');
  await build('esm');
  await build('iife');
}

run();


console.log('build finished!');
