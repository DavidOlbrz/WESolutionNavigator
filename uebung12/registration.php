<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $password = $_POST["password"];

    $file_path = "accounts.txt";

    $file = fopen($file_path, "a");
    if (flock($file, LOCK_EX)) { // lock file
        fwrite($file, "$username | $password\n");

        flock($file, LOCK_UN); // unlock file
        fclose($file);

        header("Location: nr1.html");
        exit();
    } else {
        echo "Fehler beim Sperren der Datei!";
    }
}
?>