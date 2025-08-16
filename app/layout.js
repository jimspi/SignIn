import './globals.css'

export const metadata = {
  title: 'My Landing Page',
  description: 'A landing page with authentication',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
