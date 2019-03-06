const mailgun = require('mailgun-js')({apiKey: process.env.MAILGUN_API_KEY, domain: process.env.MAILGUN_DOMAIN});

const email = {
	defaultData: {
			from: 'React GraphQl Blog <craig@craigmacintyre.io>', 
			to:'craig@craigmacintyre.io', 
			subject: 'React GraphQl Blog', 
	}, 
	createEmail: text => `
		<div className="email" style="
			border: 1px solid #666;
			padding: 20px;
			font-family: sans-serif;
			line-height: 2;
			font-size: 16px;
			">
			<h2>Hello There!</h2>
			<p>${text}</p>

			<p>Craig MacIntyre</p>
			</div>
		`, 

	sendResetTokenEmail: (resetToken, userEmail) => {
		const data = {
			...email.defaultData, 
			to: userEmail, 
			subject: 'Your Password Reset Token', 
			html: email.createEmail(`Your reset token is <a href="${process.env.FRONTEND_URL}/reset?resetToken=${resetToken}">here</a>`)
		};

		mailgun.messages().send(data, (error, body) => {
			console.log(body);
		});
	}

}

module.exports = email;
