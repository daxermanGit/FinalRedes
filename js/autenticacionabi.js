var AutenticacionABI = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "_usuario",
				"type": "string"
			},
			{
				"name": "_contrasena",
				"type": "string"
			}
		],
		"name": "iniciarSesion",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_nombre",
				"type": "string"
			},
			{
				"name": "_apellido",
				"type": "string"
			},
			{
				"name": "_identificacion",
				"type": "string"
			},
			{
				"name": "_email",
				"type": "string"
			},
			{
				"name": "_usuario",
				"type": "string"
			},
			{
				"name": "_contrasena",
				"type": "string"
			},
			{
				"name": "_edad",
				"type": "uint256"
			}
		],
		"name": "registrarse",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "_nombre",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "_apellido",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "_identificacion",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "_email",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "_usuario",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "_contrasena",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "_edad",
				"type": "uint256"
			}
		],
		"name": "NewUser",
		"type": "event"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "usuarios",
		"outputs": [
			{
				"name": "nombre",
				"type": "string"
			},
			{
				"name": "apellido",
				"type": "string"
			},
			{
				"name": "identificacion",
				"type": "string"
			},
			{
				"name": "email",
				"type": "string"
			},
			{
				"name": "usuario",
				"type": "string"
			},
			{
				"name": "contrasena",
				"type": "uint256"
			},
			{
				"name": "edad",
				"type": "uint256"
			},
			{
				"name": "clave",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]