const properties = [
    {
      name: "شقة فاخرة في وسط المدينة",
      image: "images/1-45.jpg",
      description: "شقة واسعة في قلب المدينة، تحتوي على 3 غرف نوم وحمامين. قريبة من المرافق الرئيسية.",
      price: "5000 ريال شهريًا"
    },
    {
      name: "فيلا كبيرة في منطقة هادئة",
      image: "images/1-64-scaled.jpg",
      description: "فيلا فاخرة تحتوي على 5 غرف نوم وحديقة واسعة. تقع في منطقة هادئة ومريحة.",
      price: "10000 ريال شهريًا"
    },
    {
      name: "شقة صغيرة بالقرب من البحر",
      image: "images/7.jpg",
      description: "شقة مريحة مع إطلالة رائعة على البحر. تحتوي على غرفتين وصالة كبيرة.",
      price: "3000 ريال شهريًا"
    },
    {
      name: "شقة صغيرة بالقرب من الرياض",
      image: "images/th (5).jpg",
         description: "  شقة مريحة مع إطلالة رائعة  للايجار. تحتوي على ثلاث غرف وصالة كبيرة.",
      price: "50000 ريال شهريًا"
    },
    {
      name: "شقة صغيرة بالقرب من العاصمة للايجار",
      image: "images/th (12).jpg",
         description: "شقة مريحة مع إطلالة رائعة  للايجار. تحتوي على اربع غرف وصالة ورسبشين كبير وحمام سباحة.",
      price: "70000 ريال شهريًا"
    },
    {
      name: "شقة صغيرة بالقرب من مكة المكرمة للايجار",
      image: "images/th (13).jpg",
         description: "شقة مريحة مع إطلالة رائعة  للايجار. تحتوي على اربع غرف وصالة ورسبشين كبير وحمام سباحة.",
      price: "70000 ريال شهريًا"
    },
  ];
  
  function displaySaleProperties() {
    const container = document.getElementById("property-list");
  
    // أولًا: عرض العقارات الموجودة في الكود الثابت
    properties.forEach(property => {
      const propertyCard = document.createElement("div");
      propertyCard.className = "col-12 col-sm-6 col-lg-4 mb-4";
  
      propertyCard.innerHTML = `
        <div class="card h-100">
          <img src="${property.image}" class="card-img-top" alt="${property.name}" />
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">${property.name}</h5>
            <p class="card-text">${property.description}</p>
            <p class="mt-auto"><strong>السعر:</strong> ${property.price}</p>
            <button class="btn btn-outline-success mt-2">عرض التفاصيل</button>
          </div>
        </div>
      `;
  
      container.appendChild(propertyCard);
    });
  
    // ثانيًا: عرض العقارات المخزنة في localStorage
    const storedProperties = JSON.parse(localStorage.getItem("property-list")) || [];
  
    storedProperties.forEach(property => {
      const propertyCard = document.createElement("div");
      propertyCard.className = "col-12 col-sm-6 col-lg-4 mb-4";
  
      propertyCard.innerHTML = `
        <div class="card h-100">
          <img src="${property.image}" class="card-img-top" alt="${property.name}" />
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">${property.name}</h5>
            <p class="card-text">${property.description}</p>
            <p class="mt-auto"><strong>السعر:</strong> ${property.price}</p>
            <button class="btn btn-outline-success mt-2">عرض التفاصيل</button>
          </div>
        </div>
      `;
  
      container.appendChild(propertyCard);
    });
  }
  
  window.onload = displaySaleProperties;





