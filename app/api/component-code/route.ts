import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export const runtime = 'nodejs'

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
    // Return the error message for debugging
    return NextResponse.json({ error: `Failed to read file: ${error}` }, { status: 500 });
  }
}

