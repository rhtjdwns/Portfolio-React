const link = () => {
    // querySelectorAll 메서드로 웹 내 href 속성 값이 #로 시작하는 모든 앵커 요소들을 선택
    // forEach로 모든 앵커 요소에 대해 반복문 실행
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        // 각 앵커 요소에 대해 클릭 이벤트 추가
        anchor.addEventListener("click", function (e) {
            e.preventDefault();                                         // 클릭 이벤트의 기본 동작 취소

            const targetId = this.getAttribute("href");                 // 클릭된 앵커의 href 속성 값을 가져와서 저장   
            const targetElement = document.querySelector(targetId);     // querySelector를 사용하여 targetId로 지정된 요소를 선택

            // 유효한 요소라면 부드럽게 이동하도록 적용용
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
};

export default link;