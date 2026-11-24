export default function ({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Ivan Dzyhman — web development student at KPI. Portfolio with projects and learning journey."
        />
        <title>Ivan Dzyhman — Portfolio</title>
        <link rel="icon" type="image/svg+xml" href="/logo.svg" />
      </head>
      <body>{children}</body>
    </html>
  );
}
