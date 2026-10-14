document.addEventListener("DOMContentLoaded", function () {
    // GANTI dengan nomor WhatsApp penjual.
    // Gunakan kode negara 62 tanpa tanda +.
    const nomorWhatsApp = "6281234567890";

    // Menu navigasi untuk HP
    const menuToggle = document.getElementById("menu-toggle");
    const navbar = document.getElementById("navbar");

    menuToggle.addEventListener("click", function () {
        const isOpen = navbar.classList.toggle("active");
        menuToggle.setAttribute("aria-expanded", isOpen);
        menuToggle.textContent = isOpen ? "✕" : "☰";
    });

    // Tutup menu setelah salah satu link diklik
    navbar.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            navbar.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.textContent = "☰";
        });
    });

    // Format harga ke Rupiah
    function formatRupiah(angka) {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            maximumFractionDigits: 0
        }).format(angka);
    }

    // Tombol pesan pada setiap produk
    document.querySelectorAll(".order-btn").forEach(function (button) {
        button.addEventListener("click", function () {
            const produk = button.dataset.product;
            const harga = Number(button.dataset.price);

            const pesan =
                `Halo, saya ingin memesan Tela-Tela Ubi.\n` +
                `Varian: ${produk}\n` +
                `Harga per porsi: ${formatRupiah(harga)}\n` +
                `Jumlah: ... porsi`;

            const url =
                "https://wa.me/" + nomorWhatsApp +
                "?text=" + encodeURIComponent(pesan);

            window.open(url, "_blank", "noopener,noreferrer");
        });
    });

    // Tombol kontak WhatsApp
    document.getElementById("contact-btn").addEventListener(
        "click",
        function () {
            const pesan = "Halo, saya ingin bertanya tentang produk Tela-Tela Ubi.";
            const url =
                "https://wa.me/" + nomorWhatsApp +
                "?text=" + encodeURIComponent(pesan);

            window.open(url, "_blank", "noopener,noreferrer");
        }
    );

    // Tahun otomatis
    document.getElementById("year").textContent =
        new Date().getFullYear();
});