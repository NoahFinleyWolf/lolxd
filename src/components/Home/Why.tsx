import { card, clock, ladrao, smile } from "../../icons/WhyCard"

export default function Why() {
	return (
		<div className="Why mt-20 flex justify-center ">
			<div className="w-[85vw] max-w-[1150px]">
				<h1 className="text-5xl font-bold">Why should I use NxYL?</h1>
				<h2 className="font-medium mt-5">
					We are a hosting company that always strives for quality and total customer satisfaction. We offer you a strong free game server try it out.
				</h2>
				<div className="flex mt-10 flex-wrap justify-around gap-3 mb-20 ">
					<WhyCard
						icon={clock}
						title="Deploy in seconds"
						subTitle="Do not wait for your server your server is created in less than 60 seconds."
					/>
					<WhyCard icon={card} title="Free Servers" subTitle="You don't pay a cent with us. It is always free of charge" />
					<WhyCard icon={smile} title="Members are happy" subTitle="For us it is important that the members are satisfied, so we make sure that everyone has fun. " />
					<WhyCard icon={ladrao} title="AntiDDOS" subTitle="There are always killers, but not with us! We offer you with the market leading DDOS protection." />
				</div>
			</div>
		</div>
	)
}

type WhyCardProps = {
	icon: any
	title: string
	subTitle: string
}

export function WhyCard(props: WhyCardProps) {
	return (
		<div
			className="cinza3 flex flex-col items-center text-center px-3 py-5 
		rounded-lg w-[255px] hover:-translate-y-1 transition-all duration-300">
			<div>{props.icon}</div>
			<h1 className="mt-3 mb-4 font-semibold text-xl">{props.title}</h1>
			<h2 className="font-medium text-gray-400">{props.subTitle}</h2>
		</div>
	)
}
