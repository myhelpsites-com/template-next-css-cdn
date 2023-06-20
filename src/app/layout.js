import Script from 'next/script'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Hello word',
  description: 'descrição geral do site',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        {children}
        <Script src='assets/js/jquery.slim.min.js'/>
        <Script src='assets/js/popper.min.js'/>
        <Script src='assets/js/bootstrap.min.js'/>
      </body>
    </html>
  )
}
