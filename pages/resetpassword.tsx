import FormHeader from '@/Components/Forms/FormHeader'
import Resetpassword from '@/Components/Forms/ResetPassword'
import React from 'react'

const resetpassword = () => {
  return (
    <>
    <FormHeader text='Don’t  have account yet?' linkPath='/Signup' description='Sign Up'/>
     <Resetpassword />
    </>
  )
}

export default resetpassword