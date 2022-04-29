let list1 = document.getElementById('daDangNhap').classList;
let list2 = document.getElementById('chuaDangNhap').classList;
if (localStorage.getItem('trangThai') == 'true') {
    list1.remove('d-none');
    list1.add('d-flex');
    list2.remove('d-flex');
    list2.add('d-none');
} else {
    list2.remove('d-none');
    list2.add('d-flex');
    list1.remove('d-flex');
    list1.add('d-none');
}


let ten = "";
function kiemTraTen() {
    ten = document.getElementById('txtTen').value.trim();
    ten = ten.replace(/\s+/g, ' ');
    let regexTen = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g;
    if (ten.length == 0) {
        document.getElementById('tbTen').innerHTML = 'Tên không được rỗng!';
        return false;
    } else if (!regexTen.test(ten)) {
        document.getElementById('tbTen').innerHTML = 'Tên không đúng định dạng!';
        return false;
    } else {
        document.getElementById('tbTen').innerHTML = '';
        return true;
    }
}

let email = "";
function kiemTraEMail() {
    email = document.getElementById('txtEmail').value.trim();
    let regexEmail = /^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/gm;
    if (email.length == 0) {
        document.getElementById('tbEmail').innerHTML = 'Email không được rỗng!';
        return false;
    } else if (!regexEmail.test(email)) {
        document.getElementById('tbEmail').innerHTML = 'Email không đúng định dạng!';
        return false;
    } else {
        document.getElementById('tbEmail').innerHTML = '';
        return true;
    }
}

let matKhau = "";
function kiemTraMatKhau() {
    matKhau = document.getElementById('txtMatKhau').value.trim();
    let regexMatKhau = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{6,}$/g;
    if (matKhau.length == 0) {
        document.getElementById('tbMatKhau').innerHTML = 'Mật khẩu không được rỗng!';
        return false;
    } else if (matKhau.length < 6) {
        document.getElementById('tbMatKhau').innerHTML = 'Mật khẩu phải có nhiều hơn 6 ký tự!';
        return false;
    } else if (!regexMatKhau.test(matKhau)) {
        document.getElementById('tbMatKhau').innerHTML = 'Mật khẩu mạnh phải bao gồm chữ thường, chữ hoa, số và ký tự đặc biệt!';
        return false;
    } else {
        document.getElementById('tbMatKhau').innerHTML = '';
        return true;
    }
}

function kiemTraDongY() {
    let value = document.getElementById('chkDongY').checked;
    if (value == false) {
        alert('Chưa đồng ý với chính sách của trang web');
    }
    return value;
}

document.getElementById('txtTen').onblur = kiemTraTen;
document.getElementById('txtEmail').onblur = kiemTraEMail;
document.getElementById('txtMatKhau').onblur = kiemTraMatKhau;

document.getElementById('btnXacNhanDK').onclick = function () {
    let chk1 = kiemTraTen();
    let chk2 = kiemTraEMail();
    let chk3 = kiemTraMatKhau();
    let chk4 = kiemTraDongY();

    if (chk1 && chk2 && chk3 && chk4) {
        localStorage.setItem('ten', ten);
        localStorage.setItem('email', email);
        localStorage.setItem('matKhau', matKhau);
        localStorage.setItem('ngaySinh', document.getElementById('txtNgaySinh').value);

        localStorage.setItem('soLuongHang', 0);
        localStorage.setItem('dsMaHang', '');
        localStorage.setItem('dsSoLuong', '');

        localStorage.setItem('soLuongHangDaMua', 0);
        localStorage.setItem('dsMaHangDaMua', '');
        localStorage.setItem('dsSoLuongDaMua', '');
        window.location.reload();
    }
};

function kiemTraEmailDN() {
    let email2 = document.getElementById('txtEmailDN').value.trim();
    let regexEmail2 = /^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/gm;
    if (email2.length == 0) {
        document.getElementById('tbEmailDN').innerHTML = 'Email không được rỗng!';
        return false;
    } else if (!regexEmail2.test(email2)) {
        document.getElementById('tbEmailDN').innerHTML = 'Email không đúng định dạng!';
        return false;
    } else if (email2 != localStorage.getItem('email')) {
        document.getElementById('tbEmailDN').innerHTML = 'Email chưa được đăng ký!';
        return false;
    } else {
        document.getElementById('tbEmailDN').innerHTML = '';
        return true;
    }
}

function kiemTraMatKhauDN() {
    let matKhau2 = document.getElementById('txtMatKhauDN').value.trim();
    if (matKhau2.length == 0) {
        document.getElementById('tbMatKhauDN').innerHTML = 'Mật khẩu không được rỗng!';
        return false;
    } else if (matKhau2 != localStorage.getItem('matKhau')) {
        document.getElementById('tbMatKhauDN').innerHTML = 'Mật khẩu không chính xác!';
        return false;
    }
    return true;
}

document.getElementById('txtEmailDN').onblur = kiemTraEmailDN;
document.getElementById('btnXacNhanDN').onclick = function () {
    let chk1 = kiemTraEmailDN();
    let chk2 = kiemTraMatKhauDN();

    if (chk1 && chk2) {
        localStorage.setItem('trangThai', 'true');
        window.location.reload();
    }
};

document.getElementById('btnDangXuat').onclick = function () {
    localStorage.setItem('trangThai', 'false');
    window.location.reload();
}

document.getElementById('btnTimKiem').onclick = function () {
    let tuKhoa = document.getElementById('txtTimKiem').value.trim();
    let regexTuKhoa = /^[a-z0-9- "]+$/i;
    if (tuKhoa.length > 0 && regexTuKhoa.test(tuKhoa)) {
        window.location.href = 'tim-kiem.html?tukhoa=' + tuKhoa;
        console.log('OK');
    } else {
        alert('Dữ liệu tìm kiếm phải là chữ hoặc số!');
    }
};

function formatTien(soTien) {
    let result = '';
    result = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(soTien);
    return result;
}

document.getElementById('btnGioHang').getElementsByTagName('span')[0].innerHTML = localStorage.getItem('soLuongHang');