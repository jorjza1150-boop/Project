document.addEventListener("DOMContentLoaded", () => {
  // ใช้ JavaScript จัดการเมนูให้เปลี่ยนหน้าโดยตรง
  document.querySelectorAll("[data-page]").forEach(link => {
    link.addEventListener("click", (e) => {
      const page = link.getAttribute("data-page");
      if (page) {
        e.preventDefault();
        window.location.href = page;
      }
    });
  });

  // ปีปัจจุบันใน Footer
  document.querySelectorAll(".current-year").forEach(el => {
    el.textContent = new Date().getFullYear();
  });

  // Form ตัวอย่าง: แสดง Alert โดยไม่ส่งข้อมูลจริง
  const form = document.querySelector("#contactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const alertBox = document.querySelector("#formAlert");
      alertBox.classList.remove("d-none");
      form.reset();
      window.scrollTo({top: form.offsetTop - 120, behavior: "smooth"});
    });
  }
});
