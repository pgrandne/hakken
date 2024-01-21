import {
	useContractWrite,
	usePrepareContractWrite,
	useWaitForTransaction,
} from "wagmi";
import { ABI_Faucet } from "../../../utils/ABI";
import { FaucetContract } from "../../../utils/contract";
import { toast } from "react-toastify";

export const Faucet = () => {
	const notify = () => toast("Transaction confirmed!");
	const { data, isLoading, isSuccess, write } = useContractWrite({
		address: FaucetContract,
		abi: ABI_Faucet,
		functionName: "claim",
	});
	const { data: receipt, isLoading: isPending } = useWaitForTransaction({
		hash: data?.hash,
		onSuccess(receipt) {
			notify();
		},
	});

	return (
		<div className=" w-full">
			<button className="custom-button w-full" onClick={() => write()}>
				Claim
			</button>
			{isLoading && <div>Check Wallet</div>}
			{isSuccess && <div>Transaction: {JSON.stringify(data)}</div>}
		</div>
	);
};
