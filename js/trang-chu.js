let row = ''
for (let i = 0; i < 8; i++) {
    let thucung = dsthucung[i];
    row += '<div class="col-3 mb-3 px-0"> <div class="card text-left"> <a href="chi-tiet.html?ma=' + thucung.ma + '"> <img class="card-img-top px-3 pt-3" style="height: 268px;" src="' + thucung.hinh + '" alt="Thú cưng"> </a> <div class="card-body"> <a href="chi-tiet.html?ma=' + thucung.ma + '"> <h5 class="card-title">' + thucung.ten + '</h5> </a> <p style="font-size: 20px;" class="card-text"> <span class="badge badge-danger">' + formatTien(thucung.gia) + '</span> </p> </div> </div> </div>'
}
document.getElementById('listthucung').innerHTML = row;

row = ''
for (let i = 0; i < 8; i++) {
    let phukien = dsphukien[i];
    console.log(phukien)
    row += '<div class="col-3 mb-3 px-0"> <div class="card text-left"> <a href="chi-tiet.html?ma=' + phukien.ma + '"> <img class="card-img-top px-3 pt-3" style="height: 268px;" src="' + phukien.hinh + '" alt="Phụ kiện"> </a> <div class="card-body"> <a href="chi-tiet.html?ma=' + phukien.ma + '"> <h5 class="card-title">' + phukien.ten + '</h5> </a> <p style="font-size: 20px;" class="card-text"> <span class="badge badge-danger">' + formatTien(phukien.gia) + '</span> </p> </div> </div> </div>'
}
document.getElementById('listphukien').innerHTML = row;