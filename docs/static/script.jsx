const app = document.getElementById("app")

function Header({ title }) {
    return <h1>{title ? title : "Default title"}</h1>
}

function HomePage() {
    const menu = ["Home", "About", "Contact"]

    return (
        <div>
            <Header title="Welcome to Next Read!" />
            <ul>
                {menu.map((name) => (
                <li key={name}><a href="#">{name}</a></li>
                ))}
            </ul>

            <footer>
                <p>&copy; 2023 Rylan Turner. All rights reserved.</p>
            </footer>
        </div>
    )
}

ReactDOM.render(<HomePage />, app)
