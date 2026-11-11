let totalSales = 0;

function addSale() {
  totalSales = totalSales + 10000;
  document.getElementById("salesResult").innerText = "إجمالي المبيعات اليوم: " + totalSales + " ريال";
  alert("تم تسجيل عملية بيع بقيمة 10,000 ريال");
}
function login() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (email === "" || password === "") {
    document.getElementById("loginResult").innerText = "من فضلك اكتب الإيميل وكلمة المرور";
    return;
  }

  alert("أهلاً بك في MIZAN ERP، يا " + email);
  document.getElementById("loginResult").innerText = "تم تسجيل الدخول بنجاح";
}
let dashboardSales = 0;

function addSaleDashboard() {
  dashboardSales = dashboardSales + 10000;
  let profit = dashboardSales * 0.30;
  document.getElementById("todaySales").innerText = dashboardSales + " ريال";
  document.getElementById("profit").innerText = profit + " ريال";
  alert("تم تسجيل بيع جديد، مبيعات اليوم أصبحت: " + dashboardSales);
}