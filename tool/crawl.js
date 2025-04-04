const fs = require('fs');
const path = require('path');

const data = [
  {
    title: "Nhà mặt tiền Quận 3 – gần chợ",
    price: "7.5 tỷ",
    area: "80m²",
    district: "Quận 3",
    description: "Chính chủ gửi bán, nhà đẹp, vị trí trung tâm.",
    address: "88 Nguyễn Đình Chiểu, Quận 3, TP.HCM",
    phone: "0911222333",
    image: "https://via.placeholder.com/150"
  }
];

const filePath = path.join(__dirname, '../data/data.json');
fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
console.log('✅ Đã cập nhật file data.json');