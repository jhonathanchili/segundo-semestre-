<?php
include 'cn.php';
    $nombre_1 =$_POST['nombre'];
    $email=$_POST['correo'];
    $telefono=$_POST['telefono'];
    $apello_1=$_POST['apellido'];
            $sql="INSERT INTO  registro (correo, nombre, apellido, telefono) 
            VALUES ('$correo','$nombre','$apellido','$telefono',)";
   
            $resultado = mysqli_query ($conn, $sql);
            if (!$resultado) {
                echo 'el asiento ya esta ocupado'
                ;
            }else{
                $cont = file_get_contents("index.html");
                echo $cont;
            }
            $conn->close();
?>

     