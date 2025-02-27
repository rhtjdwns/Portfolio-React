import React from "react";

const portText = [
    {
        num: "01",
        title: "React를 이용한 포트폴리오",
        code: "/",
        view: "https://github.com/rhtjdwns/Portfolio-React",
        desc: "React를 이용한 포트폴리오 사이트이다.",
    },
    {
        num: "02",
        title: "React를 이용한 포트폴리오",
        code: "/",
        view: "",
        desc: "React를 이용한 포트폴리오 사이트이다.",
    },
    {
        num: "03",
        title: "React를 이용한 포트폴리오",
        code: "/",
        view: "",
        desc: "React를 이용한 포트폴리오 사이트이다.",
    },
    {
        num: "04",
        title: "React를 이용한 포트폴리오",
        code: "/",
        view: "",
        desc: "React를 이용한 포트폴리오 사이트이다.",
    },
]

const Port = () => {
    return (
        <section id="port">
            <div className="port__inner">
                <div className="port__title">
                    portfolio <em>포트폴리오 작업물</em>
                </div>
                <div className="port__wrap">
                    {portText.map((port, key) => (
                        <article className={`port__item p${key + 1}`} key={key}>
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