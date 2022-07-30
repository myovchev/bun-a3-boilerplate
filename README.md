# Apostrophe 3 and Bun

## Get started

This repo is a clone of ApostropheCMS boilerplate (for testing large package installations) https://github.com/apostrophecms/a3-boilerplate with added:

- basic benchmarking scripts including such that are measuring performance of `bun` vs `npm` package managing
- varios JS Framework apps created by or wired with bun
- TS configuration and script to illustrate the Bun's native support on that front

Install `bun` - https://bun.sh/

## Benchmark bash scripts

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

## Javascript/Typescript sources

These are used for benchmarking and for exploring the most notable Bun features. The details on what they do are available in the Discussion post (see below).

- `bun-copy-content-thousand-times.mjs`
- `node-copy-content-thousand-times.mjs`
- `copy-thousand-times.mjs`
- `copy-thousand-times-2.mjs`
- `write-thousand-times.mjs`
- `ts/copy-thousand-times.mts`
- `apps/nextjs`
- `apps/nextjs-demo`
- `apps/reactjs`
- `apps/reactjs-todo`

## Detailed information

https://github.com/myovchev/bun-a3-boilerplate/discussions/1
