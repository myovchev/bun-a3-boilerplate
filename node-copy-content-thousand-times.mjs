import { writeFile, readFile, unlink } from 'fs/promises';

const filePath = './data/for-copy.txt';
const copyPath = './data/copy-test.txt';

try {
  await unlink(filePath);
  await unlink(copyPath);
} catch (e) { }

await writeFile(filePath, `The content`, 'utf8');

console.time('1000 times')
for (const i of [...Array(1000).keys()]) {
  const content = await readFile(filePath, 'utf-8');
  await writeFile(copyPath, content);
}
console.timeEnd('1000 times');

