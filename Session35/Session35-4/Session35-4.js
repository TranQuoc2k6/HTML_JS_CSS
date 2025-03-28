let danhSachNhanVien = [
    { id: 1, name: 'Nguyễn Văn A', position: 'Developer' },
    { id: 2, name: 'Trần Thị B', position: 'Designer' },
    { id: 3, name: 'Phạm Văn C', position: 'Project Manager' }
];

const SO_NV_MOI_TRANG = 3;
let trangHienTai = 1;

function layDanhSachNhanVienTuLocal() {
    const duLieu = localStorage.getItem('danhSachNhanVien');
    return duLieu ? JSON.parse(duLieu) : danhSachNhanVien;
}

function luuDanhSachNhanVienVaoLocal() {
    localStorage.setItem('danhSachNhanVien', JSON.stringify(danhSachNhanVien));
}

function hienThiNhanVien(trang) {
    danhSachNhanVien = layDanhSachNhanVienTuLocal();
    let tbody = document.getElementById('danhSachNhanVien');
    let batDau = (trang - 1) * SO_NV_MOI_TRANG;
    let ketThuc = batDau + SO_NV_MOI_TRANG;
    let nhanVienTrenTrang = danhSachNhanVien.slice(batDau, ketThuc);
    let rows = '';

    nhanVienTrenTrang.forEach((nv, index) => {
        rows += `
            <tr>
                <td>${batDau + index + 1}</td>
                <td>${nv.name}</td>
                <td>${nv.position}</td>
            </tr>
        `;
    });

    tbody.innerHTML = rows;
    capNhatPhanTrang();
}

function capNhatPhanTrang() {
    let tongSoTrang = Math.ceil(danhSachNhanVien.length / SO_NV_MOI_TRANG);
    let soTrangDiv = document.getElementById('soTrang');
    let buttons = '';

    for (let i = 1; i <= tongSoTrang; i++) {
        buttons += `<div class="so-trang ${i === trangHienTai ? 'active' : ''}" data-page="${i}">${i}</div>`;
    }

    soTrangDiv.innerHTML = buttons;
    document.getElementById('nutTrangTruoc').disabled = trangHienTai === 1;
    document.getElementById('nutTrangSau').disabled = trangHienTai === tongSoTrang;
}

document.getElementById('nutThemNhanVien').onclick = function() {
    let ten = document.getElementById('tenNhanVien').value.trim();
    let chucVu = document.getElementById('chucVu').value.trim();
    if (ten && chucVu) {
        danhSachNhanVien.push({ id: danhSachNhanVien.length + 1, name: ten, position: chucVu });
        luuDanhSachNhanVienVaoLocal();
        hienThiNhanVien(trangHienTai);
    } else {
        alert('Vui lòng nhập đầy đủ thông tin!');
    }
};

hienThiNhanVien(trangHienTai);