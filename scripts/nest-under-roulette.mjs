import fs from 'fs';
import path from 'path';

const distDir = path.resolve('dist');
const siteDir = path.resolve('site');
const targetDir = path.join(siteDir, 'roulette');

fs.rmSync(siteDir, { recursive: true, force: true });
fs.mkdirSync(targetDir, { recursive: true });
fs.cpSync(distDir, targetDir, { recursive: true });

console.log(`Moved build output from ${distDir} to ${targetDir}`);
