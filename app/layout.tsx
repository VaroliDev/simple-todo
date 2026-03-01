export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}