function send() {
	let Mesa = document.getElementById("mesa").value;
	let Pedido = document.getElementById("pedido").value;
	
	const webhook = "https://discord.com/api/webhooks/1238925995046604810/7mt5Uak7gJwgqd0w4nmmBMXY6Id6XAi_Ka_41LWtAV8dNV8JGG4PuG2eb3FaLWFw9zc-";
	
	const contents = '# -------------------------------' + '\nMesa: ' + Mesa + '\nPedido: ' + Pedido + '\n# -------------------------------'; 
	const request = new XMLHttpRequest();
	request.open("POST", webhook);
	request.setRequestHeader('Content-type', 'application/json');
	const params = {
		content: contents
	}
	request.send(JSON.stringify(params));
}

function pagar() {
	let Dinero = document.getElementById("nombre").value;
	let Pedido = document.getElementById("pago").value;
	
	const webhook = "https://discord.com/api/webhooks/1238926464410451999/fODRWicCcJAJFNMy-qzEUoJyjMyQgZmV55si_YeK3r_jcVaXelGWhKv4bB2Ikr3_XGvW";
	
	const contents = '# -------------------------------' + '\nNombre: ' + Dinero + '\nPago: ' + Pedido + '\n# -------------------------------'; 
	const request = new XMLHttpRequest();
	request.open("POST", webhook);
	request.setRequestHeader('Content-type', 'application/json');
	const params = {
		content: contents
	}
	request.send(JSON.stringify(params));
}

