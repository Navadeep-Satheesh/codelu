from flask import Flask , request , jsonify , make_response,session,redirect,url_for
from datetime import datetime
from functools import wraps
import mysql.connector as connector
import jwt
from langchain.llms import OpenAI
from langchain.chains import ConversationChain
from langchain.chains.conversation.memory import ConversationBufferMemory


openai_api_key = "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"

llm =  OpenAI(openai_api_key = openai_api_key , temperature = 0.6)

memory =  ConversationBufferMemory()

conversation = ConversationChain(llm=llm  ,memory=memory)

app = Flask(__name__)
app.config["SECRET_KEY"] = "codelu"

connection = connector.connect( user = "root", host = "localhost" , password = "jiya", database = "mindmentor")
cursor = connection.cursor()

def connect():
    connection = connector.connect( user = "root", host = "127.0.0.1" , password = "password", database = "mindmentor")
    cursor = connection.cursor()
    return connection , cursor 



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

    connection , cursor =  connect()
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
    cursor.execute(f"insert into friends values('{userid}','{full_name}','{userid}')")
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
        return jsonify({ "loggedIn": False }), 200



    
    
@app.route('/courses',methods=['GET','POST'])
def get_courses():
    # email=session.get('email')

    connection , cursor = connect()
    
    userid = session['userid']
    
    cursor.execute(f"select * from courses where userid='{userid}'")
    courses = cursor.fetchall()
    # course_list = [course[0] for course in courses]
    return jsonify(courses), 200

@app.route("/course_details", methods = ["GET", "POST"])
def course_details():

    connection , cursor = connect()

    d =  request.json 
    userid = session.get("userid")
    course_id = d.get("courseid")

    print("the course is ", course_id)

    cursor.execute(f"select * from courses where courseid = {course_id}")
    course_data = cursor.fetchone()

    cursor.execute(f"select * from tasks where course_id = {course_id}")
    task_data =  cursor.fetchall()

    data = {
        'course_data': course_data , 
        'tasks': task_data
    }

    return jsonify(data) , 200

@app.route("/ask_us", methods = ["GET", "POST"])
def askUs():
    d = request.json 
    query = d.get("query")
    answer = conversation.predict(input  = query )    
    return jsonify({'text':answer , 'sender': 'bot'}) ,  200


@app.route('/dashboard', methods=['GET','POST'])
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
    

@app.route('/communities')
def get_user_communities():
    userid=session.get('userid')
    cursor.execute(f"select cname from community where memberid='{userid}'")
    response_data={
        "cname":[row[0] for row in cursor.fetchall()]
    }
    return jsonify(response_data),200

@app.route('/friends',methods=['POST','DELETE'])
def leaderboard ():
    userid=session.get('userid')
    d=request.json
    method=d.get("method")
    if(method == 'POST'):
        f_username=d.get("username")
        cursor.execute(f"select userid,fullname from users where username='{f_username}'")
        data=cursor.fetchall()
        cursor.execute(f"insert into table friends values('{data[0]}','{data[1]}','{userid}')")
        connection.commit()
        cursor.execute(f"SELECT f.fid, u.username,u.fullname, u.score,u.level FROM friends f JOIN users u ON f.fid = u.userid WHERE u.userid = '{userid}' ORDER BY u.score ASC;")
        friends=cursor.fetchall()
        return jsonify(friends),200
    elif(method=='DELETE'):
        f_username=d.get("username")
        userid=session.get("userid")
        cursor.execute(f"select userid from users where username='{f_username}'")
        fid=cursor.fetchone()
        cursor.execute(f"delete from friends where userid='{userid}'and fid='{fid}'")
        connection.commit()
        cursor.execute(f"SELECT f.fid, u.username,u.fullname, u.score,u.level FROM friends f JOIN users u ON f.fid = u.userid WHERE u.userid = '{userid}' ORDER BY u.score ASC;")
        friends=cursor.fetchall()
        return jsonify(friends),200
        
    
   
    
    
    
    
    

    
    







    
































if __name__ == "__main__":
    app.run(debug = True,host='0.0.0.0')
