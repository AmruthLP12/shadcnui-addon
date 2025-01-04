import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export const runtime = 'nodejs';

// Map component names to their file paths
const componentMap: { [key: string]: string } = {
  // ? AnimatedProgressBar
  'AnimatedProgressBar': 'app/components/AnimatedProgressBar/AnimatedProgressBar.tsx',
  'AnimatedProgressBarDemo': 'app/components/AnimatedProgressBar/AnimatedProgressBarDemo.tsx',
  'ProgressBarWithControls': 'app/components/AnimatedProgressBar/ProgressBarWithControls.tsx',
  'CustomColorsExample': 'app/components/AnimatedProgressBar/CustomColorsExample.tsx',
  'WithoutAnimationExample': 'app/components/AnimatedProgressBar/WithoutAnimationExample.tsx',

  // ? BackgroundOverlayCard
  'BackgroundOverlayCard': "app/components/BackgroundOverlayCard/BackgroundOverlayCard.tsx",
  'BackgroundOverlayCardDemo': "app/components/BackgroundOverlayCard/BackgroundOverlayCardDemo.tsx",
  'HoverEffectExample': "app/components/BackgroundOverlayCard/HoverEffectExample.tsx",
  'FullWidthCard': "app/components/BackgroundOverlayCard/FullWidthCard.tsx",
  'GalleryCard': "app/components/BackgroundOverlayCard/GalleryCard.tsx",
  'MinimalStyle': "app/components/BackgroundOverlayCard/MinimalStyle.tsx",
  'DarkMode': "app/components/BackgroundOverlayCard/DarkMode.tsx",

  // ? InvoiceTable
  'InvoiceTable': "app/components/InvoiceTable/InvoiceTable.tsx",
  'InvoiceTableDemo': "app/components/InvoiceTable/InvoiceTableDemo.tsx",
  'BasicInvoiceTable': "app/components/InvoiceTable/BasicInvoiceTable.tsx",
  'AdvancedInvoiceTable': "app/components/InvoiceTable/AdvancedInvoiceTable.tsx",
};

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const component = searchParams.get('component');

  if (!component || !(component in componentMap)) {
    return NextResponse.json({ error: 'Invalid component name' }, { status: 400 });
  }

  const relativeFilePath = componentMap[component];
  const fullPath = path.join(process.cwd(), relativeFilePath);

  try {
    console.log('Fetching file from path:', fullPath);
    const code = await fs.readFile(fullPath, 'utf-8');
    return new NextResponse(code, { headers: { 'Content-Type': 'text/plain' } });
  } catch (error) {
    console.error('Error fetching component code:', error, 'Path:', fullPath);
    return NextResponse.json({ error: 'Failed to fetch component code' }, { status: 500 });
  }
}
