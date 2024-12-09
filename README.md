# Not Zoom

---

## **Requirements**
- **Node.js**: Ensure you have Node.js installed on your system.
- **Browser**: A modern web browser (e.g., Chrome, Firefox) that supports WebRTC.

---

## **Setup Instructions**

### **1. Clone the Repository**
```bash
git clone https://github.com/SomeRandomGuyOnTheInternet/NotZoom.git
cd NotZoom/
```

### **2. Install Dependencies**
Navigate to the `server/` directory and install Node.js dependencies:
```bash
cd server/
npm install
```

### **3. Start the Server**
Run the signaling server:
```bash
node index.js
```
The server will run at `http://localhost:3001`.

### **4. Serve the Client**
You can either:

1. Use any local HTTP server (e.g., Python's HTTP server, Live Server in VS Code) to serve the `client/` directory:
   ```bash
   cd client/
   python3 -m http.server 5500
   ```
   This will serve the client at `http://localhost:5500`.

2. Alternatively, you can open the `client.html` file directly in your browser by navigating to the `client/` directory and opening the file. However, some browser features may be restricted due to CORS (Cross-Origin Resource Sharing) policies when using this method. Using a local server is recommended for full functionality.

---

## **Usage**
1. Open the client in your browser:
   - Navigate to `http://localhost:5500/client.html`.
2. Enter a room name in the input field and click "Connect".
3. Share the room name with other users to join the same room and start a video call.

---

## **Technology Stack**
- **Client**:
  - HTML, JavaScript
  - WebRTC for peer-to-peer communication
- **Server**:
  - Node.js
  - Express.js
  - Socket.IO for signaling
- **NAT Traversal**:
  - Google STUN servers (`stun:stun.l.google.com:19302`)
