document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            if (this.classList.contains('glassmorphism')) {
                // 할인권 티켓 버튼 클릭 시
                showDiscountPopup();
                disableButtons();
            } else {
                // 일반 티켓 버튼 클릭 시
                const link = this.getAttribute('data-link');
                window.open(link, 'popupWindow', 'width=800,height=600,noopener,noreferrer');
            }
        });
    });

    window.addEventListener('resize', function() {
        const container = document.querySelector('.container');
        if (window.innerWidth <= 768) {
            container.style.flexDirection = 'column';
        } else {
            container.style.flexDirection = 'row';
        }
    });
});

function showDiscountPopup() {
    const popup = document.createElement('div');
    popup.classList.add('popup');

    const closeBtn = document.createElement('div');
    closeBtn.classList.add('close-btn');
    closeBtn.textContent = 'X';
    closeBtn.addEventListener('click', function() {
        popup.remove();
        enableButtons();
    });

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container');
    const image = document.createElement('img');
    image.src = '할인권.png'; // 이미지 경로 설정
    imageContainer.appendChild(image);

    const message = document.createElement('p');
    message.textContent = '할인 코드를 4자리 입력해주세요.';

    const input = document.createElement('input');
    input.type = 'text';
    input.maxLength = 4;

    const confirmButton = document.createElement('button');
    confirmButton.textContent = '확인';
    confirmButton.addEventListener('click', function() {
        const discountCode = input.value.trim();
        if (discountCode === '1978') {
            const link = document.querySelector('.glassmorphism').getAttribute('data-link');
            window.open(link, 'popupWindow', 'width=800,height=600,noopener,noreferrer');
            popup.remove();
        } else {
            alert('할인 코드가 일치하지 않습니다.');
        }
    });

    popup.appendChild(closeBtn);
    popup.appendChild(imageContainer);
    popup.appendChild(message);
    popup.appendChild(input);
    popup.appendChild(confirmButton);

    document.body.appendChild(popup);
}

function disableButtons() {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.classList.add('disabled');
    });
}

function enableButtons() {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.classList.remove('disabled');
    });
}
