import { MapPin } from 'lucide-react';

export default function HotelInfo(){
    return (
        <div className="border-2 border-gray-200 p-2 rounded-md">
            <div className="flex items-center space-x-2">
                <div><MapPin /></div>
                <div>
                    <div className="font-bold text-sm">Hôtel de CHK</div>
                    <div className="text-xs text-gray-500">Angré Cocody Abidjan</div>
                </div>
            </div>
        </div>
    )
}