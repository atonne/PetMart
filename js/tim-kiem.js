let row = '';
let url = window.location.href;
let key = url.substring(url.indexOf('?') + 1, url.indexOf('='));
let value = url.substring(url.indexOf('=') + 1);
let danhSach = [];

let dsSanPham = dsthucung.concat(dsphukien);

function getDanhSach(danhSach) {
    for (var i = 0; i < danhSach.length; i++) {
        let sanPham = danhSach[i];
        row += '<div class="col-3 mb-3 px-0"> <div class="card text-left"> <a href="chi-tiet.html?ma=' + sanPham.ma + '"> <img class="card-img-top px-3 pt-3" style="height: 268px;" src="' + sanPham.hinh + '" alt="Thú cưng"> </a> <div class="card-body"> <a href="chi-tiet.html?ma=' + sanPham.ma + '"> <h5 class="card-title">' + sanPham.ten + '</h5> </a> <p style="font-size: 20px;" class="card-text"> <span class="badge badge-danger">' + formatTien(sanPham.gia) + '</span> </p> </div> </div> </div>'
    }
}

if (key == 'tukhoa') {
    for (var i = 0; i < dsSanPham.length; i++) {
        let sanPham = dsSanPham[i];
        if (sanPham.ten.toLowerCase().replaceAll(' ', '').includes(value.toLowerCase()) || sanPham.mausac.toLowerCase().replaceAll(' ', '').includes(value.toLowerCase())) {
            danhSach.push(sanPham);
        }
    }
}

if (danhSach.length == 0) {
    row += '<h4 class="my-5">Không tìm thấy sản phẩm phù hợp</h4>'
}
getDanhSach(danhSach);
document.getElementById('listsanpham').innerHTML = row;

document.getElementById('sapXep').onchange = function () {
    row = '';
    let index = document.getElementById('sapXep').selectedIndex;
    let tam = danhSach.slice(0);
    if (index == 1) {
        tam.sort(function (o1, o2) {
            let x = o1.giaSP;
            let y = o2.giaSP;
            return x > y ? 1 : -1;
        });
    } else if (index == 2) {
        tam.sort(function (o1, o2) {
            let x = o1.giaSP;
            let y = o2.giaSP;
            return x < y ? 1 : -1;
        });
    }
    getDanhSach(tam);
    if (tam.length == 0) {
        row += '<h4 class="my-5">Không tìm thấy sản phẩm phù hợp</h4>'
    }
    document.getElementById('listsanpham').innerHTML = row;
};