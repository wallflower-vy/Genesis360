import FormHeader from '@/Components/Forms/FormHeader'
import SignUp from '@/Components/Forms/SignUp'
import React from 'react'

const Signup = () => {
  return (
   <>
   <FormHeader text='Already have an account?' linkPath='/BusinessLogin' description='Log In'/>
    <SignUp />
   </>
  )
}
export default Signup
