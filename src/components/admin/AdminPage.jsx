import React from 'react'
import Footer from '../common/Footer'
import Header from '../common/Header1'

const AdminPage = () => {
  return (
    <><Header/>
    <div class="container mt-5">
    {/* Bordered div with three horizontal and larger buttons */}
    <div class="border p-3 d-flex">
    <button type="button" class="btn btn-outline-primary btn-lg mr-2 mx-5"> Train management</button>
      <button type="button" class="btn btn-outline-primary btn-lg mr-2 mx-5">User management</button>
      <button type="button" class="btn btn-outline-primary btn-lg mx-5"> Payment management</button>
    </div>
  </div>
  <Footer/>
    </>
  )
}

export default AdminPage