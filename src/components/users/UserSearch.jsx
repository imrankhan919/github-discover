import {FaSearch} from 'react-icons/fa'
import {useState, useContext} from 'react'
import GithubContext from '../../context/github/GithubContext'
import AlertContext from '../../context/alert/AlertContext'

function UserSearch() {
   
    const {users, searchUsers , clearUsers} = useContext(GithubContext)

    const {setAlert} = useContext(AlertContext)

    const [text, setText] = useState('')

    const handleChange = (e) => {
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(text === ""){
            setAlert('Please Enter Something' , 'error')
        }else{
           
           searchUsers(text)
           setText('')
        }
    }
  
    return (
      <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8" >
          <div>
              <form onSubmit={handleSubmit} >
                  <div className="form-control">
                      <div className="relative">
                          <input type="text" 
                          className="w-full pr-40 bg-gray-200 input input-lg text-black" 
                           placeholder="Search Here"
                           onChange = {handleChange}
                           />
                           <button type="submit" className=" absolute top-0 right-0 rounded-l-none w-36 border-none btn btn-lg bg-gradient-to-r from-gray-700 via-gray-900 to-black" > <FaSearch className='mr-2' /> Search</button>
                      </div>
                  </div>
              </form>
          </div>
          {
              users.length > 0 &&(
                  <div>
                      <button  className='btn btn-ghost btn-lg' onClick={clearUsers} >Clear</button>
                  </div>
              )
          }
      </div>
    )
}

export default UserSearch
