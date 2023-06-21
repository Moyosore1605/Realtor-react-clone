import { useLocation, useNavigate } from "react-router-dom"


const Home = ()=>{
    const location = useLocation()
    const navigate = useNavigate()

    function pathMatchRoute(route){
        if (route === location.pathname) {
            return true;
        }
    }


    return(
    <div className="bg-white border-b shadow-sm sticky top-0 z-20">
        <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
            <div>
                <img src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg" alt="" className="h-5 cursor-pointer" 
                onClick={()=>navigate('/')}/>
            </div>
            <div>
                <ul className="flex space-x-10">
                    <li onClick={()=>navigate('/')} className={`cursor-pointer py-3 text-sm font-semibold border-b-[3px] ${pathMatchRoute('/') ?'text-black border-b-red-500' 
                    : 'text-gray-400 border-b-transparent'}`}>Home</li>
                    <li onClick={()=>navigate('/offers')} className={`cursor-pointer py-3 text-sm font-semibold border-b-[3px] ${pathMatchRoute('/offers') ?'text-black border-b-red-500' 
                    : 'text-gray-400 border-b-transparent'}`}>Offers</li>
                    <li onClick={()=>navigate('/login')} className={`cursor-pointer py-3 text-sm font-semibold border-b-[3px] ${pathMatchRoute('/login') ?'text-black border-b-red-500' 
                    : 'text-gray-400 border-b-transparent'}`}>Sign in</li>
                </ul>
            </div>
        </header>
    </div>
    )
}

export default Home