import { ToolItemProps } from "../types/types";
import {react , flutter , supabase , firebase , vercel , vscode} from "@/public/assets/images";
const toolItems: ToolItemProps[] = [
    {
        title: "Flutter",
        description: "For Creating Mobile Interactive User-Friendly Interfaces",
        link: "https://flutter.dev",
        image: flutter,
    },
    {
        title: "React",
        description: "For Creating Web Interactive User-Friendly Interfaces",
        link: "https://react.dev",
        image: react,
    },
    {
        title: "Firebase",
        description: "For My Apps Backend",
        link: "https://firebase.google.com",
        image: firebase,

    },
    {
        title: "Supabase",
        description: "For Authentication & Databases",
        link: "https://supabase.com",
        image: supabase,
    },
    {
        title: "Vercel",
        description: "For Deploying My Apps",
        link: "https://vercel.com",
        image: vercel,
    },
    {
        title: "VSCode",
        description: "Where I Spend Most Of My Time Writing Code & Crying",
        link: "https://code.visualstudio.com",
        image: vscode,

    },

];

export default toolItems;