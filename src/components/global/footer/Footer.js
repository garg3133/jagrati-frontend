const Footer = () => {
    return (
        <footer style={{
                textAlign: "center",
                padding: "10px",
                overflow: "hidden",
                backgroundColor: "black",
                color: "white",
            }}>
            Jagrati Copyright &copy; {(new Date().getFullYear())}
        </footer >
    )
}

export default Footer
