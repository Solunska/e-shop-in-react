export default function Loading({text}) {
    return <div className='loadingContainer'>
        <p className='loading'>{text}</p>
        <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
    </div>;
}