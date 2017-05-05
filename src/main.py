from flask import Flask

app = Flask(__name__)


@app.route("/_ajax/hello")
def hello():
    return "Hello world!"
