export const metadata = {
  title: "Nhà Bán Chính Chủ",
  description: "Trang web tin nhà chính chủ tự động cập nhật mỗi ngày",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}