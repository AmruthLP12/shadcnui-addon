import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export const runtime = 'nodejs' // Add this line to use the Node.js runtime

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const filePath = searchParams.get('path');

  if (!filePath) {
    return NextResponse.json({ error: 'No file path provided' }, { status: 400 });
  }

  const fullPath = path.join(process.cwd(), filePath);

  try {
    const fileContents = await fs.readFile(fullPath, 'utf8');
    return new NextResponse(fileContents, {
      headers: { 'Content-Type': 'text/plain' },
    });
  } catch (error) {
    console.error('Error reading file:', error);
    return NextResponse.json({ error: 'Failed to read file' }, { status: 500 });
  }
}

