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
let products = [];

function addProduct() {
  let name = document.getElementById("productName").value;
  let price = document.getElementById("productPrice").value;
  let qty = document.getElementById("productQty").value;

  if (name === "" || price === "" || qty === "") {
    alert("من فضلك املأ كل الحقول: الاسم والسعر والكمية");
    return;
  }

  products.push(name + " - السعر: " + price + " - الكمية: " + qty);

  let listHtml = "";
  for (let i = 0; i < products.length; i++) {
    listHtml += "<p>✅ " + products[i] + "</p>";
  }
  document.getElementById("productList").innerHTML = listHtml;

  document.getElementById("productName").value = "";
  document.getElementById("productPrice").value = "";
  document.getElementById("productQty").value = "";

  alert("تم إضافة المنتج: " + name);
}
let totalSalesAmount = 0;

function makeSale() {
  let price = document.getElementById("saleProduct").value;
  let qty = document.getElementById("saleQty").value;
  let productName = document.getElementById("saleProduct").options[document.getElementById("saleProduct").selectedIndex].text;

  if (qty === "" || qty <= 0) {
    alert("من فضلك اكتب كمية صحيحة");
    return;
  }

  let total = price * qty;
  totalSalesAmount = totalSalesAmount + total;

  document.getElementById("saleTotal").innerText = totalSalesAmount + " ريال";
  document.getElementById("saleList").innerHTML += "<p>✅ بيع: " + productName + " × " + qty + " = " + total + " ريال</p>";

  alert("تم البيع! إجمالي المبيعات الآن: " + totalSalesAmount);
}
let customers = [];

function addCustomer() {
  let name = document.getElementById("customerName").value;
  let phone = document.getElementById("customerPhone").value;
  let debt = document.getElementById("customerDebt").value;

  if (name === "" || phone === "" || debt === "") {
    alert("من فضلك املأ كل الحقول");
    return;
  }

  customers.push(name + " - هاتف: " + phone + " - عليه: " + debt + " ريال");

  let listHtml = "";
  for (let i = 0; i < customers.length; i++) {
    listHtml += "<p>👤 " + customers[i] + "</p>";
  }
  document.getElementById("customerList").innerHTML = listHtml;

  document.getElementById("customerName").value = "";
  document.getElementById("customerPhone").value = "";
  document.getElementById("customerDebt").value = "";

  alert("تم إضافة العميل: " + name);
}
let suppliers = [];

function addSupplier() {
  let name = document.getElementById("supplierName").value;
  let phone = document.getElementById("supplierPhone").value;
  let debt = document.getElementById("supplierDebt").value;

  if (name === "" || phone === "" || debt === "") {
    alert("من فضلك املأ كل الحقول");
    return;
  }

  suppliers.push(name + " - هاتف: " + phone + " - له: " + debt + " ريال");

  let listHtml = "";
  for (let i = 0; i < suppliers.length; i++) {
    listHtml += "<p>🏭 " + suppliers[i] + "</p>";
  }
  document.getElementById("supplierList").innerHTML = listHtml;

  document.getElementById("supplierName").value = "";
  document.getElementById("supplierPhone").value = "";
  document.getElementById("supplierDebt").value = "";

  alert("تم إضافة المورّد: " + name);
}