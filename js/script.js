
const submit_btn = document.querySelector('.submit-btn');

submit_btn.addEventListener('click', (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  if (username === '' || password === '') {
    alert('Phải nhập đầy đủ thông tin');
  }
  else if (username == "truonggiang" && password == "123456") {
    alert('Đăng nhập thành công');
    window.location.href = 'home.html';
  }
  else {
    alert('Sai tên đăng nhập hoặc mật khẩu');
  }
})