<html>
<head>
<title></title>
</head>
<body>
<?php
function conectarse()
{
	if (!($link=mysqli_connect('localhost','root','1234')))
	{
		exit();
	}
	if (!mysqli_select_db($link,'basecurso'))
	{
		exit();
	}
	return $link;
}
?>
</body>
</html>
    
    