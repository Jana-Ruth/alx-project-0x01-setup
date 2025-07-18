interface ButtonProps {
    title: string
}

const Button: React.FC<ButtonProps> = ({title}) => {
    return(
        <div className="bg-blue-400 px-2 py-1 text-2xl rounded-2xl">{title}</div>
    )
}

export default Button