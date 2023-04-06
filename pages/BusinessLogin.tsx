
import FormHeader from '@/Components/Forms/FormHeader'
import Login from '@/Components/Forms/Login'
import React from 'react'

const BusinessLogin = () => {
  return (
    <div>
        <FormHeader text='Don’t  have account yet?' linkPath='/Signup' description='Sign Up'/>
        <Login />
      
    </div>
  )
}

export default BusinessLogin
