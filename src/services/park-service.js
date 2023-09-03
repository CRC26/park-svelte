/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import axios from "axios";
import { user } from "../stores";

export const donationService = {
	baseUrl: "http://localhost:4000",

	async login(email, password) {
		try {
			const response = await axios.post(`${this.baseUrl}/api/users/authenticate`, { email, password });
			axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.token;
			if (response.data.success) {
				user.set({
					email: email,
					token: response.data.token
				});
				localStorage.park = JSON.stringify({ email: email, token: response.data.token });
				return true;
			};
			return false;
		} catch (error) {
			console.log(error);
			return false;
		}
	},

	async logout() {
		user.set({
		  email: "",
		  token: "",
		});
		axios.defaults.headers.common["Authorization"] = "";
		localStorage.removeItem("park");
	  },

	async signup(firstName, lastName, email, password) {
		try {
			const userDetails = {
				firstName: firstName,
				lastName: lastName,
				email: email,
				password: password
			};
			await axios.post(this.baseUrl + "/api/users", userDetails);
			return true;
		} catch (error) {
			return false;
		}
	},
	reload() {
		const parkCredentials = localStorage.park;
		if (parkCredentials) {
			const savedUser = JSON.parse(parkCredentials);
			user.set({
				email: savedUser.email,
				token: savedUser.token
			});
			axios.defaults.headers.common["Authorization"] = "Bearer " + savedUser.token;
		}
	},
	async addPark(park) {
		try {
			const response = await axios.post(this.baseUrl + "/api/counties/" + park.county + "/parks", park);
			return response.status == 200;
		} catch (error) {
			return false;
		}
	},

	async getCounties() {
		try {
			const response = await axios.get(this.baseUrl + "/api/counties");
			return response.data;
		} catch (error) {
			return [];
		}
	},

	async getParks() {
		try {
			const response = await axios.get(this.baseUrl + "/api/parks");
			return response.data;
		} catch (error) {
			return [];
		}
	},
};




