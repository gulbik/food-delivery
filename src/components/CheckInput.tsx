type CheckInputProps = {
    label: string;
    icon?: React.ReactNode;
    iconColor?: '#eb4796' | '#f47b0b' | '#FDC83B';
    checked?: boolean;
    onChange?: () => void;
    name: string;
};

const CheckInput: React.FC<CheckInputProps> = ({ label, icon, iconColor, checked, onChange, name }) => {
    return (
        <div className="form-check my-3">
            <input
                className="form-check-input"
                type="radio"
                name={name}
                id={label}
                checked={checked}
                onChange={onChange}
            />
            {icon && (
                <div className="icon-div" style={{ backgroundColor: iconColor }}>
                    {icon}
                </div>
            )}
            <label className="form-check-label" htmlFor={label}>
                {label}
            </label>
        </div>
    );
};

export default CheckInput;
