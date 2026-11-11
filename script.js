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
let totalPurchasesAmount = 0;

function makePurchase() {
  let supplier = document.getElementById("purchaseSupplier").value;
  let product = document.getElementById("purchaseProduct").value;
  let qty = document.getElementById("purchaseQty").value;
  let price = document.getElementById("purchasePrice").value;

  if (product === "" || qty === "" || price === "") {
    alert("من فضلك املأ المنتج والكمية والسعر");
    return;
  }

  let total = qty * price;
  totalPurchasesAmount = totalPurchasesAmount + total;

  document.getElementById("purchaseTotal").innerText = totalPurchasesAmount + " ريال";
  document.getElementById("purchaseList").innerHTML += "<p>📦 شراء: " + product + " من " + supplier + " × " + qty + " = " + total + " ريال</p>";

  alert("تم تسجيل الشراء! إجمالي المشتريات: " + totalPurchasesAmount);
}
let totalExpenses = 0;
let totalIncomes = 0;

function addExpense() {
  let type = document.getElementById("expenseType").value;
  let desc = document.getElementById("expenseDesc").value;
  let amount = Number(document.getElementById("expenseAmount").value);

  if (desc === "" || amount === "" || amount <= 0) {
    alert("من فضلك اكتب الوصف والمبلغ بشكل صحيح");
    return;
  }

  if (type === "expense") {
    totalExpenses = totalExpenses + amount;
    document.getElementById("expenseList").innerHTML += "<p>🔴 مصروف: " + desc + " - " + amount + " ريال</p>";
  } else {
    totalIncomes = totalIncomes + amount;
    document.getElementById("expenseList").innerHTML += "<p>🟢 إيراد: " + desc + " - " + amount + " ريال</p>";
  }

  let net = totalIncomes - totalExpenses;
  document.getElementById("totalExpenses").innerText = totalExpenses + " ريال";
  document.getElementById("totalIncomes").innerText = totalIncomes + " ريال";
  document.getElementById("netResult").innerText = net + " ريال";

  document.getElementById("expenseDesc").value = "";
  document.getElementById("expenseAmount").value = "";

  alert("تم التسجيل بنجاح");
}
let inventory = [];

function addInventory() {
  let product = document.getElementById("invProduct").value;
  let warehouse = document.getElementById("invWarehouse").value;
  let qty = Number(document.getElementById("invQty").value);
  let alertLevel = Number(document.getElementById("invAlert").value);

  if (product === "" || qty === "") {
    alert("من فضلك اكتب اسم المنتج والكمية");
    return;
  }

  let status = "✅ متوفر";
  if (qty <= alertLevel) {
    status = "⚠️ تنبيه: المخزون قليل، اطلب بضاعة جديدة!";
  }
  if (qty === 0) {
    status = "🔴 نفد من المخزون!";
  }

  inventory.push(product + " | " + warehouse + " | الكمية: " + qty + " | " + status);

  let listHtml = "";
  for (let i = 0; i < inventory.length; i++) {
    listHtml += "<p>" + inventory[i] + "</p>";
  }
  document.getElementById("inventoryList").innerHTML = listHtml;

  document.getElementById("invProduct").value = "";
  document.getElementById("invQty").value = "";

  alert("تم إضافة المنتج للمخزون: " + product);
}
function showReport() {
  // في النسخة التعليمية نستخدم أرقام تجريبية من المتغيرات التي سجلناها
  // في النسخة الحقيقية سنقرأها من قاعدة البيانات

  let sales = totalSalesAmount || 0;
  let purchases = totalPurchasesAmount || 0;
  let expenses = totalExpenses || 0;
  let incomes = totalIncomes || 0;

  // إذا كانت كلها صفر (لأن الصفحة جديدة)، نعرض مثالاً تعليمياً
  if (sales === 0 && purchases === 0 && expenses === 0) {
    sales = 44000;
    purchases = 800000;
    expenses = 150000;
    incomes = 20000;
  }

  let profit = (sales + incomes) - (purchases + expenses);

  document.getElementById("repSales").innerText = sales + " ريال";
  document.getElementById("repPurchases").innerText = purchases + " ريال";
  document.getElementById("repExpenses").innerText = expenses + " ريال";
  document.getElementById("repIncomes").innerText = incomes + " ريال";
  document.getElementById("repProfit").innerText = profit + " ريال";

  if (profit >= 0) {
    document.getElementById("repMessage").innerText = "✅ اليوم رابح، استمر!";
    document.getElementById("repProfit").style.color = "green";
  } else {
    document.getElementById("repMessage").innerText = "⚠️ اليوم خاسر، راجع مصاريفك ومشترياتك!";
    document.getElementById("repProfit").style.color = "red";
  }

  alert("تم تحديث التقرير!");
}
function saveSettings() {
  let company = document.getElementById("companyName").value;
  let currency = document.getElementById("companyCurrency").value;
  alert("تم حفظ إعدادات الشركة: " + company + " - العملة: " + currency);
}

let users = ["المدير العام - مدير"];

function addUser() {
  let name = document.getElementById("newUserName").value;
  let role = document.getElementById("newUserRole").value;

  if (name === "") {
    alert("من فضلك اكتب اسم المستخدم");
    return;
  }

  users.push(name + " - " + role);

  let listHtml = "<p>المستخدمون الحاليون:</p>";
  for (let i = 0; i < users.length; i++) {
    listHtml += "<p>👤 " + users[i] + "</p>";
  }
  document.getElementById("userList").innerHTML = listHtml;
  document.getElementById("newUserName").value = "";

  alert("تم إضافة المستخدم: " + name + " بصلاحية: " + role);
}