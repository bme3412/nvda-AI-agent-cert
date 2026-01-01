import { NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import { join } from 'path';
import { existsSync } from 'fs';

export async function GET(
  request: Request,
  { params }: { params: { path: string[] } }
) {
  try {
    // Join the path array back into a file path
    const filePath = params.path.join('/');
    
    // Security: prevent path traversal
    if (filePath.includes('..') || filePath.startsWith('/')) {
      return NextResponse.json(
        { error: 'Invalid file path' },
        { status: 400 }
      );
    }

    const fullPath = join(process.cwd(), 'summaries', filePath);
    
    // Verify file exists and is within summaries directory
    if (!existsSync(fullPath)) {
      return NextResponse.json(
        { error: 'File not found' },
        { status: 404 }
      );
    }

    // Only allow .txt files
    if (!filePath.endsWith('.txt')) {
      return NextResponse.json(
        { error: 'Only text files are allowed' },
        { status: 400 }
      );
    }

    const content = await readFile(fullPath, 'utf-8');
    
    return NextResponse.json({ content });
  } catch (error) {
    console.error('Error reading file:', error);
    return NextResponse.json(
      { error: 'Failed to read file' },
      { status: 500 }
    );
  }
}

