export default function NotFound({ img, label, text, explanation }) {
    return <div className='loadingContainer'>
        <img src={img} alt="product not found image" />
        <div className='text'>
            <p className='notFound'>{label}</p>
            <p className='notFound'>{text}</p>
            <p className='notFound'>{explanation}</p>
        </div>
    </div>;
}