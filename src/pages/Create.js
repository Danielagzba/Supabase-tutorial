import React from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Create = () => {
  const navigate = useNavigate()

  const [productName, setProductName] = useState('')
  const [skinType, setSkinType] = useState('')
  const [spf, setSpf] = useState('')
  const [formError, setFormError] = useState(null)

  const handleSubmit = async(e) => {
    e.preventDefault()

    if (productName || skinType || spf){
      setFormError('please fill in all the fields')
      return

    }
    console.log(productName, skinType, spf)
  }


  return (
    <div className="page create">
        <form onSubmit={handleSubmit}>
        <label htmlFor="productName">Product Name:</label>
        <input 
          type="text" 
          id="productName"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />

        <label htmlFor="skinType">Skin Type</label>
        <textarea 
          id="skinType"
          value={skinType}
          onChange={(e) => setSkinType(e.target.value)}
        />

        <label htmlFor="spf">spf:</label>
        <input 
          type="number"
          id="spf"
          value={spf}
          onChange={(e) => setSpf(e.target.value)}
        />

        <button>Create Product</button>

        {formError && <p className="error">{formError}</p>}
      </form>
    </div>
  )
}

export default Create