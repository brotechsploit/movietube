<?php
    include("post.php");
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="signup.css">
    <title>movietube</title>
</head>
<body>
    <div class="form">
        
            <h2>REGISTRATION</h2>
            <hr>
            <form action="" method="POST">
                    <div class="dp">
                        <label for="firstname">Firstname</label>
                        <input type="text" name="fname" required>
                    </div>
                    <div class="dp">
                        <label for="lasttname">Lastname</label>
                        <input type="text" name="lname" required>
                    </div>
                    <div class="dp">
                        <label for="username">Username</label>
                        <input type="text" name="username" required>
                    </div>
                    <div class="dp">
                        <label for="email">Email</label>
                        <input type="email" name="email" required>
                    </div>
                    <div class="dp">
                        <label for="number">Phonenumber</label>
                        <input type="tel" name="number" required>
                    </div>
                    <div class="dp">
                        <label for="gender">Gender</label>
                        <select name="gender" id="gender" class="gender">
                            <option value="">Sex</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="Transgender">Transgender</option>
                            <option value="lgbtq">LGBTQ</option>
                        </select>
                    </div>
                    <div class="dp">
                        <label for="age">Age</label>
                        <input type="number" name="age" required>
                    </div>
                    <div class="dp">
                        <label for="password">password</label>
                        <input type="password" name="password" required>
                    </div>
                    <div class="dop">
                        <p><input type="radio"  required  name="tick">By clicking it symbolizes you have agreed to our terms and condition which are<a href="">Terms and condition</a></p>
                    </div>
                    <div class="dip">
                        <input type="submit" name="submit" value="REGISTER" class="joo">
                    </div>

            </form>
            
    </div>
</body>
</html>
<?php
if($_SERVER["REQUEST_METHOD"] == "POST")
{
        $firstname = $_POST['fname'];
        $lastname = $_POST['lname'];
        $username = $_POST['username'];
        $email = filter_input(INPUT_POST,'email', FILTER_VALIDATE_EMAIL);
        $num = $_POST['number'];
        $gender = $_POST['gender'];
        $age = $_POST['age'];
        $password = $_POST['password'];

        $verify_query =mysqli_query($con,"SELECT Username FROM raj WHERE username ='$username'");
        if(mysqli_num_rows($verify_query) > 0){

            header("location:username.html");
        }else{
            $sql = "INSERT INTO raj(fname,lname,username,email,number,gender,age,password) VALUES('$firstname','$lastname','$username','$email','$num','$gender','$age','$password')";
            mysqli_query($con,$sql);

            header("location:message.html");
        }
        
        
        
    
        if(isset($_POST['tick'])){
            if(!empty($_POST['tick'])){
                $_SESSION['tick']=$_POST['tick'];
            }else{
                if(empty($_POST['tick'])){

                    echo "<script type='text/javascript'>alert('please click on the radio button to proceed)</script>";
                }
            }
        }
}


mysqli_close($con);
?>