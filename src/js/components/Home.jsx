import React, { useEffect, useState } from "react";
import Semaforo from "./Semaforo";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

const Home = () => {
	const [luzActiva, setLuzActiva] = useState("activa")
	const [luzYellowGreen, setluzYellowGreen] = useState("yellow")


	const cambioDeLuz = () => {
		if (luzYellowGreen == "yellow") {
			setluzYellowGreen == "green"
			return
		}
		cambioDeLuz("yellow")
	}
		


	return (
		<div className="text-center">
			<div className>
				<Semaforo luzActiva={luzActiva} setLuzActiva={setLuzActiva}/>
			</div>

		</div>
	);
};

export default Home;