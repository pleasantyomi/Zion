/* eslint-disable react/prop-types */
const Button = ({ text, onClick, className }) =>{
    return (
        <button onClick={onClick} type="button" className={`${className} z-[1000] cursor-pointer mx-auto text-lg font-semibold leading-6 text-white bg-blue-900 border-2 border-transparent shadow-sm - rounded-xl hover:bg-transparent hover:text-blue-900 hover:border-blue-900 focus:outline-none `}>
            {text}
        </button>
    )
}
export default Button;