<?php
    include("config.php")
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="signup.css">
    <title>Brotechsploit</title>
</head>
<body>
    <section>
        <div class="form">
            
                <h1>REGSITRATION</h1>
                <hr>
            <form action="signup.php" method="POST">
                <div class="container">
                    <label for="Firstname">Firstname</label>
                    <input type="text" name="fname" required autocomplete="off">
                </div>
                <div class="container">
                    <label for="lastname">Lastname</label>
                    <input type="text" name="lname" required autocomplete="off">
                </div>
                <div class="container">
                    <label for="username">Username</label>
                    <input type="text" name="username" required autocomplete="off">
                </div>
                <div class="container">
                    <label for="email">Email</label>
                    <input type="email" name="email" required accept="@gmail.com,@yahoo.com" autocomplete="off">
                </div>
                <div class="container">
                    <label for="gender">Gender</label>
                    <select name="gender" id="" class="kilo" autocomplete="off">
                        <option value="">Sex</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="Rather not say">Rather not say</option>
                        <option value="Transgender">Transgender</option>
                    </select>
                </div>
                <div class="container">
                    <label for="number">Number</label>
                    <input type="tel" name="number" required autocomplete="off">
                </div>
                <div class="container">
                    <label for="age">Age</label>
                    <input type="number" name="age" required autocomplete="off">
                </div>
                
                <div class="container">
                    <label for="password">Password</label>
                    <input type="password" name="password" required autocomplete="off">
                </div>
                <div class="colect">
                    <p><input type="radio" name="juma" required>By click you agree to the conditions and terms of our site<a href="">TermsConditions</a></p>
                </div>
                <div class="view">
                    <input type="submit" value="REGISTER" name="submit"  class="oloo">
                </div>
            </form>
        </div>
    </section>
</body>
</html>
<?php

    if($_SERVER["REQUEST_METHOD"] =="POST"){
        $firstname =$_POST['fname'];
        $lastname =$_POST['lname'];
        $username =$_POST['username'];
        $email =filter_input(INPUT_POST,'email',FILTER_VALIDATE_EMAIL);
        $gender =$_POST['gender'];
        $number =$_POST['number'];
        $age =$_POST['age'];
        $password =$_POST['password'];


        if(empty($firstname)){

            echo "<script type='text/javascript>alert('please enter your firstname')";
            
        }elseif(empty($email)){

            echo "<script type='text/javascript'>alert('please enter your email')";
        }else{

            $verify_query=mysqli_query($con,"SELECT username FROM raj WHERE username='$username'");
            if(mysqli_num_rows($verify_query) !=0){

                header("location: username.html");
            }else{
                $sql="INSERT INTO raj(fname,lname,username,email,gender,number,age,password)values('$firstname','$lastname','$username','$email','$gender','$number','$age','$password')";

                mysqli_query($con,$sql);{
                    header("location :lognow.html");

                }



            }

            
        }
        if(isset($_GET['submit'])){
            if(!empty($_GET['juma'])){
                $_SESSION['juma'] = $_GET['juma'];
            }else if(empty($_GET['juma'])){
                echo "<script type='text/javascript>alert('please click on the radio button to proceed')</script>";
            }
        }
    }

    mysqli_close($con)
?>


