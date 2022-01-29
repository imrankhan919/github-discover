import spinner from './assets/Spinner.gif'

function Spinner() {
    return (
        <div w-100 mt-20>
            <img src={spinner} alt="Loading.." className='text-center mx-auto' />
        </div>
    )
}

export default Spinner
