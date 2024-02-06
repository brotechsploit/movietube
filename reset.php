<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="reset.css">
    <title>movietube</title>
</head>
<body>
    <div class="form">
        <form action="reset.php" method="POST">
            <h2>LOGIN</h2>
            <hr>
            
            <div class="dp">
                <label for="email">Email</label>
                <input type="email" name="email" required>
            </div>
            <div class="dp">
                <label for="password">New password</label>
                <input type="password" name="password" required>
            </div>
            <div class="dp">
                <label for="password">Confirm password</label>
                <input type="password" name="password" required>
            </div>
            <div class="dip">
                <input type="submit" name="submit" value="submit" class="joo">
            </div>

        </form>
    </div>
</body>
</html>