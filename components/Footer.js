var style = {
    backgroundColor: "#000",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "100px",
    width: "100%",
    zIndex: '100000',
    fontSize: '0.8rem',
    fontWeight: '100'
}

var phantom = {
    display: 'block',
    padding: '20px',
    height: '60px',
    width: '100%',
}

function Footer({ children }) {
    return (
        <div>
            <div style={phantom} />
            <div style={style}>
                {children}
            </div>
        </div>
    )
}

export default Footer