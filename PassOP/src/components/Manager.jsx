import React, { useEffect } from 'react'
import { useRef, useState } from 'react'
import { Bounce, ToastContainer, toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';

const Manager = () => {
  const ref = useRef()
  const passwordRef = useRef()
  const [form, setform] = useState({ site: "", username: "", password: "" })
  const [passwordArray, setpasswordArray] = useState([])

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");

    if (passwords) {
      setpasswordArray(JSON.parse(passwords))
    }
  }, [])


  const showPassword = () => {

    if (ref.current.src.includes("icons/unhide.gif")) {
      ref.current.src = "icons/hide.gif"
      passwordRef.current.type = "password"
    } else {
      ref.current.src = "icons/unhide.gif"
      passwordRef.current.type = "text"
    }
  }
  const savePassword = () => {
    if (form.site.length > 3 && form.username.length > 3 && form.password.length > 3) {

      setpasswordArray([...passwordArray, { ...form, id: uuidv4() }])
      localStorage.setItem("passwords", JSON.stringify([...passwordArray, { ...form, id: uuidv4() }]))
      console.log([...passwordArray, { ...form, id: uuidv4() }]);
      setform({ site: "", username: "", password: "" })
      toast.success('Password Saved !', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",

      });
    }
    else {
      toast.warn('Enter Atleast 4 Letters', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",

      });
    }
  }
  const deletePassword = (id) => {
    toast('Password Deleted !', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",

    });
    let c = confirm("Do you Want to Delete!")
    if (c) {
      setpasswordArray(passwordArray.filter(item => item.id !== id))
      localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item => item.id !== id)))

    }
  }
  const editPassword = (id) => {
    console.log("editing", id);
    setform(passwordArray.filter(i => i.id === id)[0])
    setpasswordArray(passwordArray.filter(item => item.id !== id))


    // setpasswordArray([...passwordArray, {...form, id:uuidv4()}])
    // localStorage.setItem("passwords", JSON.stringify([...passwordArray, {...form, id:uuidv4()}]))
    // console.log([...passwordArray, {...form, id:uuidv4()}]);
  }

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })
  }

  const copyText = (text) => {
    toast(' Copied To ClipBoard', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",

    });
    navigator.clipboard.writeText(text)
  }



  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <div className="absolute inset-0 -z-10 h-full w-full bg-teal-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size:14px_24px"><div className="absolute left-0 right-0 top-0 -z-10 m-auto h-96 w-96 rounded-full bg-teal-200 opacity-30 blur-[100px]"></div></div>
      <div className="  md:mycontainer md:py-6 md:px-40 py-6 px-6">

        <h1 className='text-4xl font-bold text-center '>
          <span className='text-teal-600'>&lt;</span>
          <span>Pass</span>
          <span className='text-teal-600'>OP/&gt;</span>
        </h1>
        <p className='text-teal-700 text-lg text-center'>Your own Password Manager </p>

        <div className='flex flex-col p-3 text-black gap-3 items-center'>
          <input value={form.site} onChange={handleChange} placeholder='Enter Website URL' className='rounded-full border border-teal-600 w-full p-1 py-1' type="url" name='site' id='' />
          <div className='flex w-full justify-between gap-4'>
            <input value={form.username} onChange={handleChange} placeholder='Enter UserName' className='rounded-full border border-teal-600 w-full p-2 py-1' type="text" name='username' id='' />
            <div className="relative">
              <input ref={passwordRef} value={form.password} onChange={handleChange} placeholder='Enter Password' className=' rounded-full border border-teal-600 w-full p-2 py-1' type="password" name='password' id='' />
              <span className='absolute right-2 top-2 cursor-pointer' onClick={showPassword}><img ref={ref} width={20} src="icons/unhide.gif" alt="" /></span>
            </div>
          </div>
          <button onClick={savePassword} className='flex justify-center gap-2 items-center hover:bg-teal-400 bg-teal-500 rounded-full px-4  py-1 w-fit border border-teal-950'>

            <img className='h-5' src="icons/addicon.png.gif" alt="add" />
            <span className=''>Save</span></button>
        </div>
        <div className="passwords ">
          <h2 className='font-bold text-2xl py-1'>Your Passwords :</h2>
          {passwordArray.length === 0 && <div>No Passwords Here</div>}
          {passwordArray.length != 0 &&
            <table class=" table-auto w-full rounded-md overflow-hidden">
              <thead className='bg-teal-900 text-white '>
                <tr>
                  <th className='py-2'>Site</th>
                  <th className='py-2'>UserName</th>
                  <th className='py-2'>Password</th>
                  <th className='py-2 '>Actions</th>
                </tr>
              </thead>
              <tbody className='bg-teal-100'>
                {passwordArray.map((item, index) => {
                  return <tr key={index}>
                    <td className='text-center w-32 py-1 border border-white '><span className='flex items-center justify-center gap-2'><a href={item.site} target='_blank'>{item.site}</a>
                      <img className='w-4 cursor-pointer' onClick={() => { copyText(item.site) }} src="icons/Copy.png" alt="" /></span></td>
                    <td className='text-center w-32 py-1 border border-white'>
                      <span className='flex items-center justify-center gap-2'>
                        {item.username}
                        <img className='w-4 cursor-pointer' onClick={() => { copyText(item.username) }} src="icons/Copy.png" alt="" /></span>
                    </td>
                    <td className='text-center w-32 py-1 border border-white'>
                      <span className='flex items-center justify-center gap-2'>
                        {item.password}
                        <img className='w-4 cursor-pointer' onClick={() => { copyText(item.password) }} src="icons/Copy.png" alt="" /></span>
                    </td>
                    <td className='  w-32 py-1 border border-white'>
                      <span className='flex items-center justify-center gap-3 '>
                        <span className='flex items-center justify-center'><img className='w-5 cursor-pointer' onClick={() => { editPassword(item.id) }} src="icons/Edits.gif" alt="" /></span>
                        <span className='flex items-center justify-center'><img className='w-5 cursor-pointer' onClick={() => { deletePassword(item.id) }} src="icons/Delete.gif" alt="" /></span>
                      </span>
                    </td>
                  </tr>
                }
                )}

              </tbody>
            </table>}
        </div>
      </div>
    </>
  )
}

export default Manager
