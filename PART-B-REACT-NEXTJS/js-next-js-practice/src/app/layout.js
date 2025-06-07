import './global.css';

export const metadata = {
  title: 'React & NextJS Components',
  description: 'Assignment for MSAD',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
