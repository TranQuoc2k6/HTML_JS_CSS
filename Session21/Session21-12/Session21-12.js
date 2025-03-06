for (let i = 0; i < 10; i++) {
    let color = "#"
    for (let j = 0; j < 6; j++) {
        let originCode = '0123456789ABCDEF';
        color += originCode[Math.floor(Math.random() * 16)];
    }
    console.log(`%c Màu đã được thay đổi`, `color:${color}`);
}
