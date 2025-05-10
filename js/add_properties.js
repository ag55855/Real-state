document.getElementById("add-property-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const newProperty = {
    name: document.getElementById("name").value,
    image: document.getElementById("image").value,
    description: document.getElementById("description").value,
    price: document.getElementById("price").value,
    type: document.getElementById("type").value
  };

  // المفتاح الأساسي
  const key = "property-list";
  const properties = JSON.parse(localStorage.getItem(key)) || [];

  properties.push(newProperty);
  localStorage.setItem(key, JSON.stringify(properties));

  alert("تمت إضافة العقار بنجاح!");

  // إعادة تعيين الفورم
  document.getElementById("add-property-form").reset();
});