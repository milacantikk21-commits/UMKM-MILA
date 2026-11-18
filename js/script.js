document.addEventListener("DOMContentLoaded", function () {

    // NOMOR WHATSAPP PENJUAL
    // Ganti dengan nomor WhatsApp asli.
    const nomorWhatsApp = "6281234567890";


    // MENU NAVIGASI HP

    const menuToggle = document.getElementById("menu-toggle");
    const navbar = document.getElementById("navbar");

    menuToggle.addEventListener("click", function () {

        const isOpen = navbar.classList.toggle("active");

        menuToggle.setAttribute("aria-expanded", isOpen);

        menuToggle.textContent = isOpen ? "✕" : "☰";

    });


    // TUTUP MENU SETELAH DIKLIK

    navbar.querySelectorAll("a").forEach(function (link) {

        link.addEventListener("click", function () {

            navbar.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");

            menuToggle.textContent = "☰";

        });

    });


    // FORMAT RUPIAH

    function formatRupiah(angka) {

        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            maximumFractionDigits: 0
        }).format(angka);

    }


    // TOMBOL PESAN PRODUK

    document.querySelectorAll(".order-btn").forEach(function (button) {

        button.addEventListener("click", function () {

            const produk = button.dataset.product;

            const harga = Number(button.dataset.price);

            const jumlah = prompt(
                "Mau pesan berapa porsi " + produk + "?"
            );

            if (jumlah === null) {
                return;
            }

            const jumlahPesanan = Number(jumlah);

            if (
                !Number.isInteger(jumlahPesanan) ||
                jumlahPesanan < 1
            ) {

                alert("Masukkan jumlah pesanan minimal 1 porsi.");

                return;

            }

            const total = harga * jumlahPesanan;

            const pesan =
                "Halo, saya ingin memesan Tela-Tela Ubi.\n\n" +
                "Varian: " + produk + "\n" +
                "Harga: " + formatRupiah(harga) + "\n" +
                "Jumlah: " + jumlahPesanan + " porsi\n" +
                "Total: " + formatRupiah(total) + "\n\n" +
                "Terima kasih.";

            const url =
                "https://wa.me/" + nomorWhatsApp +
                "?text=" + encodeURIComponent(pesan);

            window.open(url, "_blank");

        });

    });


    // TOMBOL HUBUNGI KAMI

    document.getElementById("contact-btn").addEventListener(
        "click",
        function () {

            const pesan =
                "Halo, saya ingin bertanya tentang produk Tela-Tela Ubi.";

            const url =
                "https://wa.me/" + nomorWhatsApp +
                "?text=" + encodeURIComponent(pesan);

            window.open(url, "_blank");

        }
    );


    // TAHUN OTOMATIS

    document.getElementById("year").textContent =
        new Date().getFullYear();

});