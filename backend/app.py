from flask import Flask , request , jsonify , make_response,session,redirect,url_for
from datetime import datetime
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
    email = d.get("email")
    password = d.get("password")

    cursor.execute(f"select * from users where email = '{email}'")
    data = cursor.fetchone()
    userid=data[0]

    if data == None:
        return (jsonify({"result": 1}), 200)
    
    real_password = data[4]
    

    if password == real_password:
        token = jwt.encode({"email": email}, app.config['SECRET_KEY'])
        response = make_response(( jsonify({'result':2}) , 200))
        response.set_cookie("token" ,  token)
        session['email']=email
        session['password']=password
        session['userid']=userid
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
    cursor.execute(f"select userid from users where email='{email}'")
    userid=cursor.fetchone()
    
    session['email']=email
    session['password']=password
    session['userid']=userid

    return ( '' , 200)


@app.route('/check_login', methods=["GET", "POST"])
def check_login():
    token = request.cookies.get("token")

    if not token:
        token=""

    try:
        payload = jwt.decode(token, app.config["SECRET_KEY"], algorithms=["HS256"],ignoreExpiration=True)
        return jsonify({ "loggedIn": True }) , 200
    except jwt.InvalidTokenError:
        return jsonify(loggedIn=True), 401
    
    
# @app.route('/courses',methods=['GET','POST'])
# def get_courses():
#     email=session.get('email')
#     cursor.execute(f"select userid from users where email='{email}'")
#     userid=cursor.fetchone()
#     cursor.execute(f"select coursename from courses where userid='{userid}'")
#     courses = cursor.fetchall()
#     course_list = [course[0] for course in courses]
#     return jsonify({'courses': course_list}), 200

@app.route('/dashboard')
def dashboard():
    email = session.get('email')

    if email:
        cursor.execute(f"SELECT userid, username,score,level FROM users WHERE email='{email}'")
        user_data = cursor.fetchone()
        userid=user_data[0]

        if user_data:
            # Fetch courses associated with the user from the database
            cursor.execute(f"SELECT coursename FROM courses WHERE userid='{userid}'")
            courses = cursor.fetchall()
            
            current=current_date = datetime.now().date()

            # Fetch tasks associated with the user from the database (Assuming you have a tasks table)
            cursor.execute(f"SELECT task_name FROM tasks WHERE userid='{userid}'and sub_date='{current}'")
            tasks = cursor.fetchall()

            # Construct a JSON response with the fetched data
            response_data = {
                'username': user_data[1],
                'email':email,
                'score':user_data[2],
                'level':user_data[3],
                'courses': [course[0] for course in courses],
                'tasks': [task[0] for task in tasks]
            }

            return jsonify(response_data), 200
        else:
            # Handle case where user data is not found
            return jsonify({'message': 'User data not found'}), 404
    else:
        # Handle case where user is not logged in
        return jsonify({'message': 'User not logged in'}), 401
    
    
        

    
    







    
































if __name__ == "__main__":
    app.run(debug = True)