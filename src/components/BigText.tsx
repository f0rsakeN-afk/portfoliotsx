
interface Props {
    text: string
}

const BigText = ({ text }: Props) => {
    return (
        <h1 className="pt font-bold text-5xl md:text-7xl xl:text-8xl uppercase">{text}</h1>
    )
}

export default BigText;