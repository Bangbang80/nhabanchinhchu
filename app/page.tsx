import data from '../data/data.json';

export default function Home() {
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Nhà Bán Chính Chủ</h1>
      {data.length === 0 ? (
        <p>Website đang được cập nhật dữ liệu từ các nguồn tin nhà chính chủ.</p>
      ) : (
        <div className="space-y-4">
          {data.map((item, index) => (
            <div key={index} className="border-b pb-2">
              <h2 className="font-semibold text-lg">{item.title}</h2>
              <p>Giá: {item.price} – Diện tích: {item.area}</p>
              <p>{item.description}</p>
              <p>Địa chỉ: {item.address}</p>
              <p>SĐT: {item.phone}</p>
              {item.image && <img src={item.image} alt={item.title} className="mt-2 w-40" />}
            </div>
          ))}
        </div>
      )}
    </main>
  );
}