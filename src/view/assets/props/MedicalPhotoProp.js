/** @format */

import MedicalPhotos from "../../../model/propData/MedicalPhotos";

export default function MedicalPhoto() {
	const listSize = Object.keys(MedicalPhotos).length;
	const randVal = Math.floor(Math.random() * listSize);
	return MedicalPhotos[randVal];
}
