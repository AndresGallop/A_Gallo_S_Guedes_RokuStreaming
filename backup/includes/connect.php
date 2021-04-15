<?php
    $db_dsn = array(
        'host' => 'localhost',
        'dbname' => 'db_rokuStreaming',
        'charset' => 'utf8'
    );

    $dsn = 'mysql:'.http_build_query($db_dsn, '', ';');

    //This is the DB credentials

    $db_user = 'root';
    $db_pass = ''; // Mac = "root"  Windows = "it goes empty"

    try {  // This is a bunch of code to make the connection with the server php database
        $pdo = new PDO($dsn, $db_user, $db_pass);//EL PDO ES COMO UN PASE A LA BASE DE DATOS O EL BAR, ESTO SE CONECTA CON LA BASE DE DATOS,
                                                 //ASI QUE SIEMPRE QUE VAYAMOS A HACER UN REQUEST COMO EN LA INDEX.PHP VAMOS A USAR ESE PDO PARA
                                                 //ACCEDER A LA BASE DE DATOS
       // var_dump($pdo);
        //echo (in this case) is likea console.log
        //echo "you're in! enjoy the show";
    } catch (PDOException $exception) {
        echo 'Connection Error:'.$exception->getMessage();
        exit();
    }
