import pyrebase
from flask import Flask, jsonify,request
from flask_cors import CORS
from flask_socketio import SocketIO,send

app = Flask(__name__)
# app.config['SECRET']="secret!123"
socketio= SocketIO(app, cors_allowed_origins="*")
CORS(app)

@app.route("/api/home", methods=['GET'])
def return_home():
    return jsonify({"message": "Migrants Social Media!"})

config = {
    apiKey: "AIzaSyBVEGPm_8MeW1iry85HX3lH-ZXUjvOCQG4",
    authDomain: "migrant-social-media.firebaseapp.com",
    projectId: "migrant-social-media",
    storageBucket: "migrant-social-media.appspot.com",
    messagingSenderId: "145470124849",
    appId: "1:145470124849:web:e5d82a3cbdca738828f610",
    measurementId: "G-QKR0QF8CNZ"
  }

firebase = pyrebase.initialize_app(config)
auth = firebase.auth()

@app.route('/')
def logout():
    pass

# email="stephenmaina2995@gmail.com"
# password='1234567'

# user = auth.create_user_with_email_and_password(email, password)
# print (user)



@socketio.on('message')
def handle_message(message):
    # emit('reverse', message)
    print("Received message:" + message)
    if message != "User connected":
        send(message,broadcast=True)

if __name__ == "__main__":
    socketio.run(app, host= '0.0.0.0', port=8080)