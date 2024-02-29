import React,{useEffect, useState} from 'react'
import { Button,Form,Modal } from 'react-bootstrap';
import { addCategoryAPI, getAVideoAPI, getCategoryAPI, removeCategoryAPI, updateCategoryAPI } from '../services/allAPI';
import { all } from 'axios';
import VideoCard from './VideoCard';



function Category(removeCategoryVideoResponse) {
  const [allCategories,setAllCategories]=useState([])
  const [categoryName,setCategoryName]=useState("")
  const [show, setShow] = useState(false);

  const handleClose = () =>{
    setShow(false);
    setCategoryName("")
  }
  const handleShow = () => setShow(true);

 
      const handleAddCategory=async()=>{
        if(categoryName){
          const result=await addCategoryAPI({categoryName,allVideos:[]})
          handleClose()
          getAllCategories()
        }
        else{
          alert("Please Fill The Form Completely!!!")
        }
      }
      const getAllCategories=async()=>{
        const result =await getCategoryAPI()
        setAllCategories(result.data)
      }
      console.log(allCategories);
      useEffect(()=>{
        getAllCategories()
      },[removeCategoryVideoResponse])

      const handleRemoveCategory=async(cId)=>{
        await removeCategoryAPI(cId)
        getAllCategories()
      }

      //ondrag event
      const dragOverCategory=(e)=>{
        e.preventDefault()
        console.log("Dragging over Category");
      }
    //drop
      const videoDropped= async (e,categoryId)=>{
        const videoId = e.dataTransfer.getData("videoId")
        console.log(`Video Dropped with vId: ${e.dataTransfer.getData("videoId")},Inside category Id: ${categoryId}`);
          //get details of the video
      const {data}=await getAVideoAPI(videoId)
        console.log(data);
      //get category details where we have to add video
        let selectedCategory=allCategories.find(item=>item.id==categoryId)
        selectedCategory.allVideos.push(data)
        console.log(selectedCategory);
        await updateCategoryAPI(categoryId,selectedCategory)
        getAllCategories()
     
      }
      //remove a video from category
        const videoDragStarted = (e,videoId,categoryId)=>{
          console.log(`Drag Started from category Id: ${categoryId} with video id : ${videoId}`);
          let dataShare ={videoId,categoryId}
        e.dataTransfer.setData("removeVideoDetails",JSON.stringify(dataShare))  
        }


  return (
  <> 
  <div className='d-flex justify-content-around'>
    <h3 style={{height:'50px'}}>All Categories</h3>
    <button onClick={handleShow} className='btn btn-primary'>Add New Category</button>
  </div>
  <div className='container-fluid mt-3'>
    {
      allCategories.length>0? allCategories.map((item,index)=>(
        <div droppable="true" onDragOver={(e)=>dragOverCategory(e)} onDrop={(e)=>videoDropped(e,item?.id)} key={index} className='border rounded p-3 mb-2'>
         <div className='d-flex justify-content-between'>
           <h5 style={{height:'30px'}}>{item.categoryName}</h5>
           <button onClick={()=>handleRemoveCategory(item.id)} className='btn'><i className='fa-solid fa-trash text-danger'></i></button>
           </div>
           <div className='row mt-2'>
            {
              item.allVideos?.length>0 &&
              item.allVideos?.map((video,index)=>
              (
                    <div draggable onDragStart={e=>videoDragStarted(e,video.id,item.id)} key={index} className='col-lg-6'>
                          <VideoCard insideCategory={true} displayData={video}/>
                    </div>
              ))
              }
           </div>
        </div>
      
      ))
      :
      <div className='text-danger fw-bolder'>No Categories are Added Yet!!!</div>
    }
  </div>

    <Modal show={show} onHide={handleClose}  backdrop="static"
        keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Adding A Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please Fill The Form Completely!!!</p>
       <div className='category border rounded p-3'>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label> Category Name</Form.Label>
                <Form.Control value={categoryName}
                 onChange={e=>setCategoryName(e.target.value)}
                  type="text"
                  placeholder="Enter Category Name"
                  autoFocus
                />
              </Form.Group>
             </Form>
       </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
           Cancel
          </Button>
          <button onClick={handleAddCategory} className="btn btn-info" >
            Add
          </button>
        </Modal.Footer>
      </Modal>
  </>
  )
}

export default Category