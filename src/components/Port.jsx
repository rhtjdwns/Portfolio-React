import React, { useEffect, useRef } from "react";

import { portText } from "../constants/data"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Port = () => {
    const horRef = useRef(null);
    const sectionRef = useRef([]);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const hor = horRef.current;
        const sections = sectionRef.current;

        let scrollTween = gsap.to(sections, {
            xPercent: -120 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: hor,
                start: "top 56px",
                end: () => "+=" + hor.offsetWidth,
                pin: true,
                scrub: 1,
                invalidateOnRefresh: true,
                anticipatePin: 1,
            }
        })

        return () => {
            scrollTween.kill();
        };
    }, []);

    return (
        <section id="port" ref={horRef}>
            <div className="port__inner">
                <div className="port__title">
                    portfolio <em>포트폴리오 작업물</em>
                </div>
                <div className="port__wrap">
                    {portText.map((port, key) => (
                        <article className={`port__item p${key + 1}`} 
                                 key={key}
                                 ref={(el) => sectionRef.current[key] = el}         
                        >
                            <span className="num">{port.num}</span>
                            <a href={port.code} target="_blank" className="img" rel="noreferrer"></a>
                            <h3 className="title">{port.title}</h3>
                            <p className="desc">{port.desc}</p>
                            <a href={port.view} target="_blank" className="site" rel="noreferrer">사이트 보기</a>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Port;