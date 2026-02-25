function Button({ children, onClick, variant = 'primary', ...props }) {
    const baseClasses = 'btn';
    const variantClass = `btn-${variant}`;
    const buttonClasses = `${baseClasses} ${variantClass}`;

    return (
        <button className={buttonClasses} onClick={onClick} {...props}>
            {children}
        </button>
    );
}

export default Button;