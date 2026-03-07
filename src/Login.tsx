import {Routes, Route} from 'react-router-dom'
import Sky from './Home'



function login() {

    return (
        <Routes>
            <Route path='/' element={<Sky />}>

            </Route>
        </Routes>
    )
}

export default login