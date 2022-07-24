# Apostrophe 3 and Bun

## Get started

This repo is a clone of https://github.com/apostrophecms/a3-boilerplate with added benchmark installtion scripts for `bun` and `npm`.

Install `bun` - https://bun.sh/

## Benchmark scripts

```bash
# run once npm install with no cache
./npm-no-cache

# run once bun install with no cache
./bun-no-cache

# run once npm install with cache
./npm-cache

# run once bun install with cache
./bun-cache

# run any of the above scripts in a loop
for i in {1..5}; do ./bun-cache; done
```

## Detailed information

https://github.com/myovchev/bun-a3-boilerplate/discussions/1
