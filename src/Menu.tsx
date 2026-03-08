import './layout.css'


function Menu() {
    return (
        <div className="menu">
            <table className="menuTable">

                <tr>
                    <th>X</th>
                    <th>Menu</th>
                </tr>

                <tr>
                    <td>{"->"}</td>
                    <td>sign-in</td>
                </tr>
                <tr>
                    <td>{"->"}</td>
                    <td>log-in</td>
                </tr>
                <tr>
                    <td>{"->"}</td>
                    <td>calendar</td>
                </tr>

            </table>
        </div>
    )
}

export default Menu