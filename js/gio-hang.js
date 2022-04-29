if (localStorage.getItem('trangThai') != 'true') {
    document.getElementById('noiDungGioHang').innerHTML = '<div class="row pt-2 d-flex justify-content-center"> <h4 class="my-5">Bạn chưa đăng nhập</h4> </div>';
}

let soLuongHang = parseInt(localStorage.getItem('soLuongHang'));
let dsMaHang = localStorage.getItem('dsMaHang').trim().split(' ');
let dsSoLuong = localStorage.getItem('dsSoLuong').trim().split(' ');
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
    row += '<div class="row d-flex align-items-center border"> <div class="col-2 d-flex justify-content-center"> <img id="hinhAnh' + i + '" class="img-fluid" src="' + sanPham.hinh + '" alt="Sản phẩm"> </div> <div class="col-2 d-flex justify-content-center"> <h6 id="tenSP' + i + '">' + sanPham.ten + '</h6> </div> <div class="col-2 d-flex justify-content-center"> <span id="gia' + i + '">' + formatTien(sanPham.gia) + '</span> </div> <div class="col-2 d-flex justify-content-center"> <div class="btn-group"> <button type="button" id="btnGiam' + i + '" class="btn btn-danger"> <i class="ti-minus" aria-hidden="true"></i> </button> <input type="text" style="width: 60px;" class="form-control text-center" name="" id="txtSoLuong' + i + '" value="' + dsSoLuong[i] + '" disabled> <button type="button" id="btnTang' + i + '" class="btn btn-danger"> <i class="ti-plus" aria-hidden="true"></i> </button> </div> </div> <div class="col-2 d-flex justify-content-center"> <span id="thanhTien' + i + '" class="text-danger">' + formatTien(thanhTien) + '</span> </div> <div class="col-2 d-flex justify-content-center"> <button id="btnXoa' + i + '" type="button" class="btn btn-danger px-4">Xóa</button> </div> </div>';
}

if (soLuongHang == 0) {
    row += '<div class="row pt-2 d-flex justify-content-center"> <h4 class="my-5">Không tìm thấy sản phẩm trong giỏ hàng</h4> </div>';
}

document.getElementById('bangDonHang').innerHTML = row;
document.getElementById('tongTien').innerHTML = formatTien(tongTien);

for (let i = 0; i < soLuongHang; i++) {
    let soLuong = document.getElementById('txtSoLuong' + i);
    let soLuongMua = parseInt(soLuong.value);

    document.getElementById('btnTang' + i).onclick = function () {
        if (soLuongMua < 10) {
            soLuongMua++;
            soLuong.value = soLuongMua;

            dsSoLuong[i] = soLuongMua.toString();
            localStorage.setItem('dsSoLuong', dsSoLuong.join(' '));
            let donGia = parseInt(document.getElementById('gia' + i).innerHTML.replaceAll('.', ''));
            let thanhTien = soLuongMua * donGia;
            document.getElementById('thanhTien' + i).innerHTML = formatTien(thanhTien);
            tongTien = tongTien + donGia;
            document.getElementById('tongTien').innerHTML = formatTien(tongTien);
        }
    };

    document.getElementById('btnGiam' + i).onclick = function () {
        if (soLuongMua > 1) {
            soLuongMua--;
            soLuong.value = soLuongMua;

            dsSoLuong[i] = soLuongMua.toString();
            localStorage.setItem('dsSoLuong', dsSoLuong.join(' '));
            let donGia = parseInt(document.getElementById('gia' + i).innerHTML.replaceAll('.', ''));
            let thanhTien = soLuongMua * donGia;
            document.getElementById('thanhTien' + i).innerHTML = formatTien(thanhTien);
            tongTien = tongTien - donGia;
            document.getElementById('tongTien').innerHTML = formatTien(tongTien);
        }
    };

    document.getElementById('btnXoa' + i).onclick = function () {
        dsSoLuong.splice(i, 1);
        dsMaHang.splice(i, 1);
        soLuongHang--;
        localStorage.setItem('dsSoLuong', dsSoLuong.join(' '));
        localStorage.setItem('dsMaHang', dsMaHang.join(' '));
        localStorage.setItem('soLuongHang', soLuongHang);
        window.location.reload();
    };
}

document.getElementById('btnDatHang').onclick = function () {

    if (soLuongHang > 0) {
        localStorage.setItem('soLuongHangDaMua', parseInt(localStorage.getItem('soLuongHangDaMua')) + soLuongHang);
        localStorage.setItem('dsMaHangDaMua', localStorage.getItem('dsMaHangDaMua').trim().split(' ').concat(dsMaHang).join(' '));
        localStorage.setItem('dsSoLuongDaMua', localStorage.getItem('dsSoLuongDaMua').trim().split(' ').concat(dsSoLuong).join(' '));

        localStorage.setItem('soLuongHang', 0);
        localStorage.setItem('dsMaHang', '');
        localStorage.setItem('dsSoLuong', '');

        alert('Đặt hàng thành công!');
        window.location.href = 'tai-khoan.html';
    } else {
        alert('Chưa có sản phẩm trong giỏ hàng!');
    }

};