import Image from "next/image"
import Link from "next/link"
import pigman from "../../../public/ezgif-7-2d7872661596.png"

export default function Sobre() {
	return (
		<div className="Sobre flex justify-center mt-40  mx-auto">
			<div className="cinzaClaro flex text-center h-72 items-center overflow-hidden justify-around rounded-2xl p-5 xl:h-auto w-[90vw] max-w-[1150px]">
				<div className="flex flex-col xl:w-full gap-5 justify-center">
					<h1 className="font-black text-2xl mb-3 font-Montserrat uppercase px-4">
Deploy your free Minecraft server in seconds 
          </h1>
					<div className="text-lg text-gray-400 text-left">
						<h2>Whats up? Create your new game server in seconds fast for free. Leave annoying support and slow Server! 🚀 Start now!</h2>
					</div>
					<div className="flex flex-row mt-5 text-lg sm:text-base gap-5 text-gray-300">
						<Link href="https://client.nxyl.pro/" passHref>
							<button className="cinza2 py-2 px-5 rounded-xl hover:brightness-110 transition-all duration-200">Get started!</button>
						</Link>
						<Link href="https://denomx.link/dc" passHref>
							<button className="cinza2 py-2 px-5 rounded-xl hover:brightness-110 transition-all duration-200">Help?</button>
						</Link>
					</div>
				</div>
				<div className="xl:hidden">
					<Image src={pigman} alt="Erro" priority quality={50}/>
				</div>
			</div>
		</div>
	)
}
