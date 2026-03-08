import './layout.css'


function Header() {

    return (
        <div className='header glass-header'>
            <div className='Menu'>
                     |||
            </div>

            <div className='time'>
                {Date.now()}
            </div>
        </div>
    )
}

export default Header