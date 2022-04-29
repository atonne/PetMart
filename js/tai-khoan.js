if (localStorage.getItem('trangThai') != 'true') {
    document.getElementById('noiDungTaiKhoan').innerHTML = '<div class="row pt-2 d-flex justify-content-center"> <h4 class="my-5">Bạn chưa đăng nhập</h4> </div>';
}


document.getElementById('txtTenTK').value = localStorage.getItem('ten');
document.getElementById('txtEmailTK').value = localStorage.getItem('email');
document.getElementById('txtMatKhauTK').value = localStorage.getItem('matKhau');
document.getElementById('txtNgaySinhTK').value = localStorage.getItem('ngaySinh');

let soLuongHang = parseInt(localStorage.getItem('soLuongHangDaMua'));
let dsMaHang = localStorage.getItem('dsMaHangDaMua').trim().split(' ');
let dsSoLuong = localStorage.getItem('dsSoLuongDaMua').trim().split(' ');
let row = '';
let tongTien = 0;

function getSanPham(danhSach, ma) {
    for (let i = 0; i < danhSach.length; i++) {
        if (danhSach[i].ma.toLowerCase() == ma.toLowerCase()) {
            return danhSach[i];
        }
    }
    return null;
}

for (let i = 0; i < soLuongHang; i++) {
    let sanPham;
    sanPham = getSanPham(dsthucung, dsMaHang[i]);
    if (sanPham == null) {
        sanPham = getSanPham(dsphukien, dsMaHang[i]);
    }
    let thanhTien = sanPham.gia * parseInt(dsSoLuong[i]);
    tongTien += thanhTien;
    row += '<div class="row d-flex align-items-center border"> <div class="col-2 d-flex justify-content-center"> <img id="hinhAnh' + i + '" class="img-fluid" src="' + sanPham.hinh + '" alt="Sản phẩm"> </div> <div class="col-2 d-flex justify-content-center"> <h6 id="tenSP' + i + '">' + sanPham.ten + '</h6> </div> <div class="col-2 d-flex justify-content-center"> <span id="gia' + i + '">' + formatTien(sanPham.gia) + '</span> </div> <div class="col-2 d-flex justify-content-center"> <span id="txtSoluong' + i + '">' + dsSoLuong[i] + '</span> </div> <div class="col-2 d-flex justify-content-center"> <span id="thanhTien' + i + '" class="text-danger">' + formatTien(thanhTien) + '</span> </div> <div class="col-2 d-flex justify-content-center"> <span id="tinhTrangXyLy' + i + '" class="text-success">' + 'Đang xử lý' + '</span> </div> </div>';
}

if (soLuongHang == 0) {
    row += '<div class="row pt-2 d-flex justify-content-center"> <h4 class="my-5">Bạn chưa mua sản phẩm nào</h4> </div>';
}

document.getElementById('bangDonHang').innerHTML = row;
document.getElementById('tongTien').innerHTML = formatTien(tongTien);
