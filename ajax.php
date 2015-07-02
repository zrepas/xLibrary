<?php

/**
* @Fejlesztő  			:	Czöndör Gábor
* @Készült  			:	-
* @Alkalmazás neve		:	-
* @Modul neve			:	-
* @Web					:	-
* @Mail					:	-
* @Verzió				:	-
* @Utolsó módosítás 	:	-
* @Karakter kódolás		:	UTF-8
* @Megjegyzés			:	-
**/


$Data = array
(
	0	=>	'a',
	1	=>	'b',
	2	=>	'c',
	3	=>	'd',
	4	=>	'e',
	5	=>	'f',
	6	=>	'g',
	7	=>	'h',
	8	=>	'i',
	9	=>	'j',
	10	=>	'k'
);


header('HTTP/1.1 200 OK');
header('Content-Type: application/json; charset=utf-8');
header('Content-Disposition: attachment; filename="data.json"');

print json_encode($Data);

?>