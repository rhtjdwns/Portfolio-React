import React from "react";

const skillText = [
    {
        title: "코딩을 연구하고 탐구한다.",
        desc: "나는 코딩을 좋아한다. 어려을 때부터 어려운 문제들을 풀고 해결하는 걸 좋아했다. 나의 능력으로 누군가의 바램을 이루어주는 것을 꿈꿔왔었다. 누군가가 제시한 문제를 해석하고 설계하여 완성된 작업물을 만드는 건 매력적인 일이라고 생각한다. 내가 좋아하는 일로 누군가가 원하는 것을 만들어가며 살아가고 싶다.",
    },
    {
        title: "노력을 할수록 기회는 온다.",
        desc: "최선을 다하여 노력을 할수록 기회는 찾아오기 마련이다. 자신의 실력을 갈고 닦고 멈추지 않고 항상 시대에 따른 변화를 이끌어가야 한다. 몰두 하다보면 길이 보이고 방향이 보이게 된다. ",
    },
    {
        title: "역지사지의 마음으로 상대방을 보아야한다.",
        desc: "내가 싫은 건 상대방도 싫을 것이라는 생각을 가지고 행동을 조심해야한다. 정직으로 상대방을 마주하면 그 보답은 언젠가 자신에게로 돌아오게 되어있다. 자신에게 엄격하고 상대에겐 관대하며 살아가야한다. ",
    },
];

const Skill = () => {
    return (
        <section id="skill">
            <div className="skill__inner">
                <h2 className="skill__title">Challenge <em>나의 도전</em></h2>
                <div className="skill__desc">
                    {skillText.map((skill, key) => (
                        <div key={key}>
                            <span>{key + 1}</span>
                            <h3>{skill.title}</h3>
                            <p>{skill.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skill;