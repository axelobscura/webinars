var style = {
    backgroundColor: "transparent",
    textAlign: "center",
    padding: "20px 0",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "90px",
    width: "100%",
    zIndex: '100000',
    fontSize: '0.7rem',
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