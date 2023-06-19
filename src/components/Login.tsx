// import humanResourceImg from '../assets/human-resources.png'

function Login() {
  return (
    <div className='grid h-screen w-full'>
        {/* <div className='hidden sm:block'> 
            <img className='w-full h-full object-cover' src={humanResourceImg} alt="" />
        </div> */}

        <div className='bg-gray-800 flex flex-col justify-center'>
            <form className='max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg'>
                <h2 className='text-4xl dark: text-white font-bold text-center'>Sign In</h2>
                <div className='flex flex-col py-2 text-gray-400'>
                    <label>Username</label>
                    <input className='rounded-lg mt-2 p-2 focus: border-blue-500 focus: bg-gray-800 focus: outline-none' type="text" />
                </div>

                <div className='flex flex-col py-2 text-gray-400'>
                    <label>Password</label>
                    <input className='rounded-lg mt-2 p-2 focus: border-blue-500 focus: bg-gray-800 focus: outline-none' type="password" />
                </div>

                <div className='flex justify-between py-2 text-gray-400'>
                    <p className='flex items-center'><input className='mr-2' type="checkbox" /> Remember Me</p>
                    <p>Forgot password?</p>
                </div>
                <button className='w-full rounded-lg my-2 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 text-white hover:shadow-teal-500/30' type="submit">Sign In</button>
            </form>
        </div>
    </div>
  )
}
export default Login