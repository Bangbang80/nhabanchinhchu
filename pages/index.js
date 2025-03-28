import fs from 'fs';
import path from 'path';
import { useState } from 'react';
import Head from 'next/head';
import '../styles/globals.css';

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data', 'data.json');
  const jsonData = fs.readFileSync(filePath, 'utf8');
  const items = JSON.parse(jsonData);
  return { props: { items } };
}

export default function Home({ items }) {
  const [filter, setFilter] = useState('');
  const [search, setSearch] = useState('');

  const filtered = items.filter(item => {
    const matchesDistrict = filter ? item.address.includes(filter) : true;
    const matchesSearch = (item.title + item.description).toLowerCase().includes(search.toLowerCase());
    return matchesDistrict && matchesSearch;
  });

  return (
    <>
      <Head>
        <title>Nhà Bán Chính Chủ</title>
      </Head>
      <header>
        <img src="/logo.png" alt="logo" />
        <h2>Nhà Bán Chính Chủ</h2>
      </header>
      <div className="filter-bar">
        <select onChange={(e) => setFilter(e.target.value)}>
          <option value="">-- Chọn quận --</option>
          <option value="Quận 1">Quận 1</option>
          <option value="Quận 3">Quận 3</option>
          <option value="Gò Vấp">Gò Vấp</option>
        </select>
        <input
          type="text"
          placeholder="Tìm theo từ khoá..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <main style={{ padding: '1rem' }}>
        {filtered.map((item, idx) => (
          <div key={idx} className="house-card">
            <h3>{item.title}</h3>
            <p><strong>Giá:</strong> {item.price} – <strong>Diện tích:</strong> {item.area}</p>
            <p><strong>Địa chỉ:</strong> {item.address}</p>
            <p>{item.description}</p>
            {item.image && <img src={item.image} alt={item.title} />}
          </div>
        ))}
      </main>
    </>
  );
}
