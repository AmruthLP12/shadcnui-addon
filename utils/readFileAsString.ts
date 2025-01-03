// utils/readFileAsString.ts
import fs from 'fs';
import path from 'path';

export const readFileAsString = (relativePath: string): string => {
  const filePath = path.join(process.cwd(), relativePath);
  return fs.readFileSync(filePath, 'utf-8');
};
