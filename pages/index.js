import fs from 'fs';
import path from 'path';

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data', 'data.json');
  const jsonData = fs.readFileSync(filePath, 'utf8');
  const items = JSON.parse(jsonData);
  return { props: { items } };
}

export default function Home({ items }) {
  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Nhà Bán Chính Chủ</h1>
      {items.map((item, idx) => (
        <div key={idx} style={{ marginBottom: '1.5rem' }}>
          <h3>{item.title}</h3>
          <p>Giá: {item.price} – Diện tích: {item.area}</p>
          <p>{item.description}</p>
          <hr />
        </div>
      ))}
    </main>
  );
}
