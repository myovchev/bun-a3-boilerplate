import { writeFile, copyFile, unlink } from 'fs/promises';

const filePath = './data/for-copy.txt';
const copyPath = './data/copy-test.txt';

try {
  await unlink(filePath);
  await unlink(copyPath);
} catch(e) {}

await writeFile(filePath, `The content`, 'utf8');

console.time('1000 times')
for (const i of [...Array(10).keys()]) {
  await copyFile(filePath, copyPath);
  // Delete it because Bun doesn't like to override plus 
  // it becomes more intense file operation
  await unlink(copyPath);
}
console.timeEnd('1000 times');
