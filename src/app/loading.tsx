import React from "react";

const Loading = () => {
	return (
		<div className="w-screen h-screen flex justify-center items-center bg-black">
			<div className="loader border-t-transparent border-white border-4 rounded-full h-[11vw] w-[11vw] animate-spin" />
		</div>
	);
};

export default Loading;
