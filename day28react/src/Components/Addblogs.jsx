import { Button, TextField } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axiosInstance from '../axiosinterceptor';

const Addblogs = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    imageUrl: '',
  });
  const location=useLocation();
  const navigate=useNavigate();
  function postBlog () {
    if(location.state!=null){
     axiosInstance.put('http://localhost:5000/api/edit' +location.state.val._id,formData).then((res)=>{
     alert(res.data.message);
    navigate('/blog');
    })
  }else{
    axiosInstance.post('http://localhost:5000/api/add',formData).then((res)=>{
      alert(res.data.message);
      navigate('/blog')
    })
  }}
useEffect(()=>{
  if(location.state!=null){
setFormData({...formData,title:location.state.val.title,
  description:location.state.val.description,
  imageUrl:location.state.val.imageUrl})
  }else{
    setFormData({...formData,title:'',
      description:'',
      imageUrl:''})
  }

},[])
  return (
    <div>
      <div
        style={{
          marginTop: '90px',
          marginLeft:'40%',
          textAlign: 'center',
          // margin: '0 auto',
          borderRadius: '8px',
          backgroundColor: 'white',
          boxShadow: '0 4px 4px black',
          width: '300px',
          padding: '20px',
        }}
      >
        <h3>Add Blog</h3>
        <TextField
          label="Title"
          value={formData.title}
          onChange={(e) =>
             setFormData({ ...formData, title: e.target.value })}
          fullWidth
          style={{ marginBottom: '10px' }}
        />
        <TextField
          label="Description"
          value={formData.description}
          onChange={(e) =>
             setFormData({ ...formData, description: e.target.value })}
          fullWidth
          style={{ marginBottom: '10px' }}
        />
        <TextField
          label="Image URL"
          value={formData.imageUrl}
          onChange={(e) =>
             setFormData({ ...formData, imageUrl: e.target.value })}
          fullWidth
          style={{ marginBottom: '10px' }}
        />
        <Button color="primary" variant="contained" onClick={postBlog}>
          Add
        </Button>
      </div>
    </div>
  );
};

export default Addblogs;






