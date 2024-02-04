<?php

    include("config.php")

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="login.css">
    <title>Brotechsploit</title>
</head>
<body>
    <section>
        <div class="nav">
            <div class="dc">
                <div class="header">
                    <div class="navcenter">
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li><a href="index.html">All</a></li>
                            <li><a href="about.html">About</a></li>
                            <li><a href="contacts.html">Contact</a></li>
                            <li><a href="image.html">Images</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="content">
                <h6>Brotechsploit</h6>
                <p>Brotechsploit is a recent site which has been developed to<br>watch and download movies it also offers<span>aviriety of series  action, <br> soaps and commedy</span>visit our site to view our content</p>
            </div>
            <div class="form">
                <form action="login.php" method="POST">
                    <h1>LOGIN</h1>
                    <hr>
                    <div class="container">
                        <label for="email">Email</label>
                        <input type="email" name="email" required accept="@gmail.com,@yahoo.com">
                    </div>
                    <div class="container">
                        <label for="password">Password</label>
                        <input type="password" name="password" required>
                    </div>
                    <div class="viny">
                        <h4>Don't have an account ?<a href="signup.html">Sign in</a></h4>
                    </div>
                    <div class="juu">
                        <a href="">Forgotten password ?</a>
                    </div>
                    <div class="view">
                        <input type="submit" value="LOGIN" name="login" id="login" class="oloo">
                    </div>
                </form>
            </div>
        </div>
        
    </section>
</body>
</html>
<?php
    if($_SERVER["REQUEST_METHOD"] =="POST"){
        $email =filter_input(INPUT_POST,'email',FILTER_VALIDATE_EMAIL);
        $password=filter_input(INPUT_POST,'password',FILTER_SANITIZE_SPECIAL_CHARS);


        if(!empty($email) && !empty($password) && !is_numeric($email)){
            $query ="SELECT * FROM raj where email='$email' and password='$password'";
            $result=mysqli_query($con,$query);

            if($result){

                if($result && mysqli_num_rows($result) >0){

                    $user_data=mysqli_fetch_assoc($result);
                    
                        if($user_data['password'] ==$password);{

                            header("location:secondpage.html");
                        }
                    
                }else{

                    header("location:wrong.html");
                }
            }
        }
    }

?>