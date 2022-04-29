class thucung {
    constructor(ma, ten, gia, hinh, xuatxu, mausac, tuoi) {
        this.ma = ma;
        this.ten = ten;
        this.gia = gia;
        this.hinh = hinh;
        this.xuatxu = xuatxu;
        this.mausac = mausac;
        this.tuoi = tuoi;
    }
}

class cho extends thucung {
    constructor(ma, ten, gia, hinh, xuatxu, mausac, tuoi) {
        super(ma, ten, gia, hinh, xuatxu, mausac, tuoi);
    }
}

class meo extends thucung {
    constructor(ma, ten, gia, hinh, xuatxu, mausac, tuoi) {
        super(ma, ten, gia, hinh, xuatxu, mausac, tuoi);
    }
}

class phukien {
    constructor(ma, ten, gia, hinh, xuatxu, mausac, mota) {
        this.ma = ma;
        this.ten = ten;
        this.gia = gia;
        this.hinh = hinh;
        this.xuatxu = xuatxu;
        this.mausac = mausac;
        this.mota = mota;
    }
}

dsthucung = [];

dsthucung.push(new meo('ME1', 'Mèo tai cụp', 6000000, '../img/thu-cung/meo-1.jpg', 'Viet Nam', 'Xam', 1));
dsthucung.push(new meo('ME2', 'Mèo Anh lông ngắn Hyma', 20000000, '../img/thu-cung/meo-2.jpg', 'Trung Quoc', 'Xam', 1));
dsthucung.push(new meo('ME3', 'Mèo Anh lông ngắn Bicolor', 4000000, '../img/thu-cung/meo-3.jpg', 'Han Quoc', 'Xam', 1));
dsthucung.push(new meo('ME4', 'Mèo vàng cực múp', 20000000, '../img/thu-cung/meo-4.jpg', 'Trung Quoc', 'Vang', 1));
dsthucung.push(new meo('ME5', 'Mèo Anh lông ngắn màu Lilac', 16000000, '../img/thu-cung/meo-5.jpg', 'Viet Nam', 'Xam', 1));
dsthucung.push(new cho('CH1', 'Chó Samoyeh', 20000000, '../img/thu-cung/cho-1.jpg', 'Viet Nam', 'Trang', 1));
dsthucung.push(new cho('CH2', 'Chó Alaska', 16000000, '../img/thu-cung/cho-2.jpg', 'Trung Quoc', 'Xam', 1));
dsthucung.push(new cho('CH3', 'Chó Corgi', 20000000, '../img/thu-cung/cho-3.jpg', 'Han Quoc', 'Vang', 1));
dsthucung.push(new cho('CH4', 'Shiba Inu', 16000000, '../img/thu-cung/cho-4.jpg', 'Trung Quoc', 'Vang', 1));
dsthucung.push(new cho('CH5', 'Chó Poodle', 20000000, '../img/thu-cung/cho-5.jpg', 'Viet Nam', 'Xam', 1));

dsphukien = []

dsphukien.push(new phukien('PK1', 'Ổ đệm cho chó mèo', 200000, '../img/phu-kien/pk-1.jpg', 'Trung Quoc', 'Xanh', 'Đệm'));
dsphukien.push(new phukien('PK2', 'Khay vệ sinh', 300000, '../img/phu-kien/pk-2.jpg', 'Han Quoc', 'Trang', 'Khay vệ sinh'));
dsphukien.push(new phukien('PK3', 'Vòng cổ cho chó', 150000, '../img/phu-kien/pk-3.jpg', 'Trung Quoc', 'Xam', 'vòng cổ'));
dsphukien.push(new phukien('PK4', 'Găng tay tắm chó mèo', 50000, '../img/phu-kien/pk-4.jpg', 'Viet Nam', 'vang', 'Găng tay'));
dsphukien.push(new phukien('PK5', 'Chuồng chó', 1500000, '../img/phu-kien/pk-5.jpg', 'Viet Nam', 'Xam', 'Chuồng'));
dsphukien.push(new phukien('PK6', 'Balo đưa chó mèo đi xa', 200000, '../img/phu-kien/pk-6.jpg', 'Han Quoc', 'Xam', 'Ba lô'));
dsphukien.push(new phukien('PK7', 'Áo ếch cho chó mèo', 100000, '../img/phu-kien/pk-7.jpg', 'Viet Nam', 'Xanh', 'Áo'));
dsphukien.push(new phukien('PK8', 'Áo khủng long cho chó mèo', 200000, '../img/phu-kien/pk-8.jpg', 'Trung Quoc', 'Xanh', 'Áo'));
dsphukien.push(new phukien('PK9', 'Áo len cho chó mèo', 160000, '../img/phu-kien/pk-9.jpg', 'Han Quoc', 'Xam', 'áo'));
dsphukien.push(new phukien('PK10', 'Chén ăn cho thú cưng', 200000, '../img/phu-kien/pk-10.jpg', 'Viet Nam', 'Trang', 'Chén'));
