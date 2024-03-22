from flask import Flask , request , jsonify , make_response
from functools import wraps
import mysql.connector as connector
import jwt

app = Flask(__name__)
app.config["SECRET_KEY"] = "codelu"

connection = connector.connect( user = "root", host = "127.0.0.1" , password = "password", database = "mindmentor")
cursor = connection.cursor()


def token_required(f):
    @wraps(f)
    def decorated(*args , **kwargs):
        token = request.cookies.get("token")
        # print("the token is ", token)

        if token is None:
            token = ""
      
        try:
            payload = jwt.decode(token , app.config["SECRET_KEY"] , algorithms=["HS256"],ignoreExpiration =  True)
        except:
            return ('' , 401)

        return f(*args , **kwargs)
    return decorated



@app.route("/signin" , methods  = ["GET", "POST"])
def signin():
    d = request.json 
    email = d.get("username")
    password = d.get("password")

    cursor.execute(f"select * from users where email = '{email}'")
    data = cursor.fetchone()

    if data == None:
        return (jsonify({"result": 1}), 200)
    
    real_password = data[4]

    if password == real_password:
        token = jwt.encode({"email": email}, app.config['SECRET_KEY'])
        response = make_response(( jsonify({'result':2}) , 200))
        response.set_cookie("token" ,  token)
        return response
    
    else:
        return ( jsonify({'result':  3 }))

@app.route("/signup", methods = ["GET", "POST"])
def signup():
    d = request.json 

    email = d.get("email")
    password = d.get("password")
    username = d.get("username")
    full_name = d.get("full_name")

    cursor.execute(f"insert into users valuess( default , '{full_name}' , '{username}' , '{email}' ,  '{password}' , 0)")
    connection.commit()

    return ( '' , 200)


@app.route('/check_login', methods=["GET"])
def check_login():
    token = request.cookies.get("token")

    if not token:
        token=""

    try:
        payload = jwt.decode(token, app.config["SECRET_KEY"], algorithms=["HS256"],ignoreExpiration=True)
    except jwt.InvalidTokenError:
        return jsonify(loggedIn=True), 401

    
    







    
































if __name__ == "__main__":
    app.run(debug = True)