/** @format */

import OrgSubTypeList from "./data/OrgSubTypeList";

export const OrgSubType = {
	getOrg: () => {
		let res = [];
		for (var key in OrgSubTypeList) {
			res.push(key);
		}
		return res;
	},
};
