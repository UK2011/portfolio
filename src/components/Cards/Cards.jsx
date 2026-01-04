import "./Cards.css";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const cardsData = [

    {
        index: "01",
        title: "Project 1",
        description: "Description of Project 1",
        image: "p1.jpg"
    },
    {
        index: "02",
        title: "Project 2",
        description: "Description of Project 2",
        image: "p2.webp"
    },
    {
        index: "03",
        title: "Project 3",
        description: "Description of Project 3",
        image: "p3.jpg"
    },
    {
        index: "04",
        title: "Project 4",
        description: "Description of Project 4",
        image: "p4.jpeg"
    }
]

const Cards = () => {
    const cardsContainer = useRef(null);
    useGSAP(() => {
        const cards = document.querySelectorAll(".card");
        cards.forEach((card, index) => {


            if (index < cards.length - 1) {

                ScrollTrigger.create({
                    trigger: card,
                    start: "top top",
                    endTrigger: cards[cards.length - 1],
                    end: "top top",
                    pin: true,
                    pinSpacing: false,

                })

                ScrollTrigger.create({
                    trigger: cards[index + 1],
                    start: "top bottom",
                    endTrigger: cards[cards.length - 1],
                    end: "top top",
                    onUpdate: (self) => {
                        const progress = self.progress;
                        const scale = 1 - progress * 0.15;
                        const rotation = (index % 2 === 0 ? 5 : -5) * progress;
                        const afterOpacity = progress;
                        gsap.set(card, {
                            scale: scale,
                            rotation: rotation,
                            "--after-opacity": afterOpacity,
                        })

                    }
                })
            }
        })
    }, { scope: cardsContainer })
    return (


        <div className="cards" ref={cardsContainer} style={{ zIndex: 1, position: "relative" }}>{
            cardsData.map((card, index) => {
                return (
                    <div className="card" key={index} style={{ zIndex: index + 1 }}>
                        <div className="card-index"><h1>{card.index}</h1></div>
                        <div className="card-content">
                            <div className="card-content-wrapper">
                                <h1 className="card-header">
                                    {card.title}
                                </h1>
                                <div className="card-img">
                                    <img src={card.image} alt={card.title} />
                                </div>
                                <div className="card-copy">
                                    <div className="card-copy-title">
                                        <p>{card.title}</p>
                                    </div>
                                    <div className="card-copy-description">
                                        <p>{card.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
        }</div>
    )
}

export default Cards