let row = '';
let url = window.location.href;
let key = url.substring(url.indexOf('?') + 1, url.indexOf('='));
let value = url.substring(url.indexOf('=') + 1);
let danhSach = [];

function getDanhSach(danhSach) {
    for (var i = 0; i < danhSach.length; i++) {
        let thucung = danhSach[i];
        row += '<div class="col-3 mb-3 px-0"> <div class="card text-left"> <a href="chi-tiet.html?ma=' + thucung.ma + '"> <img class="card-img-top px-3 pt-3" style="height: 268px;" src="' + thucung.hinh + '" alt="Thú cưng"> </a> <div class="card-body"> <a href="chi-tiet.html?ma=' + thucung.ma + '"> <h5 class="card-title">' + thucung.ten + '</h5> </a> <p style="font-size: 20px;" class="card-text"> <span class="badge badge-danger">' + formatTien(thucung.gia) + '</span> </p> </div> </div> </div>'
    }
}

if (key == '') {
    danhSach = dsthucung;
} else {
    if (key == 'mau') {
        for (var i = 0; i < dsthucung.length; i++) {
            let sanPham = dsthucung[i];
            if (sanPham.mausac.toLowerCase().replaceAll(' ', '').includes(value.toLowerCase())) {
                danhSach.push(sanPham);
            }
        }
    } else if (key == 'loai') {
        for (var i = 0; i < dsthucung.length; i++) {
            let sanPham = dsthucung[i];
            if (sanPham.constructor.name.toLowerCase() == value.toLowerCase()) {
                danhSach.push(sanPham);
            }
        }
    } else if (key == 'khoanggia') {
        for (var i = 0; i < dsthucung.length; i++) {
            let sanPham = dsthucung[i];
            if (value == 'duoi5' && sanPham.gia < 5000000) {
                danhSach.push(sanPham);
            } else if (value == '5den10' && sanPham.gia >= 5000000 && sanPham.gia <= 10000000) {
                danhSach.push(sanPham);
            } else if (value == 'tren10' && sanPham.gia > 10000000) {
                danhSach.push(sanPham);
            }
        }
    }
}
if (danhSach.length == 0) {
    row += '<h4 class="my-5">Không tìm thấy sản phẩm phù hợp</h4>'
}
getDanhSach(danhSach);
document.getElementById('listThuCung').innerHTML = row;

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
    document.getElementById('listThuCung').innerHTML = row;
};