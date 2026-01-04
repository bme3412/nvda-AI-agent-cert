import { NextResponse } from 'next/server';
import { readdir, stat } from 'fs/promises';
import { join } from 'path';

export interface SummaryItem {
  name: string;
  path: string;
  type: 'file' | 'folder';
  children?: SummaryItem[];
}

async function getDirectoryStructure(dirPath: string, basePath: string = ''): Promise<SummaryItem[]> {
  const items: SummaryItem[] = [];
  const entries = await readdir(dirPath, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = join(dirPath, entry.name);
    const relativePath = join(basePath, entry.name);

    if (entry.isDirectory()) {
      const children = await getDirectoryStructure(fullPath, relativePath);
      items.push({
        name: entry.name,
        path: relativePath,
        type: 'folder',
        children: children.sort((a, b) => {
          // Sort folders first, then files
          if (a.type !== b.type) {
            return a.type === 'folder' ? -1 : 1;
          }
          // Put review.txt at the top of files
          if (a.name.toLowerCase() === 'review.txt') return -1;
          if (b.name.toLowerCase() === 'review.txt') return 1;
          // Sort numbered files numerically (1-, 2-, etc.) before alphabetical
          const aMatch = a.name.match(/^(\d+)-/);
          const bMatch = b.name.match(/^(\d+)-/);
          if (aMatch && bMatch) {
            return parseInt(aMatch[1]) - parseInt(bMatch[1]);
          }
          if (aMatch) return -1;
          if (bMatch) return 1;
          return a.name.localeCompare(b.name);
        }),
      });
    } else if (entry.isFile() && entry.name.endsWith('.txt')) {
      items.push({
        name: entry.name,
        path: relativePath,
        type: 'file',
      });
    }
  }

  return items;
}

export async function GET() {
  try {
    const summariesPath = join(process.cwd(), 'summaries');
    const structure = await getDirectoryStructure(summariesPath);
    
    // Sort: folders first, then files
    // Put review.txt at the top of files in each folder
    const sorted = structure.sort((a, b) => {
      if (a.type !== b.type) {
        return a.type === 'folder' ? -1 : 1;
      }
      // Put review.txt at the top of files
      if (a.name.toLowerCase() === 'review.txt') return -1;
      if (b.name.toLowerCase() === 'review.txt') return 1;
      return a.name.localeCompare(b.name);
    });

    return NextResponse.json(sorted);
  } catch (error) {
    console.error('Error reading summaries directory:', error);
    return NextResponse.json(
      { error: 'Failed to read summaries directory' },
      { status: 500 }
    );
  }
}

