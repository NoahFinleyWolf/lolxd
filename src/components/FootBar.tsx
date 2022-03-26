import Link from "next/link"
import { dev, eComercial } from "../icons/Footer"

export default function EndFootBar() {
	return (
		<div className="cinzaClaro flex justify-center">
			<div className="w-[80vw] max-w-[1500px] flex-col">
				<div className="End flex justify-around text-center mt-20 flex-wrap">
					
					<div>
						<h1>Support</h1>
						<a href="https://denomx.link/dc">Discord</a>
						<a href="mailto:hi@denomx.de">Write us a Mail</a>
					</div>
					<div>
						<h1>Legal</h1>
						<a href="https://legal.denomx.xyz/legal/private/imprint">Impressum</a>
						<a href="https://legal.denomx.xyz/legal/private">Data privacy</a>
					</div>
				</div>
				<div className="flex justify-center flex-col items-center mb-20 mt-10 text-center font-medium">
					<h2 className="flex flex-wrap justify-center items-center">
						{dev} &#160; Powerd by NxYL 
					</h2>
					<h2 className="flex flex-wrap justify-center items-center md:mt-4">
						2019 - 2022 &#160; {eComercial} &#160; DenoMX Network  <span>&nbsp;&nbsp; All rights reserved.</span>
					</h2>
				</div>
			</div>
		</div>
	)
}
