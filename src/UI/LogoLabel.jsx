export default function LogoLabel({ logo, label, containerClass }) {
    return <div className={containerClass}>
        <img src={logo} alt="comfort icon" />
        <p>{label}</p>
    </div>
}