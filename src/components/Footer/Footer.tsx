import React from "react";
import { FooterWrapper } from "../styles/Wrapper";
import { MailText, NumberText, CopyrightText } from "../styles/Texts";

const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];

export default function Footer() {
	return (
		<FooterWrapper>
			<div>
				You can say hi to me here{" "}
				<span role="img" aria-label="Waving Hand">
					👋🏾
				</span>
				<MailText>alukodotun@gmail.com</MailText>
				Or perhaps a Call
				<NumberText>0803.769.9140</NumberText>
				<CopyrightText>
					&copy; {months[new Date().getMonth()]}, {new Date().getFullYear()}
				</CopyrightText>
			</div>
		</FooterWrapper>
	);
}
