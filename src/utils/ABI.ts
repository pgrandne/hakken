export const ABI_Faucet = [
	{
		inputs: [
			{
				internalType: 'contract IERC20WithDecimals',
				name: '_token',
				type: 'address',
			},
		],
		stateMutability: 'nonpayable',
		type: 'constructor',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'claimer',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'when',
				type: 'uint256',
			},
		],
		name: 'Claimed',
		type: 'event',
	},
	{
		inputs: [],
		name: 'claim',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'token',
		outputs: [
			{
				internalType: 'contract IERC20WithDecimals',
				name: '',
				type: 'address',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
]
