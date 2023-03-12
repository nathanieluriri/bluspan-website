from flask import Flask , render_template
app=Flask(__name__)

@app.route("/")
@app.route("/home")
def home():
    return render_template("index.html")


@app.route("/services")
@app.route("/industries-we-serve")
def industriesWeServe():
    return render_template("industries-we-serve.html")
    
if __name__ == '__main__':
    app.run(debug=True)
