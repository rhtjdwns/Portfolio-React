import React, { useEffect, useState } from "react";
import { introText } from "../constants/data";

const Intro = () => {
    const [scrollY, setScrollY] = useState(0);                  // 스크롤 위치 상태 관리
    const maxScroll = 500;                                      // 스크롤 최대 값

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(Math.min(window.scrollY, maxScroll));    // 스크롤 위치 업데이트
        };

        window.addEventListener("scroll", handleScroll);        // 스크롤 이벤트 리스너 추가

        // 컴포넌트 언마운트 시 이벤트 리스너 제거거
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const titleStyle = {
        transform: `translateY(${scrollY * 0.3}px)`,            // scrollY 값에 따라 위 / 아래로 이동
        transition: "transform 0.2s ease-out",                  // 부드럽게 이동동
    };

    return (
        <section id="intro">
            <div className="intro__inner">
                <h1 className="intro__title" style={titleStyle}>{introText.title}</h1>
                <div className="intro__lines" aria-hidden="true">
                    <span className="line"></span>
                </div>
                <div className="intro__text">
                    <div className="text">
                        <div>{introText.desc[0]}</div>
                        <div>{introText.desc[1]}</div>
                        <div>{introText.desc[2]}</div>
                    </div>
                </div>
                <div className="intro__lines bottom" aria-hidden="true">
                    <span className="line"></span>
                </div>
            </div>
        </section>
    );
};

export default Intro;