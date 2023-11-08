export function titik(imgData, x, y, r, g, b) {
    let indeks = 4 * (Math.ceil(x) + (Math.ceil(y) * imgData.width));
    imgData.data[indeks] = r;
    imgData.data[indeks + 1] = g;
    imgData.data[indeks + 2] = b;
    imgData.data[indeks + 3] = 255;
}


export function dda_line(imgData, x1, y1, x2, y2, r, g, b) {
    var dx = x2 - x1;
    var dy = y2 - y1;

    if (Math.abs(dx) > Math.abs(dy)) {
        // sumbu x
        if (x2 > x1) {
            // ke kanan
            var y = y1;
            for (var x = x1; x < x2; x++) {
                y = y + dy / Math.abs(dx);
                titik(imgData, x, y, r, g, b);
            }
        }
        else {
            // ke kiri
            var y = y1;
            for (var x = x1; x > x2; x--) {
                y = y + dy / Math.abs(dx);
                titik(imgData, x, y, r, g, b);
            }

        }
    }
    else {
        // sumbu y
        if (y2 > y1) {
            // ke kanan
            var x = x1;
            for (var y = y1; y < y2; y++) {
                x = x + dx / Math.abs(dy);
                titik(imgData, x, y, r, g, b);
            }
        }
        else {
            // ke kiri
            var x = x1;
            for (var y = y1; y > y2; y--) {
                x = x + dx / Math.abs(dy);
                titik(imgData, x, y, r, g, b);
            }
        }
    }
}

export function lingkaran(imgData, xc, yc, radius, r, g, b) {
    for (var x = xc-radius; x < xc + radius; x++) {
        var y = yc + Math.sqrt(Math.pow(radius, 2) - Math.pow((x - xc),2 ));
        titik(imgData, Math.ceil(x), Math.ceil(y), r, g, b);

        var y = yc - Math.sqrt(Math.pow(radius, 2) - Math.pow((x - xc),2 ));
        titik(imgData, Math.ceil(x), Math.ceil(y), r, g, b);
    }

    for (var x = xc-radius; x < xc + radius; x++) {
        var y = yc + Math.sqrt(Math.pow(radius, 2) - Math.pow((x - xc),2 ));
        titik(imgData, Math.ceil(y), Math.ceil(x), r, g, b);

        var y = yc - Math.sqrt(Math.pow(radius, 2) - Math.pow((x - xc),2 ));
        titik(imgData, Math.ceil(y), Math.ceil(x), r, g, b);
    }
}

export function lingkaran_polar(imgData, xc, yc, radius, r, g, b) {

    for (let theta = 0; theta < Math.PI * 10; theta += 0.01) {
        let x = xc + radius * Math.cos(theta);
        let y = yc + radius * Math.sin(theta);

        titik(imgData, Math.ceil(x), Math.ceil(y), r, g, b);
    }
}

export function ellips_polar(imgData, xc, yc, radiusX, radiusY, r, g, b) {

    for (let theta = 0; theta < Math.PI * 10; theta += 0.01) {
        let x = xc + radiusX * Math.cos(theta);
        let y = yc + radiusY * Math.sin(theta);

        titik(imgData, Math.ceil(x), Math.ceil(y), r, g, b);
    }
}

export function spiral(imgData, xc, yc, radius, r, g, b) {

    for (let theta = 0; theta < Math.PI * 7; theta += 0.0001) {
        radius = 8 * theta;
        let x = xc + radius * Math.cos(theta);
        let y = yc - radius * Math.sin(theta);

        titik(imgData, Math.ceil(x), Math.ceil(y), r, g, b);
    }
}

export function infinit(imgData, xc, yc, radius, r, g, b) {

    for (let theta = 0; theta < Math.PI * 26; theta += 0.0001) {
        radius = 2.13 * theta;
        let x = xc + radius * Math.cos(theta);
        let y = yc - radius * Math.sin(theta) * Math.cos(theta);

        titik(imgData, Math.ceil(x), Math.ceil(y), r, g, b);
    }
}

export function bunga(imgData, xc, yc, radius, r, g, b) {

    for (let theta = 0; theta < Math.PI * 8; theta += 0.0001) {
        let x = xc + radius * Math.cos(10 * theta) * Math.cos(theta);
        let y = yc - radius * Math.cos(10 * theta) * Math.sin(theta);

        titik(imgData, x, y, r, g, b);
    }
}

export function hati(imgData, xc, yc, radius, r, g, b) {

    for (let theta = 0; theta < Math.PI * 2; theta += 0.0001) {
        let x = xc + (radius + radius * Math.sin(theta)) * Math.cos(theta) * 3;
        let y = yc + (radius + radius * Math.sin(theta) * 2.5) * Math.sin(theta) * 1.5;

        titik(imgData, x, y, r, g, b);
    }
}

export function matahari(imgData, xc, yc, radius, r, g, b) {

    for (let theta = 0; theta < Math.PI * 2; theta += 0.0001) {
        let x = xc + (radius + 10 * Math.sin(radius/5 * theta)) * Math.cos(theta);
        let y = yc + (radius + 10 * Math.sin(radius/5 * theta)) * Math.sin(theta);

        titik(imgData, x, y, r, g, b);
    }
}

export function bintang(imgData, xc, yc, radius, r, g, b) {

    for (let theta = 0; theta < Math.PI * 2; theta += 0.0001) {
        let x = xc + (radius + 25 * Math.sin(radius/20 * theta)) * Math.cos(theta);
        let y = yc - (radius + 25 * Math.sin(radius/20 * theta)) * Math.sin(theta);

        titik(imgData, x, y, r, g, b);
    }
}

export function diamond(imgData, xc, yc, radius, r, g, b) {

    for (let theta = 0; theta < Math.PI; theta += 0.0001) {
        let x = xc + (radius + 30 * Math.cos(radius * theta) * Math.sin(theta*2)) * 2;
        let y = yc + (radius + 70 * Math.sin(radius * theta) * Math.cos(theta*2)) * 2;

        titik(imgData, x, y, r, g, b);
    }
}

export function spehere(imgData, xc, yc, radius, r, g, b) {

    for (let theta = 0; theta < Math.PI; theta += 0.0001) {
        let x = xc + (radius + 120 * Math.cos(radius * theta) * Math.cos(radius + theta));
        let y = yc + (radius + 120 * Math.sin(radius * theta) * Math.cos(radius + theta));

        titik(imgData, x, y, r, g, b);
    }
}

export function onion(imgData, xc, yc, radius, r, g, b) {
    for (let theta = 0; theta < Math.PI; theta += 0.0001) {
        let x = xc - (radius + 100 * Math.cos(radius * theta) * Math.cos(radius + theta * 2));
        let y = yc - (radius + 100 * Math.sin(radius * theta) + Math.sin(radius + theta * 2));

        titik(imgData, x, y, r, g, b);
    }
}

export function floodFillStack(imgData, canvas, x0, y0, toFlood, color) {

    var tumpukan = [];
    tumpukan.push({ x: x0, y: y0 });

    while (tumpukan.length > 0) {
        var titik_skrg = tumpukan.pop();
        var index_skrg = 4 * (titik_skrg.x + titik_skrg.y * canvas.width);

        var r1 = imgData.data[index_skrg];
        var g1 = imgData.data[index_skrg + 1];
        var b1 = imgData.data[index_skrg + 2];

        if ((r1 == toFlood.r) && (g1 == toFlood.g) && (b1 == toFlood.b)) {
            imgData.data[index_skrg] = color.r;
            imgData.data[index_skrg + 1] = color.g;
            imgData.data[index_skrg + 2] = color.b;
            imgData.data[index_skrg + 3] = 255;

            tumpukan.push({x: titik_skrg.x+1, y: titik_skrg.y});
            tumpukan.push({x: titik_skrg.x-1, y: titik_skrg.y});
            tumpukan.push({x: titik_skrg.x, y: titik_skrg.y+1});
            tumpukan.push({x: titik_skrg.x, y: titik_skrg.y-1});
        }
    }
}

export function polygon(imgData, point_array, r, g, b) {

    var point = point_array[0];

    for (var i = 1; i < point_array.length; i++) {
        var point_2 = point_array[i];

        dda_line(imgData, point.x, point.y, point_2.x, point_2.y, r, g, b);
        point = point_2;
    }
    dda_line(imgData, point.x, point.y, point_array[0].x, point_array[0].y, r, g, b);

}

export function translasi(titik_lama, T) {
    var x_baru = titik_lama.x + T.x;
    var y_baru = titik_lama.y + T.y;

    return {x: x_baru, y: y_baru};
}

export function penskalaan(titik_lama, S) {
    var x_baru = titik_lama.x * S.x;
    var y_baru = titik_lama.y * S.y;

    return {x: x_baru, y: y_baru};
}

export function rotasi(titik_lama, sudut) {
    var x_baru = titik_lama.x * Math.cos(sudut) - titik_lama.y * Math.sin(sudut);
    var y_baru = titik_lama.x * Math.sin(sudut) + titik_lama.y * Math.cos(sudut);

    return {x: x_baru, y: y_baru};
}

export function rotasi_fp(titik_lama, titik_putar, sudut) {
    var p1 = translasi(titik_lama, {x: -titik_putar.x, y: -titik_putar.y});
    var p2 = rotasi(p1, sudut);
    var p3 = translasi(p2, titik_putar);

    return p3;
}

export function skala_fp(titik_lama, titik_pusat, S) {
    var p1 = translasi(titik_lama, {x: -titik_pusat.x, y: -titik_pusat.y});
    var p2 = penskalaan(p1, S);
    var p3 = translasi(p2, titik_pusat);

    return p3;
}

export function translasi_array(array_titik, T) {
    var array_hasil = [];
    for (var i = 0; i <array_titik.length; i++) {
        var temp = translasi(array_titik[i], T);
        array_hasil.push(temp);
    }

    return array_hasil;
}

export function skala_array(array_titik, titik_pusat, S) {
    var array_hasil = [];
    for (var i = 0; i <array_titik.length; i++) {
        var temp = skala_fp(array_titik[i], titik_pusat, S);
        array_hasil.push(temp);
    }

    return array_hasil;
}

export function rotasi_array(array_titik, titik_pusat, sudut) {
    var array_hasil = [];
    for (var i = 0; i <array_titik.length; i++) {
        var temp = rotasi_fp(array_titik[i], titik_pusat, sudut);
        array_hasil.push(temp);
    }

    return array_hasil;
}

export function createIdentity() {
    var identitas =
    [
        [1,0,0],
        [0,1,0],
        [0,0,1]
    ];

    return identitas;
}

export function multiplyMatrix(m1, m2) {
    var hasil =
    [
       [0,0,0],
       [0,0,0] ,
       [0,0,0]
    ];

    for (var i = 0; i < 3; i++){
        for (var j = 0; j < 3; j++){
            for (var k = 0; k < 3; k++){
                hasil[i][k] += m1[i][j] * m2 [j][k];
            }
        }
    }

    return hasil;
}

export function createTranslation(Tx, Ty) {
    var translasi =
    [
        [1,0,Tx],
        [0,1,Ty],
        [0,0,1],
    ];

    return translasi;
}

export function createScale(Sx, Sy) {
    var skala =
    [
        [Sx,0,0],
        [0,Sy,0],
        [0,0,1]
    ];

    return skala;
}

export function createRotation(theta) {
    var rotasi =
    [
        [Math.cos(theta),-Math.sin(theta),0],
        [Math.sin(theta),Math.cos(theta),0],
        [0,0,1],
    ]

    return rotasi;
}

export function rotation_fp(xc, yc, theta) {
    var m1 = createTranslation(-xc, -yc);
    var m2 = createRotation(theta);
    var m3 = createTranslation(xc, yc);

    var hasil;
    hasil = multiplyMatrix(m3, m2);
    hasil = multiplyMatrix(hasil, m1);
    return hasil;
}

export function scale_fp(xc, yc, Sx, Sy) {
    var m1 = createTranslation(-xc, -yc);
    var m2 = createScale(Sx, Sy);
    var m3 = createTranslation(xc, yc);

    var hasil;
    hasil = multiplyMatrix(m3, m2);
    hasil = multiplyMatrix(hasil, m1);
    return hasil;
}

export function transform_titik(titik_lama, m) {
    var x_baru = m[0][0]*titik_lama.x + m[0][1]*titik_lama.y + m[0][2]*1;
    var y_baru = m[1][0]*titik_lama.x + m[1][1]*titik_lama.y + m[1][2]*1;

    return {x: x_baru, y: y_baru};
}

export function transform_array(array_titik, m) {
    var hasil = [];

    for (var i = 0; i < array_titik.length; i++) {
        var titik_hasil;
        titik_hasil = transform_titik(array_titik[i], m);
        hasil.push(titik_hasil);
    }

    return hasil;
}