


import React from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="border-b p-6 text-center">20 percent off everywhere</div>
        {children}
      </body>
    </html>
  );
}
