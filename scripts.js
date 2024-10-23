document.getElementById('loginBtn').addEventListener('click', function() {
    window.location.href = 'login.html';
});

document.getElementById('registerBtn').addEventListener('click', function() {
    window.location.href = 'register.html';
});
<!DOCTYPE html>
<html lang="ar">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>إنشاء حساب جديد</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="register-container">
        <h1>إنشاء حساب جديد</h1>
        <form id="registerForm">
            <label for="name">الاسم:</label>
            <input type="text" id="name" required><br><br>

            <label for="dob">تاريخ الميلاد:</label>
            <input type="date" id="dob" required><br><br>

            <label for="userId">أيدي المستخدم (بالإنجليزي):</label>
            <input type="text" id="userId" pattern="[A-Za-z0-9]{3,}" required><br><br>

            <label for="phone">رقم الهاتف (+966):</label>
            <input type="text" id="phone" pattern="05[0-9]{8}" required><br><br>

            <label for="password">كلمة السر:</label>
            <input type="password" id="password" required><br><br>

            <label for="confirmPassword">تأكيد كلمة السر:</label>
            <input type="password" id="confirmPassword" required><br><br>

            <button type="submit">إنشاء الحساب</button>
        </form>
    </div>

    <script src="scripts.js"></script>
</body>
</html>
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert('كلمات السر غير متطابقة');
    } else {
        // Save user data in localStorage (simulate database)
        const userData = {
            name: document.getElementById('name').value,
            dob: document.getElementById('dob').value,
            userId: document.getElementById('userId').value,
            phone: document.getElementById('phone').value
        };
        localStorage.setItem('userData', JSON.stringify(userData));

        // Redirect to verification page
        window.location.href = 'verify.html';
    }
});
<!DOCTYPE html>
<html lang="ar">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>توثيق الحساب</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="verification-container">
        <h1>توثيق الحساب</h1>
        <p>تم إرسال رمز التوثيق إلى رقم هاتفك</p>
        <form id="verifyForm">
            <label for="verificationCode">أدخل الرمز:</label>
            <input type="text" id="verificationCode" pattern="[0-9]{4}" required><br><br>
            <button type="submit">توثيق</button>
        </form>
    </div>

    <script src="scripts.js"></script>
</body>
</html>
document.getElementById('verifyForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let verificationCode = document.getElementById('verificationCode').value;
    let generatedCode = Math.floor(1000 + Math.random() * 9000).toString();

    if (verificationCode === generatedCode) {
        alert('تم توثيق الحساب بنجاح!');
        window.location.href = 'welcome.html';
    } else {
        alert('الرمز غير صحيح. حاول مرة أخرى.');
    }
});
<!DOCTYPE html>
<html lang="ar">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>مرحبًا بك</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="welcome-container">
        <h1>مرحبًا بك، <span id="username"></span></h1>
        <p>استمتع بتجربتك في الموقع!</p>
        <nav class="bottom-nav">
            <a href="profile.html">ملفي الشخصي</a>
            <a href="messages.html">المحادثات</a>
            <a href="settings.html">الإعدادات</a>
        </nav>
    </div>

    <script>
        // Display the user's name from localStorage
        const userData = JSON.parse(localStorage.getItem('userData'));
        document.getElementById('username').textContent = userData.name;
    </script>
</body>
</html>
