function drawEmptyChart() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const chartWidth = canvas.width;
    const barSpacing = 20;
    const totalBars = bars.length;
    const barWidth = (chartWidth - (barSpacing * (totalBars + 1))) / totalBars;
    const maxCount = Math.max(...bars.map(bar => bar.count));
    const scale = maxBarHeight / maxCount;

    for (let i = 0; i < totalBars; i++) {
        const bar = bars[i];
        const x = barSpacing + i * (barSpacing + barWidth);
        const barHeight = bar.count * scale;
        const y = maxBarHeight - barHeight;

        ctx.fillStyle = 'blue';
        ctx.fillRect(x, y, barWidth, barHeight);
        // for (let i = 0; i < 500; i++){
        //     dda_line(imageData, x, y+i, barWidth, barHeight + i, 0, 0, 255);
        // }

        const textX = x + barWidth / 2 - 50;

        ctx.fillStyle = 'white';
        ctx.fillText(bar.year, textX, maxBarHeight - 5);
        ctx.fillStyle = 'white';
        ctx.fillText(`Jumlah Set: ${bar.count}`, textX, maxBarHeight - 20);
    }
}

function titik(imgData, x, y, r, g, b) {
    let indeks = 4 * (Math.ceil(x) + (Math.ceil(y) * imgData.width));
    imgData.data[indeks] = r;
    imgData.data[indeks + 1] = g;
    imgData.data[indeks + 2] = b;
    imgData.data[indeks + 3] = 255;
}

function dda_line(imgData, x1, y1, x2, y2, r, g, b) {
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