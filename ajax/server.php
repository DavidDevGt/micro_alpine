<?php

$pedidos = [
    [
        'producto' => 'Martillo',
        'cantidad' => 2,
        'cliente' => 'Juan Pérez',
        'direccion' => 'Calle Principal 123',
        'NIT' => '123456789',
        'total' => 50.00
    ],
    [
        'producto' => 'Destornillador',
        'cantidad' => 3,
        'cliente' => 'María Gómez',
        'direccion' => 'Avenida Central 456',
        'NIT' => '987654321',
        'total' => 25.00
    ],
    [
        'producto' => 'Taladro',
        'cantidad' => 1,
        'cliente' => 'Pedro Pérez',
        'direccion' => 'Calle Principal 123',
        'NIT' => '123456789',
        'total' => 400.00
    ],
    [
        'producto' => 'Cemento',
        'cantidad' => 10,
        'cliente' => 'María Gómez',
        'direccion' => 'Avenida Central 456',
        'NIT' => '987654321',
        'total' => 1000.00
    ]
];

header('Content-Type: application/json');

$jsonPedidos = json_encode($pedidos);
echo $jsonPedidos;
