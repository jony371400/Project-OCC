//#region ROS
var ros = new ROSLIB.Ros({
    // url: 'ws://10.10.0.96:9090'
    url: 'ws://localhost:9090'
});
//#endregion

//#region Websocket
ros.on('connection', function () {
    console.log('Connected to websocket server.');
});

ros.on('error', function (error) {
    console.log('Error connecting to websocket server: ', error);
});

ros.on('close', function () {
    console.log('Connection to websocket server closed.');
});
//#endregion

//#region TOPIC
// Publishing a Topic
var cmdVel = new ROSLIB.Topic({
    ros: ros,
    // name: 'ls50_velocity_controller/cmd_vel',
    name: 'turtle1/cmd_vel',
    messageType: 'geometry_msgs/Twist'
});

// Create a Msg
var twist = new ROSLIB.Message({
    linear: {
        x: 0.0,
        y: 0.0,
        z: 0.0
    },
    angular: {
        x: -0.0,
        y: -0.0,
        z: -0.0
    }
});

// Subscribing to a Topic
var listener = new ROSLIB.Topic({
    ros: ros,
    name: '/chatter',
    messageType: 'std_msgs/String'
});
//#endregion

//#region SERVICE
//Create Request
var request = new ROSLIB.ServiceRequest({
});

// Create Service
var Service_Clear = new ROSLIB.Service({
    ros: ros,
    name: '/clear',
    serviceType: 'rospy_tutorials/Clear'
});
//#endregion

//#region Function
function HandShake()//在点击”Publish”按钮后发布消息，并对消息进行更改
{
    twist.linear.x = parseInt(Y_Data) / 100
    twist.linear.y = 0.0
    twist.linear.z = 0.0
    twist.angular.x = 0.0
    twist.angular.y = 0.0
    twist.angular.z = (parseInt(X_Data) / 100) * -1
    cmdVel.publish(twist)   //发布twist消息
    console.log('Publish Success !')
}

function Subscribe()//在点击”Subscribe”按钮后订阅'/chatter'的消息，并将其显示到网页中
{
    listener.subscribe(function (message) {
        document.getElementById("output").innerHTML = ('Received message on ' + listener.name + ': ' + message.data);
    });
}

function Unsubscribe()//在点击”Unsubscribe”按钮后取消订阅'/chatter'的消息
{
    listener.unsubscribe();
}

function Call_ClearService() {
    Service_Clear.callService(request, function (result) {
        console.log('Clear Success!')
    });
}
//#endregion

//#region JOY1
let X_Data
let Y_Data

var Joy1 = new JoyStick('joy1Div', {}, function (stickData) {
    // joy1IinputPosX.value = stickData.xPosition;
    // joy1InputPosY.value = stickData.yPosition;
    // joy1Direzione.value = stickData.cardinalDirection;
    X_Data = stickData.x;
    Y_Data = stickData.y;

    console.log('Stick X : ', stickData.x)
    console.log('Stick Y : ', stickData.y)

    HandShake()
});
//#endregion