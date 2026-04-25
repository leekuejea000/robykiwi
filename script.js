const translations = {
    ko: {
        menu_home: "홈페이지",
        menu_product: "제품",
        menu_story: "스토리",
        menu_contact: "문의",
        menu_settings: "설정",
        cta_buy: "지금 구매하기",
        hero_tag: "Premium Red Kiwi Variety",
        hero_title: "자연이 빚은<br><span>붉은 보석</span>, 루비키위",
        hero_desc: "일반 키위보다 3배 더 높은 당도와 풍부한 비타민. 당신의 미각을 깨울 단 하나의 특별한 과일, 루비키위를 경험해보세요.",
        btn_view_product: "제품 보기",
        btn_our_story: "우리의 이야기",
        features_title: "왜 <span>루비키위</span>인가요?",
        features_subtitle: "다른 과일과는 차원이 다른 루비키위만의 세 가지 약속",
        feature1_title: "극강의 달콤함",
        feature1_desc: "평균 20브릭스 이상의 고당도. 신맛은 적고 꿀처럼 달콤한 맛이 일품입니다.",
        feature2_title: "영양 폭발",
        feature2_desc: "비타민 C가 오렌지의 2배! 안토시아닌이 풍부하여 항산화 작용에 탁월합니다.",
        feature3_title: "희소 가치",
        feature3_desc: "일 년 중 짧은 기간에만 수확되는 프리미엄 품종으로 특별한 선물이 됩니다.",
        story_title: "자연의 <span>순수함</span>을 담다",
        story_desc1: "루비키위는 비옥한 토양과 따스한 햇살 아래서 정성껏 재배됩니다. 우리는 농약 사용을 최소화하고, 가장 맛있는 순간에 수확하여 산지의 신선함을 그대로 전달합니다.",
        story_desc2: "한 입 베어 물 때 느껴지는 과즙의 풍미는 당신의 하루를 더욱 특별하게 만들어 줄 것입니다.",
        btn_direct_contact: "산지 직송 문의",
        product_title: "우리의 <span>프리미엄</span> 라인업",
        product_subtitle: "용도에 맞는 최적의 선택을 제안합니다.",
        prod1_tag: "GIFT SET",
        prod1_title: "루비키위 선물세트",
        prod1_desc: "최고 등급의 과육만을 엄선한 품격 있는 선물",
        prod1_price: "₩ 45,000",
        prod2_tag: "FAMILY PACK",
        prod2_title: "가족 실속형 2kg",
        prod2_desc: "온 가족이 넉넉하게 즐길 수 있는 합리적인 구성",
        prod2_price: "₩ 29,900",
        prod3_tag: "SUBSCRIPTION",
        prod3_title: "정기 구독 서비스",
        prod3_desc: "제철 루비키위를 매주 신선하게 집 앞으로",
        prod3_price: "₩ 15,000 / 주",
        contact_title: "함께 <span>시작</span>해볼까요?",
        contact_subtitle: "대량 구매, 유통 문의 등 궁금한 점은 언제든 남겨주세요.",
        placeholder_name: "성함",
        placeholder_email: "이메일",
        placeholder_message: "문의 내용",
        btn_submit: "문의 보내기",
        footer_copy: "© 2026 Ruby Kiwi Co. All Rights Reserved.",
        footer_privacy: "개인정보처리방침",
        footer_terms: "이용약관"
    },
    en: {
        menu_home: "Home",
        menu_product: "Product",
        menu_story: "Story",
        menu_contact: "Contact",
        menu_settings: "Settings",
        cta_buy: "Buy Now",
        hero_tag: "Premium Red Kiwi Variety",
        hero_title: "Nature's <span>Red Jewel</span>,<br>Ruby Kiwi",
        hero_desc: "Three times sweeter than regular kiwi and packed with vitamins. Experience the only special fruit that will awaken your taste buds.",
        btn_view_product: "View Product",
        btn_our_story: "Our Story",
        features_title: "Why <span>Ruby Kiwi</span>?",
        features_subtitle: "Three promises of Ruby Kiwi that are on another level.",
        feature1_title: "Extreme Sweetness",
        feature1_desc: "High sugar content of over 20 Brix. Low acidity and a honey-like sweet taste.",
        feature2_title: "Nutritional Powerhouse",
        feature2_desc: "Twice the Vitamin C of oranges! Rich in anthocyanins for excellent antioxidant action.",
        feature3_title: "Rarity Value",
        feature3_desc: "A premium variety harvested only for a short period, making it a special gift.",
        story_title: "Capturing Nature's <span>Purity</span>",
        story_desc1: "Ruby Kiwi is carefully grown under fertile soil and warm sunlight. We minimize pesticides and deliver the freshness of the origin by harvesting at the most delicious moment.",
        story_desc2: "The flavor of the juice felt when you take a bite will make your day even more special.",
        btn_direct_contact: "Inquire Direct Shipping",
        product_title: "Our <span>Premium</span> Lineup",
        product_subtitle: "We suggest the best choice for your needs.",
        prod1_tag: "GIFT SET",
        prod1_title: "Ruby Kiwi Gift Set",
        prod1_desc: "A dignified gift with only the highest grade pulp selected.",
        prod1_price: "$ 35.00",
        prod2_tag: "FAMILY PACK",
        prod2_title: "Family Pack 2kg",
        prod2_desc: "A reasonable configuration for the whole family to enjoy.",
        prod2_price: "$ 25.00",
        prod3_tag: "SUBSCRIPTION",
        prod3_title: "Subscription Service",
        prod3_desc: "Fresh seasonal Ruby Kiwis delivered to your door weekly.",
        prod3_price: "$ 12.00 / week",
        contact_title: "Shall we <span>start</span> together?",
        contact_subtitle: "Please leave any questions such as bulk purchase or distribution inquiries.",
        placeholder_name: "Name",
        placeholder_email: "Email",
        placeholder_message: "Message",
        btn_submit: "Send Message",
        footer_copy: "© 2026 Ruby Kiwi Co. All Rights Reserved.",
        footer_privacy: "Privacy Policy",
        footer_terms: "Terms of Use"
    }
};

let currentLang = 'ko';

document.addEventListener('DOMContentLoaded', () => {
    const langToggle = document.getElementById('langToggle');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');

    // Language Toggle Function
    const updateLanguage = (lang) => {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (translations[lang][key]) {
                el.placeholder = translations[lang][key];
            }
        });

        langToggle.textContent = lang === 'ko' ? 'EN' : 'KR';
    };

    langToggle.addEventListener('click', () => {
        currentLang = currentLang === 'ko' ? 'en' : 'ko';
        updateLanguage(currentLang);
    });

    // Mobile Menu Toggle
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = mobileMenuBtn.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });

    // Close mobile menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const icon = mobileMenuBtn.querySelector('i');
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-times');
        });
    });

    // Reveal animations on scroll
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealOnScroll = () => {
        const triggerBottom = window.innerHeight * 0.85;
        
        revealElements.forEach(el => {
            const elTop = el.getBoundingClientRect().top;
            
            if (elTop < triggerBottom) {
                el.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Trigger once on load

    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const target = document.querySelector(targetId);
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80, // Account for sticky nav
                    behavior: 'smooth'
                });
            }
        });
    });

    // Simple sticky nav effect
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.height = '70px';
            nav.style.background = 'rgba(255, 255, 255, 0.95)';
            nav.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
        } else {
            nav.style.height = '80px';
            nav.style.background = 'rgba(255, 255, 255, 0.7)';
            nav.style.boxShadow = 'none';
        }
    });
});
