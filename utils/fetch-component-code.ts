import { readFile } from 'fs/promises';
import path from 'path';

export async function fetchComponentCode(componentPath: string): Promise<string> {
  try {
    const fullPath = path.join(process.cwd(), componentPath);
    const content = await readFile(fullPath, 'utf-8');
    return content;
  } catch (error) {
    console.error(`Error reading file ${componentPath}:`, error);
    return `Failed to load code: ${error}`;
  }
}

