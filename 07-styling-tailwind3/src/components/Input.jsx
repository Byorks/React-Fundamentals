export default function Input ({ label, invalid, ...props }) {
    let labelClasses = 'block mb-2 text-xs font-bold tracking-wide uppercase';
    let inputClass = 'w-full px-3 py-2 leading-tight  border rounded shadow';

    if (invalid) { 
        labelClasses += ' text-red-400';
        inputClass += ' bg-red-100 border-red-300 text-red-500'
    } else {
        labelClasses += ' text-stone-300'
         inputClass += ' bg-stone-300 text-gray-700'
    }

    return(
        <p>
            <label className={labelClasses}>{label}</label>
             <input className={inputClass} {...props} />
        </p>
    ); s
}