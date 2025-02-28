# 정보
- 페이지가 한 페이지지만 섹션을 7개로 구성되어 있기 때문에 컴포넌트로 작업을 할 것임. 구조는 7개지만 크게 봤을 때에는 3단 header,
main, footer로 이루어져있기 때문에 main 컴포넌트를 만들고 여기에 스킵메뉴를 설정하기 위해 추가적인 컴포넌트를 만듦.

# 폴더 구조
1. view : 페이지에 표현되는 것들
2. component : 섹션을 구분화
3. asset : 이미지와 css파일을 설정
4. constant : 데이터를 보관
5. util : 기타 자바스크립트 파일

# gsap
1. import ScrollTrigger from "gsap/ScrollTrigger"; : GSAP의 ScrollTrigger 모듈을 가져옵니다. ScrollTrigger는 GSAP의 플러그인으로 스크롤에 반응하는 애니메이션을 쉽게 구현할 수 있도록 도와줍니다.
2. gsap.registerPlugin(ScrollTrigger); : ScrollTrigger를 GSAP에 등록합니다. 이를 통해 ScrollTrigger를 사용하여 애니메이션을 정의할 수 있습니다.
3. const horSection = gsap.utils.toArray(".port__item"); : 클래스 이름이 "port__item"인 모든 요소들을 선택하여 배열 horSection에 저장합니다.
4. gsap.to(horSection, {...}); : GSAP의 to 메서드를 사용하여 요소들에 애니메이션을 적용합니다.
5. xPercent: -120 * (horSection.length - 1),: 요소들을 가로 방향으로 배치하기 위해 xPercent 속성을 사용합니다. 스크롤되면 120% 만큼 이동하도록 설정합니다.
6. ease: "none", : 애니메이션의 이징(easing)을 "none"으로 설정하여 일정한 속도로 애니메이션이 진행되도록 합니다.
7. scrollTrigger: {...}: ScrollTrigger를 이용하여 스크롤에 따라 애니메이션을 제어하는 옵션들을 설정합니다.
8. trigger: "#port": 애니메이션을 시작할 트리거 요소로, #port를 선택합니다.
9. start: "top 56px": 트리거 요소의 상단에서 56px 아래에서 애니메이션이 시작됩니다.
10. end: "+=3000": 트리거 요소의 아래에서 3000px 아래에서 애니메이션이 끝납니다.
11. pin: true,: 애니메이션이 스크롤 범위 동안 고정되도록 합니다.
12. scrub: 1,: 스크롤 시 애니메이션 속도에 비례하여 애니메이션이 진행됩니다.
13. markers: false,: 디버깅을 위한 마커를 표시하지 않습니다.
14. invalidateOnRefresh: true,: 페이지 리프레시 시 ScrollTrigger 캐시를 재설정합니다.
15. anticipatePin: 1,: 고정된 상태로 애니메이션이 시작되기 전에 스크롤 위치에 따라 약간의 애니메이션 효과를 부여합니다.