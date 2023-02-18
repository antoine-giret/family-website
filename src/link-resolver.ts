import type { FilledLinkToDocumentField } from '@prismicio/types';

export function linkResolver({ type }: FilledLinkToDocumentField): string {
  if (type === 'home') return '/';

  return '/';
}
