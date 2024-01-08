from flask import Flask, jsonify,request
from flask_cors import CORS
from flask_socketio import SocketIO,send

app = Flask(__name__)
app.config['SECRET']="secret!123"
socketio= SocketIO(app, cors_allowed_origins="*")
CORS(app)

@app.route("/api/home", methods=['GET'])
def return_home():
    return jsonify({"message": "Migrants Social Media!"})

@socketio.on('message')
def handle_message(message):
    # emit('reverse', message)
    print("Received message:" + message)
    if message != "User connected":
        send(message,broadcast=True)

if __name__ == "__main__":
    socketio.run(app, host= '0.0.0.0', port=8080)