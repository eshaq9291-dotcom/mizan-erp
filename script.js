let totalSales = 0;

function addSale() {
  totalSales = totalSales + 10000;
  document.getElementById("salesResult").innerText = "إجمالي المبيعات اليوم: " + totalSales + " ريال";
  alert("تم تسجيل عملية بيع بقيمة 10,000 ريال");
}