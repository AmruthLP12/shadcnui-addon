import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export const runtime = 'nodejs';

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

  const filePath = componentMap[component];

  try {
    let code: string;
    const fullPath = path.join(process.cwd(), filePath);

    if (process.env.NODE_ENV === 'development' || process.env.VERCEL_ENV === 'preview') {
      // Local development or Vercel preview: Read from file system
      code = await fs.readFile(fullPath, 'utf-8');
    } else {
      // Production: Read from a pre-built file
      const buildPath = path.join(process.cwd(), '.next', 'server', 'app', filePath);
      code = await fs.readFile(buildPath, 'utf-8');
    }

    return new NextResponse(code, {
      headers: { 'Content-Type': 'text/plain' },
    });
  } catch (error) {
    console.error('Error fetching component code:', error);
    return NextResponse.json({ error: 'Failed to fetch component code' }, { status: 500 });
  }
}

