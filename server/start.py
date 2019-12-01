from bottle import Bottle, response
app = Bottle(__name__)


@app.hook('after_request')
def enable_cors():
    response.headers['Access-Control-Allow-Origin'] = '*'

@app.route("/")
def hello():
    
    return {"name":"Nikita",
            "age": 21}

if __name__ == "__main__":
    app.run(host='127.0.0.1', port=5050)