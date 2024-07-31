
type Props = {
    text:string
}

const BubbleText = ({text}: Props) => {
  return (
      <h2 className=" px-12 py-4 rounded-full overflow-hidden bg-[#FB4E04] w-max text-2xl font-normal text-gray-700 uppercase">{text}</h2>
  )
}

export default BubbleText