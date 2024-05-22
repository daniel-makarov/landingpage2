import {QuestionMarkCircledIcon, Pencil1Icon} from "@radix-ui/react-icons";
import {Handshake, PhoneCall, Database, User} from "lucide-react";

export const features = [
    {
        title: "Tailored AI Receptionists",
        description: "Start by completing a simple questionnaire about your business. Our platform uses your responses to create a customized AI receptionist.",
        icon: <User className="w-12 h-12"/>,
    },
    {
        title: "Editable AI Prompts",
        description: "Once your AI receptionist is set up, you can easily edit and refine the prompts to better match your business’s needs and tone.",
        icon: <Pencil1Icon className="w-12 h-12"/>,
    },
    {
        title: "Call Management",
        description: "View detailed call logs to track interactions and record calls for quality assurance and training purposes.",
        icon: <Database className="w-12 h-12"/>,
    },
    {
        title: "Dedicated Business Number",
        description: "Receive a dedicated phone number for your AI receptionist. Use it as your main business line or forward calls to it, ensuring you never miss a client call.",
        icon: <PhoneCall className="w-12 h-12"/>,
    }
];