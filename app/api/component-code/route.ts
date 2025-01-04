import { NextRequest, NextResponse } from 'next/server';
import { fetchComponentCode } from '@/utils/fetch-component-code';

export const runtime = 'nodejs'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const path = searchParams.get('path');

  if (!path) {
    return NextResponse.json({ error: 'No file path provided' }, { status: 400 });
  }

  try {
    const code = await fetchComponentCode(path);
    return new NextResponse(code, {
      headers: { 'Content-Type': 'text/plain' },
    });
  } catch (error) {
    console.error('Error fetching component code:', error);
    return NextResponse.json({ error: `Failed to fetch component code: ${error}` }, { status: 500 });
  }
}

