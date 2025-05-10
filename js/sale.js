const saleProperties = [
    {
      name: "فيلا حديثة للبيع",
      image: "images/6069.jpg",
      description: "فيلا بمساحة 500 م²، تحتوي على 6 غرف نوم وحديقة وحمام سباحة.",
      price: "1,200,000 ريال"
    },
    {
      name: "شقة تمليك في موقع مميز",
      image: "images/R.jpg",
      description: "شقة 3 غرف نوم بصالة ومطبخ مجهز، قريبة من الخدمات والمدارس.",
      price: "650,000 ريال"
    },
    {
      name: "أرض للبيع بموقع استراتيجي",
      image: "images/1473-2.jpg",
      description: "أرض سكنية بمساحة 600 م²، مناسبة لبناء فيلا أو مشروع استثماري.",
      price: "850,000 ريال"
    },
    {
      name: "أرض للبيع بموقع استراتيجي",
      image: "images/259.jpg",
      description: "أرض سكنية بمساحة 500 م²، مناسبة لبناء فيلا أو مشروع استثماري.",
      price: "850,000 ريال"
    },
    {
      name: "شقة للبيع بموقع استراتيجي",
      image: "images/pngtree-drawing-of-a-house-on-street-with-cars-tows-image_2904406.jpg",
      description: "شقة سكنية بمساحة 900 م²، مناسبة لبناء فيلا أو مشروع استثماري.",
      price: "850,000 ريال"
    },
    {
      name: "فيلا للبيع بموقع استراتيجي",
      image: "images/112222.jpeg",
      description: "فيلا سكنية بمساحة 700 م²، مناسبة لبناء فيلا أو مشروع استثماري.",
      price: "850,000 ريال"
    },
    {
      name: "شقة للبيع بموقع استراتيجي",
      image: "images/th (8).jpg",
      description: "شقة سكنية بمساحة 1500 م²، مناسبة لبناء فيلا أو مشروع استثماري.",
      price: "850,000 ريال"
    },
    {
      name: "فيلا للبيع بموقع استراتيجي",
      image: "images/th (17).jpg",
      description: "فيلا سكنية بمساحة 1000 م²، مناسبة لبناء فيلا أو مشروع استثماري.",
      price: "850,000 ريال"
    },
    {
      name: "فيلا للبيع بموقع استراتيجي",
      image: "images/th (18).jpg",
      description: "فيلا سكنية بمساحة 2000 م²، مناسبة لبناء فيلا أو مشروع استثماري.",
      price: "10,000000 ريال"
    },
  ];
  
  function displaySaleProperties() {
    const container = document.getElementById("sale-properties");
    saleProperties.forEach(property => {
      container.innerHTML += `
        <div class="col-12 col-sm-6 col-lg-4 mb-4">
          <div class="card h-100">
            <img src="${property.image}" class="card-img-top" alt="${property.name}" />
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">${property.name}</h5>
              <p class="card-text">${property.description}</p>
              <p class="mt-auto"><strong>السعر:</strong> ${property.price}</p>
              <button class="btn btn-outline-success mt-2" onclick="alert('تفاصيل العقار: ${property.name}')">عرض التفاصيل</button>
            </div>
          </div>
        </div>
      `;
    });
  }
  
  window.onload = displaySaleProperties;






