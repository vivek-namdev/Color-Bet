import "@solana/wallet-adapter-react-ui/styles.css";
import { MenuIcon } from "lucide-react";
import ShowSol from "../ShowSol";
import React from "react";
import {
	Drawer,
	DrawerContent,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import logo from "@/assets/logo.png";
import ShowPoints from "../ShowPoints";

const Header = () => {
	return (
		<div className="w-full h-[6rem] fixed flex justify-center z-10">
			<div className="h-full w-[95%] xl:w-[85%] flex items-center justify-between p-4">
				<Drawer direction="left">
					<DrawerTrigger className="block sm:hidden">
						<MenuIcon className="w-8 h-8 text-white cursor-pointer" />
					</DrawerTrigger>
					<DrawerContent className="block sm:hidden left-0 right-auto h-full w-[300px] bg-[#121111]">
						<DrawerHeader>
							<Link href={"/"} className="flex items-center gap-2 mx-auto">
								<Avatar>
									<AvatarImage src={logo.src} className="object-cover" />
									<AvatarFallback>Color Bet</AvatarFallback>
								</Avatar>
								<DrawerTitle className="text-white text-3xl font-bold princess-sofia-regular">
									Color Bet
								</DrawerTitle>
							</Link>
						</DrawerHeader>
						<div className="w-[50%] mx-auto flex items-center gap-2">
							Points: <ShowPoints />
						</div>
					</DrawerContent>
				</Drawer>
				<Link href={"/"} className="sm:flex items-center hidden">
					<Avatar>
						<AvatarImage src={logo.src} className="object-cover" />
						<AvatarFallback>Color Bet</AvatarFallback>
					</Avatar>
					<h1 className="text-white text-3xl font-bold princess-sofia-regular hidden sm:block">
						Color Bet
					</h1>
				</Link>

				<div className="h-full flex gap-8 items-center">
					<div className="sm:block hidden">
						<ShowPoints />
					</div>
					<ShowSol />
				</div>
			</div>
		</div>
	);
};

export default Header;
