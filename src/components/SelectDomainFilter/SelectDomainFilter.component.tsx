interface SelectProps {
    name: string;
    options: string[];
}

export const SelectDomainFilter = ({ name, options }: SelectProps) => (
    <select name={name} multiple>
        {options.map(option => (
            <option value={option} key={option}>{option}</option>
        ))}
    </select>
);