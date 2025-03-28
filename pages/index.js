import fs from 'fs'
import path from 'path'
import { useState } from 'react'
import Head from 'next/head'
import '../styles/globals.css'

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data', 'data.json')
  const jsonData = fs.readFileSync(filePath, 'utf8')
  const items = JSON.parse(jsonData)
  return { props: { items } }
}

export default function Home({ items }) {
  const [search, setSearch] = useState('')
  const [district, setDistrict] = useState('')

  const filtered = items.filter(item => {
    const matchKeyword = (item.title + item.description).toLowerCase().includes(search.toLowerCase())
    const matchDistrict = district ? item.address.includes(district) : true
    return matchKeyword && matchDistrict
  })

  return (
    <>
      <Head>
        <title>Nhà Bán Chính Chủ</title>
      </Head>
      <header className="bg-sky-100 flex items-center gap-3 px-4 py-3 shadow">
        <img src="/logo.png" alt="logo" className="h-12" />
        <h1 className="text-xl font-bold">Nhà Bán Chính Chủ</h1>
      </header>
      <div className="p-4 flex gap-2">
        <select onChange={(e) => setDistrict(e.target.value)} className="border px-3 py-2 rounded">
          <option value="">-- Quận --</option>
          <option>Quận 1</option>
          <option>Quận 3</option>
          <option>Gò Vấp</option>
        </select>
        <input type="text" placeholder="Tìm kiếm..." onChange={(e) => setSearch(e.target.value)} className="flex-1 border px-3 py-2 rounded" />
      </div>
      <main className="p-4 space-y-6">
        {filtered.map((item, idx) => (
          <div key={idx} className="border rounded p-4 shadow-sm">
            <h2 className="font-semibold text-lg">{item.title}</h2>
            <p><strong>Giá:</strong> {item.price} – <strong>Diện tích:</strong> {item.area}</p>
            <p><strong>Địa chỉ:</strong> {item.address}</p>
            <p className="my-2">{item.description}</p>
            <img src={item.image} alt={item.title} className="rounded mt-2" />
          </div>
        ))}
      </main>
    </>
  )
}
