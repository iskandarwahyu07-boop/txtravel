// Format Rupiah agar terlihat profesional
const formatRupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(number);
}

function calculate() {
    // Ambil nilai dari input (jika kosong dianggap 0)
    const basePrice = parseFloat(document.getElementById('basePrice').value) || 0;
    const visaCost = parseFloat(document.getElementById('visaCost').value) || 0;
    const tipping = parseFloat(document.getElementById('tipping').value) || 0;
    const commission = parseFloat(document.getElementById('commission').value) || 0;

    // Hitung PPN (1.1% dari Harga Basic)
    const ppn = basePrice * 0.011;

    // Hitung Total Harga (Kecuali Komisi)
    // Rumus: Basic + PPN + Visa + Tipping
    const totalExclCommission = basePrice + ppn + visaCost + tipping;

    // Update Tampilan di Layar
    document.getElementById('displayBase').innerText = formatRupiah(basePrice);
    document.getElementById('displayPpn').innerText = formatRupiah(ppn);
    document.getElementById('displayVisa').innerText = formatRupiah(visaCost);
    document.getElementById('displayTipping').innerText = formatRupiah(tipping);
    document.getElementById('displayCommission').innerText = formatRupiah(commission);
    document.getElementById('displayTotal').innerText = formatRupiah(totalExclCommission);
}

function resetForm() {
    document.getElementById('productName').value = '';
    document.getElementById('departureDate').value = '';
    document.getElementById('basePrice').value = '';
    document.getElementById('visaCost').value = '';
    document.getElementById('tipping').value = '';
    document.getElementById('commission').value = '';
    calculate(); // Reset tampilan angka juga
}