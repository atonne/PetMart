let row = '';
let url = window.location.href;
let key = url.substring(url.indexOf('?') + 1, url.indexOf('='));
let value = url.substring(url.indexOf('=') + 1);
let danhSach = [];

function getDanhSach(danhSach) {
    for (var i = 0; i < danhSach.length; i++) {
        let phukien = danhSach[i];
        row += '<div class="col-3 mb-3 px-0"> <div class="card text-left"> <a href="chi-tiet.html?ma=' + phukien.ma + '"> <img class="card-img-top px-3 pt-3" style="height: 268px;" src="' + phukien.hinh + '" alt="Phụ kiện"> </a> <div class="card-body"> <a href="chi-tiet.html?ma=' + phukien.ma + '"> <h5 class="card-title">' + phukien.ten + '</h5> </a> <p style="font-size: 20px;" class="card-text"> <span class="badge badge-danger">' + formatTien(phukien.gia) + '</span> </p> </div> </div> </div>'
    }
}

if (key == '') {
    danhSach = dsphukien;
} else {
    if (key == 'xuatxu') {
        for (var i = 0; i < dsphukien.length; i++) {
            let sanPham = dsphukien[i];
            if (sanPham.xuatxu.toLowerCase().replaceAll(' ', '').includes(value.toLowerCase())) {
                danhSach.push(sanPham);
            }
        }
    } else if (key == 'khoanggia') {
        for (var i = 0; i < dsphukien.length; i++) {
            let sanPham = dsphukien[i];
            if (value == 'duoi1' && sanPham.gia < 1000000) {
                danhSach.push(sanPham);
            } else if (value == '1den5' && sanPham.gia >= 1000000 && sanPham.gia <= 5000000) {
                danhSach.push(sanPham);
            } else if (value == 'tren5' && sanPham.gia > 5000000) {
                danhSach.push(sanPham);
            }
        }
    }
}
if (danhSach.length == 0) {
    row += '<h4 class="my-5">Không tìm thấy sản phẩm phù hợp</h4>'
}
getDanhSach(danhSach);
document.getElementById('listphukien').innerHTML = row;

document.getElementById('sapXep').onchange = function () {
    row = '';
    let index = document.getElementById('sapXep').selectedIndex;
    let tam = danhSach.slice(0);
    if (index == 1) {
        tam.sort(function (o1, o2) {
            let x = o1.gia;
            let y = o2.gia;
            return x > y ? 1 : -1;
        });
    } else if (index == 2) {
        tam.sort(function (o1, o2) {
            let x = o1.gia;
            let y = o2.gia;
            return x < y ? 1 : -1;
        });
    }
    getDanhSach(tam);
    if (tam.length == 0) {
        row += '<h4 class="my-5">Không tìm thấy sản phẩm phù hợp</h4>'
    }
    document.getElementById('listphukien').innerHTML = row;
};