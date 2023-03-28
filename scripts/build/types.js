import fs from 'node:fs';
import path from 'node:path';

const rootDir = './src';
const searchPattern = /\.types\.ts$/;
const outputFile = './dist/index.d.ts';

function findFiles(dir) {
  const files = fs.readdirSync(dir);
  let filesList = [];

  for (const file of files) {
    const filePath = path.join(dir, file);

    if (fs.statSync(filePath).isDirectory()) {
      // Recursively search for files in subdirectories
      filesList = filesList.concat(findFiles(filePath));
    } else if (searchPattern.test(file)) {
      filesList.push(filePath);
    }
  }

  return filesList;
}

function transformFileContent(content) {
  // return content.replace(/(export type) (\w+) (=) (.*)/, (...params) => {
  //   const name = params[2].charAt(0).toLowerCase() + params[2].slice(1);
  //   const type = params[4];
  //   return `export declare const ${name}: ${type}`;
  // });
  return content
    .replace(/(export type)/gm, 'type')
    .replace(/(declare const)/gm, 'export declare const');
}

const filesList = findFiles(rootDir);
const transformedContent = filesList
  .map((file) => fs.readFileSync(file, 'utf-8'))
  .map(transformFileContent)
  .join('\n\n');

fs.writeFileSync(outputFile, transformedContent);
console.log(`Generated ${outputFile}`);

// console.log(`export type HasSameLengthOf<
//   T = string
//    | unknown[]
//    | Map<unknown, unknown>
//    | Set<unknown>
// > = (other: T) => (value: T) => T;
//
// declare const hasSameLengthOf: HasSameLengthOf;`
//   .replace(/(export type)/gm, 'type'));;
