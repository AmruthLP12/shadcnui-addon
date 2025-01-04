import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export const runtime = 'nodejs';

// Map component names to their file paths
const componentMap: { [key: string]: string } = {
  'AnimatedProgressBar': 'app/components/AnimatedProgressBar/AnimatedProgressBar.tsx',
  'AnimatedProgressBarDemo': 'app/components/AnimatedProgressBar/AnimatedProgressBarDemo.tsx',
  'ProgressBarWithControls': 'app/components/AnimatedProgressBar/ProgressBarWithControls.tsx',
  'CustomColorsExample': 'app/components/AnimatedProgressBar/CustomColorsExample.tsx',
  'WithoutAnimationExample': 'app/components/AnimatedProgressBar/WithoutAnimationExample.tsx',
};

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const component = searchParams.get('component');

  if (!component || !(component in componentMap)) {
    return NextResponse.json({ error: 'Invalid component name' }, { status: 400 });
  }

  const relativeFilePath = componentMap[component];

  try {
    const buildPath = path.join(process.cwd(), '.next', 'server', relativeFilePath);
    const devPath = path.join(process.cwd(), relativeFilePath);

    // Check environment and read appropriate path
    const isDev = process.env.NODE_ENV === 'development' || process.env.VERCEL_ENV === 'preview';
    const fullPath = isDev ? devPath : buildPath;

    const code = await fs.readFile(fullPath, 'utf-8');
    return new NextResponse(code, { headers: { 'Content-Type': 'text/plain' } });
  } catch (error) {
    console.error('Error fetching component code:', error);
    return NextResponse.json({ error: 'Failed to fetch component code' }, { status: 500 });
  }
}
