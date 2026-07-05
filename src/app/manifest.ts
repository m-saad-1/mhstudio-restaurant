import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'MhStudio',
    short_name: 'MhStudio',
    description: 'Premium websites for growing local businesses.',
    start_url: '/',
    display: 'standalone',
    background_color: '#09090b',
    theme_color: '#f59e0b',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
