import { writeFile, copyFile, unlink } from 'fs/promises';

const filePath = './data/for-copy.txt';
const copyPath = './data/copy-test.txt';
const arr = [...Array(1000).keys()];

async function cleanup() {
  try {
    await unlink(filePath);
  } catch(e) {}

  try {
    for (const i of arr) {
      await unlink(`${copyPath}-${i}`);
    }
  } catch(e) {}
}

await cleanup();
await writeFile(filePath, `The content`, 'utf8');

console.time('1000 times')
for (const i of arr) {
  await copyFile(filePath, `${copyPath}-${i}`);
}
console.timeEnd('1000 times');

await cleanup();
