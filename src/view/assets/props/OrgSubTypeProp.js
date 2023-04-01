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
	getSubTypeByOrg: (org) => {
		let res = [];
		if (typeof OrgSubTypeList[org] !== "undefined") {
			if (typeof OrgSubTypeList[org].SubType !== "undefined") {
				res = OrgSubTypeList[org].SubType;
				return res;
			} else {
				return res;
			}
		} else {
			return res;
		}
	},
};
