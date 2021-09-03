let socket;

function navtabs() {
	$("#demos-div").hide();
	$("#jogging-div").hide();
	$("#settings-div").show();
	console.log("showing settings");
	$(".showHideDiv").click(function () {
		var clickedBtnId = $(this).attr("id");
		if (clickedBtnId === "settings-tab") {
			$("#demos-div").hide();
			$("#jogging-div").hide();
			$("#settings-div").show();
			console.log("showing settings");
		} else if (clickedBtnId === "jogging-tab") {
			$("#demos-div").hide();
			$("#jogging-div").show();
			$("#settings-div").hide();
			console.log("showing jogging");
		} else if (clickedBtnId === "demos-tab") {
			$("#demos-div").show();
			$("#jogging-div").hide();
			$("#settings-div").hide();
			console.log("showing demos");
		}
	});
}

function blockBehavs() {
	$("#connection-form").submit(function (e) {
		e.preventDefault();
	});
	$("#Connected").click(function (e) {
		e.preventDefault();
	});
}

function isIpv4(str) {
	const regexExp =
		/^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gi;

	return regexExp.test(str);
}

function Connect(address, port) {
	console.log(`http://${address}:${port}`);

	socket = new WebSocket(`ws://${address}:${port}`);

	socket.addEventListener("open", function (event) {
		$("#Connected").attr("checked", true);
		socket.send("Hello Server!");
	});

	socket.addEventListener("message", function (event) {
		console.log("Recieved: ", (data = event.data));
		$("#message-alert-text").text(data);
		$("#message-alert")
			.fadeTo(2000, 500)
			.slideUp(500, function () {
				$("#message-alert").slideUp(500);
			});
	});
}

function validateConnectionDataAndConnect(address, port) {
	if (!isIpv4(address)) {
		alert("Please enter a valid IPv4 address.");
		return;
	}
	if (isNaN(parseInt(port))) {
		alert("Please enter a valid port.");
		return;
	}

	Connect(ServerAddress.val(), ServerPort.val());
}

function Disconnect() {
	if (!!$("#Connected").attr("checked")) {
		$("#Connected").attr("checked", false);
		socket.close(1000, "User");
	}
}

$(document).ready(function () {
	(ServerAddress = $("#ServerAddress")).val("192.168.1.103");
	(ServerPort = $("#ServerPort")).val("8765");
	$("#message-alert").hide();

	blockBehavs();
	navtabs();

	$("#connect-btn").click(() => {
		validateConnectionDataAndConnect(ServerAddress.val(), ServerPort.val());
	});

	$("#disconnect-btn").click(() => {
		console.log("disconnecting");
		Disconnect();
	});

	$(".minus").click(() => {});
});
