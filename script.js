// Tạo sự kiện khi nhấn "Xem Trailer"
const buttons = document.querySelectorAll('.btn-trailer');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Chức năng trailer đang được phát triển!');
    });
});
