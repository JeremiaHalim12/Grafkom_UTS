// Function to draw the empty chart
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
        ctx.fillStyle = 'black';
        ctx.fillText(bar.year, x + barWidth / 2, maxBarHeight - 5);
        ctx.fillText(`Count: ${bar.count}`, x + barWidth / 2, maxBarHeight - 20);
    }
}