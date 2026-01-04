import type { Season } from '@/features/leagues/types';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/shared/ui/select';

type SeasonSelectProps = {
    data: Season[];
    placeholder: string;
    onChange: (value: number) => void;
};

const SeasonSelect = ({ data, placeholder, onChange }: SeasonSelectProps) => {
    return (
        <Select onValueChange={(value) => onChange(Number(value))}>
            <SelectTrigger className="w-32">
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
                {data.map((season) => (
                    <SelectItem key={season.id} value={String(season.id)}>
                        {season.name}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
};

export default SeasonSelect;
