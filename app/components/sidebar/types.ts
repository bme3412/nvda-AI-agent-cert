export interface SummaryItem {
  name: string;
  path: string;
  type: 'file' | 'folder';
  children?: SummaryItem[];
}
