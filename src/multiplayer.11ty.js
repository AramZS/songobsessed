class Multiplayer {
	async data() {
		return {
			layout: "layout.11ty.js",
			// permalink: false,
			permalink: "/multiplayer/index.html",
			title: "Multiplayer",
			eleventyExcludeFromCollections: true,
		};
	}

	async render(data) {
		// console.log("Search page", data);
		return /*html*/ `<div>
			<script src="/assets/js/peerjs.min.js"></script>
			<table class="display">
            <tr>
                <td class="title">Status:</td>
                <td class="title">Messages:</td>
            </tr>
            <tr>
                <td>
                    <div id="receiver-id" style="font-weight: bold;" title="Copy this ID to the input on send.html.">ID:</div>
                </td>
                <td>
                    <input type="text" id="sendMessageBox" placeholder="Enter a message..." autofocus="true" />
                    <button type="button" id="sendButton">Send</button>
                    <button type="button" id="clearMsgsButton">Clear Msgs (Local)</button>
                </td>
            </tr>
            <tr>
                <td><div id="status" class="status"></div></td>
                <td><div class="message" id="message"></div></td>
            </tr>
            <tr>
                <td class="display-box standby" id="standby"><h2>Standby</h2></td>
                <td class="display-box hidden" id="go"><h2>Go</h2></td>
            </tr>
            <tr>
                <td class="display-box hidden" id="fade"><h2>Fade</h2></td>
                <td class="display-box hidden" id="off"><h2>All Off</h2></td>
            </tr>
        </table>			
			<script>
			(function () {
                /**
                 * Create the Peer object for our end of the connection.
                 *
                 * Sets up callbacks that handle any events related to our
                 * peer object.
				 * 
				 * via https://jmcker.github.io/Peer-to-Peer-Cue-System/receive.html
				 * connects to https://jmcker.github.io/Peer-to-Peer-Cue-System/send.html
                 */
				var recvId = document.getElementById("receiver-id");
				function initialize() {
                    // Create own peer object with connection to shared PeerJS server
                    peer = new Peer(null, {
                        debug: 2
                    });

                    peer.on('open', function (id) {
                        // Workaround for peer.reconnect deleting previous id
                        if (peer.id === null) {
                            console.log('Received null id from peer open');
                            peer.id = lastPeerId;
                        } else {
                            lastPeerId = peer.id;
                        }

                        console.log('ID: ' + peer.id);
                        recvId.innerHTML = "ID: " + peer.id;
                        status.innerHTML = "Awaiting connection...";
                    });
                    peer.on('connection', function (c) {
                        // Allow only a single connection
                        if (conn && conn.open) {
                            c.on('open', function() {
                                c.send("Already connected to another client");
                                setTimeout(function() { c.close(); }, 500);
                            });
                            return;
                        }

                        conn = c;
                        console.log("Connected to: " + conn.peer);
                        status.innerHTML = "Connected";
                        ready();
                    });
                    peer.on('disconnected', function () {
                        status.innerHTML = "Connection lost. Please reconnect";
                        console.log('Connection lost. Please reconnect');

                        // Workaround for peer.reconnect deleting previous id
                        peer.id = lastPeerId;
                        peer._lastServerId = lastPeerId;
                        peer.reconnect();
                    });
                    peer.on('close', function() {
                        conn = null;
                        status.innerHTML = "Connection destroyed. Please refresh";
                        console.log('Connection destroyed');
                    });
                    peer.on('error', function (err) {
                        console.log(err);
                        alert('' + err);
                    });
                };

                /**
                 * Triggered once a connection has been achieved.
                 * Defines callbacks to handle incoming data and connection events.
                 */
                function ready() {
                    conn.on('data', function (data) {
                        console.log("Data recieved");
                        var cueString = '<span class="cueMsg">Cue: </span>';
                        switch (data) {
                            case 'Go':
                                // go();
                                addMessage(cueString + data);
                                break;
                            case 'Fade':
                                // fade();
                                addMessage(cueString + data);
                                break;
                            case 'Off':
                                // off();
                                addMessage(cueString + data);
                                break;
                            case 'Reset':
                                // reset();
                                addMessage(cueString + data);
                                break;
                            default:
                                addMessage('<span class="peerMsg">Peer: </span>' + data);
                                break;
                        };
                    });
                    conn.on('close', function () {
                        status.innerHTML = "Connection reset<br>Awaiting connection...";
                        conn = null;
                    });
                }

				function addMessage(msg) {
                    var now = new Date();
                    var h = now.getHours();
                    var m = addZero(now.getMinutes());
                    var s = addZero(now.getSeconds());

                    if (h > 12)
                        h -= 12;
                    else if (h === 0)
                        h = 12;

                    function addZero(t) {
                        if (t < 10)
                            t = "0" + t;
                        return t;
                    };

                    message.innerHTML = '<br><span class="msg-time">' + h + ":" + m + ":" + s + "</span>  -  " + msg + message.innerHTML;
                }

				function clearMessages() {
                    message.innerHTML = "";
                    addMessage("Msgs cleared");
                }

                // Listen for enter in message box
                sendMessageBox.addEventListener('keypress', function (e) {
                    var event = e || window.event;
                    var char = event.which || event.keyCode;
                    if (char == '13')
                        sendButton.click();
                });
                // Send message
                sendButton.addEventListener('click', function () {
                    if (conn && conn.open) {
                        var msg = sendMessageBox.value;
                        sendMessageBox.value = "";
                        conn.send(msg);
                        console.log("Sent: " + msg)
                        addMessage('<span class="selfMsg">Self: </span>' + msg);
                    } else {
                        console.log('Connection is closed');
                    }
                });

                // Clear messages box
                clearMsgsButton.addEventListener('click', clearMessages);

                initialize();
			})();
			</script>
		</div>`;
	}
}

module.exports = Multiplayer;
