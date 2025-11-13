import './globals.css';

export const metadata = {
  title: 'A Peaceful Sunny Day ? Harm and Ahad',
  description: 'Cinematic, realistic scene of a sunny day with birds and breeze.',
  keywords: ['cinematic', 'sunny day', 'nature', 'birds', 'breeze', 'peaceful'],
  openGraph: {
    title: 'A Peaceful Sunny Day ? Harm and Ahad',
    description: 'Cinematic, realistic scene of a sunny day with birds and breeze.',
    type: 'website'
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
