export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen bg-gray-100">
        {children}
      </body>
    </html>
  );
}
