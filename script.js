// 모바일 메뉴 토글
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const menuIcon = document.getElementById('menuIcon');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    menuIcon.textContent = mobileMenu.classList.contains('hidden') ? '☰' : '✕';
});

// 메뉴 클릭 시 메뉴 닫기
const mobileMenuLinks = mobileMenu.querySelectorAll('a');
mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        menuIcon.textContent = '☰';
    });
});

// 네비게이션 링크 클릭 시 스크롤
document.querySelectorAll('nav a, a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// 스크롤 시 네비게이션 강조
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`nav a[href="#${sectionId}"]`);

        if (navLink) {
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                // 현재 섹션 강조 (선택사항)
                navLink.style.color = '#60A5FA'; // blue-400
            } else {
                navLink.style.color = 'inherit';
            }
        }
    });
});

// 포트폴리오 카드 호버 효과 강화
const portfolioCards = document.querySelectorAll('#portfolio .group');
portfolioCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-12px)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// 기술 스택 카드 인터랙션
const techCards = document.querySelectorAll('#tech .p-6');
techCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
    });
});

// 페이지 로드 시 애니메이션
window.addEventListener('load', () => {
    // 페이드인 효과
    document.body.style.opacity = '1';
});

// 버튼 클릭 피드백
document.querySelectorAll('button, a[class*="bg-gradient"]').forEach(el => {
    el.addEventListener('click', function(e) {
        if (this.tagName === 'BUTTON' || this.href === '#' || this.href === '') {
            e.preventDefault();
        }
    });
});

// 초기 로딩 설정
document.body.style.opacity = '0';
setTimeout(() => {
    document.body.style.transition = 'opacity 0.5s ease-in';
    document.body.style.opacity = '1';
}, 100);
