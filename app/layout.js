import './globals.css'
import { amiri } from './fonts'


export const metadata = {
  title: "فیلمو | تماشای آنلاین فیلم",     
  description: "سایت تماشای آنلاین فیلم و سریال",
}

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl" className={amiri.variable}>
      <body className="min-h-full flex flex-col bg-gray-950 text-white">
     
        <main className="flex-grow">
          {children}
        </main>
        
            </body>
    </html>
  )
}
