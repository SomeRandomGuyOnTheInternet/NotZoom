# Not Zoom

---

## **Requirements**
- **Node.js**: Ensure you have Node.js installed on your system.
- **Browser**: A modern web browser (e.g., Chrome, Firefox) that supports WebRTC. (iOS browsers are not supported.)

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

---

## **Usage**
1. Open the client in your browser:
   - Navigate to `http://localhost:3001`.
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
