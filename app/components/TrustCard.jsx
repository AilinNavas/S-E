import { CheckCircle } from 'lucide-react';

const TrustCard = ({ icon: Icon, title, description, benefits = [] }) => {
    return (
        <div className="bg-white border-none shadow-sm p-6 flex flex-col items-center text-center gap-4 font-inter">
            <div className="rounded-full bg-[#3c8dbc]/10 p-4">
                <Icon className="h-8 w-8 text-[#3c8dbc]" />
            </div>
            <h3 className="text-2xl text-[#0a2a54]">{title}</h3>
            <p className="text-[#5a6065] text-lg">{description}</p>
            <ul className="mt-4 space-y-2">
                {benefits.map((benefit, index) => (
                    <li key={index} className="flex justify-start items-center gap-2 text-[#5a6065] text-lg">
                        <CheckCircle className="h-4 w-4 text-[#3c8dbc]" />
                        {benefit}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TrustCard;
