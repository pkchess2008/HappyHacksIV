import pyrebase
from collections.abc import MutableMapping

config = {
    "apiKey": "AIzaSyBVEGPm_8MeW1iry85HX3lH-ZXUjvOCQG4",
    "authDomain": "migrant-social-media.firebaseapp.com",
    "projectId": "migrant-social-media",
    "storageBucket": "migrant-social-media.appspot.com",
    "messagingSenderId": "145470124849",
    "appId": "1:145470124849:web:e5d82a3cbdca738828f610",
    "measurementId": "G-QKR0QF8CNZ",
    'databaseURL' : ''
}


firebase = pyrebase.initialize_app(config)
auth = firebase.auth()

email="stephenmaina2995@gmail.com"
password='1234567'

user = auth.create_user_with_email_and_password(email, password)
print (user)