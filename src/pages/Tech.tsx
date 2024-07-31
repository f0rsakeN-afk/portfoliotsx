import BigText from "../components/BigText"
import BubbleText from "../components/BubbleText"

const Tech: React.FC = () => {
    return (
        <div className="min-h-screen container m-auto px-4 xl:px-0 pt-24 pb-4">
            <section className="flex flex-col space-y-2 items-center justify-center">
                <section className="flex items-center gap-6">
                    <BigText text="My" />
                    <h1 className="uppercase text-6xl md:text-7xl xl:text-8xl font-bold bg-slate-900 text-white py-3 px-2">Tech</h1>
                </section>
                <BigText text="Companions" />
            </section>
            <div className="pt-6 relative">
                <section className="absolute -rotate-45 bubble-transition-left top-96 md:top-20">
                    <BubbleText text="TailwindCSS" />
                </section>
                <section className="absolute rotate-12 right:44 md:right-0 bubble-transition">
                    <BubbleText text="Javascript" />
                </section>
                <section className="absolute -rotate-45 right-30  xl:right-60 top-64 bubble-transition">
                    <BubbleText text="Express" />
                </section>
                <section className="absolute  md:rotate-45  left-44 md:left-80 top-28 md:top-52 bubble-transition-left">
                    <BubbleText text="MongoDB" />
                </section>
                <section className="absolute rotate-3 left-1/2  top-44 md:top-24 bubble-transition">
                    <BubbleText text="Nodejs" />
                </section>
                <section className="absolute rotate-45  md:left-1/2  top-40  md:top-96 bubble-transition">
                    <BubbleText text="TypeScript" />
                </section>
                <section className="absolute -rotate-45 left-64 md:left-44 top-96 bubble-transition-left">
                    <BubbleText text="Git" />
                </section>
                <section className="absolute -rotate-3 right-4 md:right-96 xl:right-32 top-72 bubble-transition">
                    <BubbleText text="CSS" />
                </section>
            </div>
        </div>
    )
}

export default Tech
