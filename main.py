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
    
@app.route("/about")
def about():
    return render_template('aboutus.html')

@app.route("/values")
def values():
    return render_template('values.html')

if __name__ == '__main__':
    app.run(debug=True,host='0.0.0.0')
