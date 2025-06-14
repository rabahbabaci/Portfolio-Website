import React, { useState, useEffect } from "react";

export function useThemeSwitch() {
	const [mode, setMode] = useState("");

	useEffect(() => {
		const userPref = window.localStorage.getItem("theme");

		const applyTheme = (theme) => {
			setMode(theme);
			if (theme === "dark") {
				document.documentElement.classList.add("dark");
			} else {
				document.documentElement.classList.remove("dark");
			}
			window.localStorage.setItem("theme", theme);
		};

		if (userPref) {
			applyTheme(userPref);
		} else {
			// 🔆 Force light mode as the default
			applyTheme("light");
		}
	}, []);

	useEffect(() => {
		if (mode === "dark") {
			document.documentElement.classList.add("dark");
			window.localStorage.setItem("theme", "dark");
		} else if (mode === "light") {
			document.documentElement.classList.remove("dark");
			window.localStorage.setItem("theme", "light");
		}
	}, [mode]);

	return [mode, setMode];
}
