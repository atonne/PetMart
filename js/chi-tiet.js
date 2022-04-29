let url = window.location.href;
let key = url.substring(url.indexOf('?') + 1, url.indexOf('='));
let value = url.substring(url.indexOf('=') + 1);
let sanPham;
let row = '';
let soLuongMua = 1;

function getSanPham(danhSach) {
    for (let i = 0; i < danhSach.length; i++) {
        if (danhSach[i].ma.toLowerCase() == value.toLowerCase()) {
            return danhSach[i];
        }
    }
    return null;
}

if (key == 'ma') {
    sanPham = getSanPham(dsthucung);
    if (sanPham == null) {
        sanPham = getSanPham(dsphukien);
    }
    if (sanPham == null) {
        row += '<div class="row pt-3 d-flex justify-content-center"> <h4 class="my-5">Không tìm thấy sản phẩm phù hợp</h4> </div>'
        document.getElementById('thongTinSP').innerHTML = row;
    } else {
        document.getElementById('hinhAnh').src = sanPham.hinh;
        document.getElementById('tenSP').innerHTML = sanPham.ten;
        document.getElementById('giaSP').innerHTML = formatTien(sanPham.gia);

        if (value.toLowerCase().includes('me') || value.toLowerCase().includes('ch')) {
            row += '<tr> <td style="width: 20%;">Tên</td> <td>' + sanPham.ten + '</td> </tr>';
            row += '<tr> <td style="width: 20%;">Xuất xứ</td> <td>' + sanPham.xuatxu + '</td> </tr>';
            row += '<tr> <td style="width: 20%;">Màu lông</td> <td>' + sanPham.mausac + '</td> </tr>';
            row += '<tr> <td style="width: 20%;">Tuổi</td> <td>' + sanPham.tuoi + '</td> </tr>';
        } else if (value.toLowerCase().includes('pk')) {
            row += '<tr> <td style="width: 20%;">Tên</td> <td>' + sanPham.ten + '</td> </tr>';
            row += '<tr> <td style="width: 20%;">Xuất xứ</td> <td>' + sanPham.xuatxu + '</td> </tr>';
            row += '<tr> <td style="width: 20%;">Màu sắc</td> <td>' + sanPham.mausac + '</td> </tr>';
            row += '<tr> <td style="width: 20%;">Mô tả</td> <td>' + sanPham.mota + '</td> </tr>';
        }
        document.getElementById('chiTietSP').innerHTML = row;

        let soLuong = document.getElementById('txtSoLuong');
        soLuongMua = parseInt(soLuong.value);

        document.getElementById('btnTang').onclick = function () {
            if (soLuongMua < 10) {
                soLuongMua++;
                soLuong.value = soLuongMua;
            }
        };

        document.getElementById('btnGiam').onclick = function () {
            if (soLuongMua > 1) {
                soLuongMua--;
                soLuong.value = soLuongMua;
            }
        };

        if (localStorage.getItem('trangThai') != 'true') {
            document.getElementById('btnMuaNgay').setAttribute('disabled', 'disabled');
            document.getElementById('btnThemGioHang').setAttribute('disabled', 'disabled');
        }

        document.getElementById('btnMuaNgay').onclick = function () {
            localStorage.setItem('soLuongHang', parseInt(localStorage.getItem('soLuongHang')) + 1);
            localStorage.setItem('dsMaHang', localStorage.getItem('dsMaHang') + ' ' + sanPham.ma);
            localStorage.setItem('dsSoLuong', localStorage.getItem('dsSoLuong') + ' ' + soLuongMua);
            window.location.href = 'gio-hang.html';
        };

        document.getElementById('btnThemGioHang').onclick = function () {
            localStorage.setItem('soLuongHang', parseInt(localStorage.getItem('soLuongHang')) + 1);
            localStorage.setItem('dsMaHang', localStorage.getItem('dsMaHang') + ' ' + sanPham.ma);
            localStorage.setItem('dsSoLuong', localStorage.getItem('dsSoLuong') + ' ' + soLuongMua);
            alert('Đặt hàng thành công!')
            window.location.reload();
        };
    }
} else {
    row += '<div class="row pt-3 d-flex justify-content-center"> <h4 class="my-5">Không tìm thấy sản phẩm phù hợp</h4> </div>'
    document.getElementById('thongTinSP').innerHTML = row;
}


