(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

	$("body").on("dblclick", "#ServerAddress", (e) => {
		alert(e);
	});

	$(".btn-plus, .btn-minus").on("click", (e) => {
		const isNegative = $(e.target).closest(".btn-minus").is(".btn-minus");
		const input = $(e.target).closest(".input-group").find("input");
		if (input.is("input")) {
			input[0][isNegative ? "stepDown" : "stepUp"]();
		}
	});
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwibGV0IHNvY2tldDtcclxuXHJcbmZ1bmN0aW9uIG5hdnRhYnMoKSB7XHJcblx0JChcIiNkZW1vcy1kaXZcIikuaGlkZSgpO1xyXG5cdCQoXCIjam9nZ2luZy1kaXZcIikuaGlkZSgpO1xyXG5cdCQoXCIjc2V0dGluZ3MtZGl2XCIpLnNob3coKTtcclxuXHRjb25zb2xlLmxvZyhcInNob3dpbmcgc2V0dGluZ3NcIik7XHJcblx0JChcIi5zaG93SGlkZURpdlwiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcblx0XHR2YXIgY2xpY2tlZEJ0bklkID0gJCh0aGlzKS5hdHRyKFwiaWRcIik7XHJcblx0XHRpZiAoY2xpY2tlZEJ0bklkID09PSBcInNldHRpbmdzLXRhYlwiKSB7XHJcblx0XHRcdCQoXCIjZGVtb3MtZGl2XCIpLmhpZGUoKTtcclxuXHRcdFx0JChcIiNqb2dnaW5nLWRpdlwiKS5oaWRlKCk7XHJcblx0XHRcdCQoXCIjc2V0dGluZ3MtZGl2XCIpLnNob3coKTtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJzaG93aW5nIHNldHRpbmdzXCIpO1xyXG5cdFx0fSBlbHNlIGlmIChjbGlja2VkQnRuSWQgPT09IFwiam9nZ2luZy10YWJcIikge1xyXG5cdFx0XHQkKFwiI2RlbW9zLWRpdlwiKS5oaWRlKCk7XHJcblx0XHRcdCQoXCIjam9nZ2luZy1kaXZcIikuc2hvdygpO1xyXG5cdFx0XHQkKFwiI3NldHRpbmdzLWRpdlwiKS5oaWRlKCk7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwic2hvd2luZyBqb2dnaW5nXCIpO1xyXG5cdFx0fSBlbHNlIGlmIChjbGlja2VkQnRuSWQgPT09IFwiZGVtb3MtdGFiXCIpIHtcclxuXHRcdFx0JChcIiNkZW1vcy1kaXZcIikuc2hvdygpO1xyXG5cdFx0XHQkKFwiI2pvZ2dpbmctZGl2XCIpLmhpZGUoKTtcclxuXHRcdFx0JChcIiNzZXR0aW5ncy1kaXZcIikuaGlkZSgpO1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcInNob3dpbmcgZGVtb3NcIik7XHJcblx0XHR9XHJcblx0fSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJsb2NrQmVoYXZzKCkge1xyXG5cdCQoXCIjY29ubmVjdGlvbi1mb3JtXCIpLnN1Ym1pdChmdW5jdGlvbiAoZSkge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdH0pO1xyXG5cdCQoXCIjQ29ubmVjdGVkXCIpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0fSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzSXB2NChzdHIpIHtcclxuXHRjb25zdCByZWdleEV4cCA9XHJcblx0XHQvXigoWzAtOV18WzEtOV1bMC05XXwxWzAtOV17Mn18MlswLTRdWzAtOV18MjVbMC01XSlcXC4pezN9KFswLTldfFsxLTldWzAtOV18MVswLTldezJ9fDJbMC00XVswLTldfDI1WzAtNV0pJC9naTtcclxuXHJcblx0cmV0dXJuIHJlZ2V4RXhwLnRlc3Qoc3RyKTtcclxufVxyXG5cclxuZnVuY3Rpb24gQ29ubmVjdChhZGRyZXNzLCBwb3J0KSB7XHJcblx0Y29uc29sZS5sb2coYGh0dHA6Ly8ke2FkZHJlc3N9OiR7cG9ydH1gKTtcclxuXHJcblx0c29ja2V0ID0gbmV3IFdlYlNvY2tldChgd3M6Ly8ke2FkZHJlc3N9OiR7cG9ydH1gKTtcclxuXHJcblx0c29ja2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJvcGVuXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG5cdFx0JChcIiNDb25uZWN0ZWRcIikuYXR0cihcImNoZWNrZWRcIiwgdHJ1ZSk7XHJcblx0XHRzb2NrZXQuc2VuZChcIkhlbGxvIFNlcnZlciFcIik7XHJcblx0fSk7XHJcblxyXG5cdHNvY2tldC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuXHRcdGNvbnNvbGUubG9nKFwiUmVjaWV2ZWQ6IFwiLCAoZGF0YSA9IGV2ZW50LmRhdGEpKTtcclxuXHRcdCQoXCIjbWVzc2FnZS1hbGVydC10ZXh0XCIpLnRleHQoZGF0YSk7XHJcblx0XHQkKFwiI21lc3NhZ2UtYWxlcnRcIilcclxuXHRcdFx0LmZhZGVUbygyMDAwLCA1MDApXHJcblx0XHRcdC5zbGlkZVVwKDUwMCwgZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdCQoXCIjbWVzc2FnZS1hbGVydFwiKS5zbGlkZVVwKDUwMCk7XHJcblx0XHRcdH0pO1xyXG5cdH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiB2YWxpZGF0ZUNvbm5lY3Rpb25EYXRhQW5kQ29ubmVjdChhZGRyZXNzLCBwb3J0KSB7XHJcblx0aWYgKCFpc0lwdjQoYWRkcmVzcykpIHtcclxuXHRcdGFsZXJ0KFwiUGxlYXNlIGVudGVyIGEgdmFsaWQgSVB2NCBhZGRyZXNzLlwiKTtcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblx0aWYgKGlzTmFOKHBhcnNlSW50KHBvcnQpKSkge1xyXG5cdFx0YWxlcnQoXCJQbGVhc2UgZW50ZXIgYSB2YWxpZCBwb3J0LlwiKTtcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblxyXG5cdENvbm5lY3QoU2VydmVyQWRkcmVzcy52YWwoKSwgU2VydmVyUG9ydC52YWwoKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIERpc2Nvbm5lY3QoKSB7XHJcblx0aWYgKCEhJChcIiNDb25uZWN0ZWRcIikuYXR0cihcImNoZWNrZWRcIikpIHtcclxuXHRcdCQoXCIjQ29ubmVjdGVkXCIpLmF0dHIoXCJjaGVja2VkXCIsIGZhbHNlKTtcclxuXHRcdHNvY2tldC5jbG9zZSgxMDAwLCBcIlVzZXJcIik7XHJcblx0fVxyXG59XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcblx0KFNlcnZlckFkZHJlc3MgPSAkKFwiI1NlcnZlckFkZHJlc3NcIikpLnZhbChcIjE5Mi4xNjguMS4xMDNcIik7XHJcblx0KFNlcnZlclBvcnQgPSAkKFwiI1NlcnZlclBvcnRcIikpLnZhbChcIjg3NjVcIik7XHJcblx0JChcIiNtZXNzYWdlLWFsZXJ0XCIpLmhpZGUoKTtcclxuXHJcblx0YmxvY2tCZWhhdnMoKTtcclxuXHRuYXZ0YWJzKCk7XHJcblxyXG5cdCQoXCIjY29ubmVjdC1idG5cIikuY2xpY2soKCkgPT4ge1xyXG5cdFx0dmFsaWRhdGVDb25uZWN0aW9uRGF0YUFuZENvbm5lY3QoU2VydmVyQWRkcmVzcy52YWwoKSwgU2VydmVyUG9ydC52YWwoKSk7XHJcblx0fSk7XHJcblxyXG5cdCQoXCIjZGlzY29ubmVjdC1idG5cIikuY2xpY2soKCkgPT4ge1xyXG5cdFx0Y29uc29sZS5sb2coXCJkaXNjb25uZWN0aW5nXCIpO1xyXG5cdFx0RGlzY29ubmVjdCgpO1xyXG5cdH0pO1xyXG5cclxuXHQkKFwiYm9keVwiKS5vbihcImRibGNsaWNrXCIsIFwiI1NlcnZlckFkZHJlc3NcIiwgKGUpID0+IHtcclxuXHRcdGFsZXJ0KGUpO1xyXG5cdH0pO1xyXG5cclxuXHQkKFwiLmJ0bi1wbHVzLCAuYnRuLW1pbnVzXCIpLm9uKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuXHRcdGNvbnN0IGlzTmVnYXRpdmUgPSAkKGUudGFyZ2V0KS5jbG9zZXN0KFwiLmJ0bi1taW51c1wiKS5pcyhcIi5idG4tbWludXNcIik7XHJcblx0XHRjb25zdCBpbnB1dCA9ICQoZS50YXJnZXQpLmNsb3Nlc3QoXCIuaW5wdXQtZ3JvdXBcIikuZmluZChcImlucHV0XCIpO1xyXG5cdFx0aWYgKGlucHV0LmlzKFwiaW5wdXRcIikpIHtcclxuXHRcdFx0aW5wdXRbMF1baXNOZWdhdGl2ZSA/IFwic3RlcERvd25cIiA6IFwic3RlcFVwXCJdKCk7XHJcblx0XHR9XHJcblx0fSk7XHJcbn0pO1xyXG4iXX0=
