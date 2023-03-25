import fs from 'node:fs';
import path from 'node:path';

const rootDir = './src';
const searchPattern = /\.types\.ts$/;

function findAndCopyFiles(dir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);

    if (fs.statSync(filePath).isDirectory()) {
      // Recursively search for files in subdirectories
      findAndCopyFiles(filePath);
    } else if (searchPattern.test(file)) {
      // Copy file and rename to .d.ts
      const newFileName = file.replace(searchPattern, '.d.ts');
      const destPath = path.join('dist/types', path.relative(rootDir, dir), newFileName);
      const destDir = path.dirname(destPath);

      if (!fs.existsSync(destDir)) {
        fs.mkdirSync(destDir, { recursive: true });
      }

      fs.copyFileSync(filePath, destPath);
    }
  }
}

findAndCopyFiles(rootDir);

const typesDir = './dist/types';

function findDTsFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    console.log(file);
    if (fs.statSync(filePath).isDirectory()) {
      // Recursively search for files in subdirectories
      findDTsFiles(filePath, fileList);
    } else if (file.match(/.d.ts/) && !file.match(/index.d.ts/)) {
      console.log(file);
      fileList.push(filePath);
    }
  }

  return fileList;
}

const files = findDTsFiles(typesDir);

console.log(files);

const indexContent = files.map(file => {
  const relativePath = path.relative(typesDir, file);
  const basename = path.basename(file, '.d.ts');
  const modulePath = `./${path.join(path.dirname(relativePath), basename)}`;
  return `export * from '${modulePath}';`;
}).join('\n');

fs.writeFileSync(path.join(typesDir, 'index.d.ts'), indexContent);

