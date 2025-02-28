import React from "react";

const footerText = [
    {
        title: "github",
        desc: "깃허브 주소",
        link: "",
    },
    {
        title: "github",
        desc: "깃허브 주소",
        link: "",
    },
]

const Footer = () => {
    return (
        <footer id="footer" role="contentinfo">
            <div className="footer__inner">
                <div className="footer__text">
                    <span>webstoryboy</span>
                    <span>© webs</span>
                </div>
                <div className="footer__info">
                    <div className="left">
                        <div className="title">
                            <a href="/">sign up</a>
                        </div>
                        <p>회원가입을 하시면 댓글을 달 수 있습니다.</p>
                    </div>
                    <div className="right">
                        <h3>social</h3>
                        <ul>
                            {footerText.map((footer, key) => (
                                <li key={key}>
                                    <a href={footer.link}>{footer.title}</a>
                                    <em>{footer.desc}</em>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;