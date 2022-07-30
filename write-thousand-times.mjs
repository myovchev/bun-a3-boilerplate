import { writeFile, unlink } from 'fs/promises';

const filePath = './data/write-test.txt';

try {
  await unlink(filePath)
} catch(e) {}

console.time('1000 times')
for (const i of [...Array(1000).keys()]) {
  await writeFile(filePath, `Write content ${i}`, 'utf8');
}
console.timeEnd('1000 times');
