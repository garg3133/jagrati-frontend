const Footer = () => {
    return (
        <footer>
            <center>
                <div style={{
                    maxWidth: "80%",
                    margin: "auto",
                    overflow: "hidden",
                }}>
                    Jagrati Copyright &copy; {(new Date().getFullYear())}
                </div>
            </center>
        </footer >
    )
}

export default Footer
