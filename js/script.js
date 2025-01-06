window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
      navbar.classList.add("bg-primary", "shadow");
    } else {
      navbar.classList.remove("bg-primary", "shadow");
    }
  });
  
  // 2. تأثيرات عند الضغط على الأزرار
  document.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", function () {
      button.classList.add("btn-clicked");
      setTimeout(() => button.classList.remove("btn-clicked"), 300);
    });
  });
  
  // 3. تحريك العناصر عند تحميل الصفحة
  window.addEventListener("load", function () {
    const cards = document.querySelectorAll(".property-card");
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add("fade-in");
      }, index * 200); // تأخير بين البطاقات
    });
  });
  
  // 4. تغيير صورة العقارات عند التمرير فوقها
  document.querySelectorAll('.property-card img').forEach(img => {
    img.addEventListener('mouseover', () => {
      img.style.transform = 'scale(1.1)';
    });
    img.addEventListener('mouseout', () => {
      img.style.transform = 'scale(1)';
    });
  });
  
  // 5. إظهار العناصر عند التمرير
window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.scroll-fade');
    elements.forEach(element => {
        if (element.getBoundingClientRect().top < window.innerHeight) {
            element.classList.add('fade-in');
        }
    });
});

// 6. زر التمرير للأعلى
window.addEventListener('scroll', () => {
    const scrollToTopButton = document.getElementById('scrollToTop');
    if (window.scrollY > 300) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

document.getElementById('scrollToTop').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

  