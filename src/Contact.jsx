import React,{useState} from 'react';

const Contact = () => {


const [data,setdata] = useState({
    fullname:'',
    phone:'',
    email:'',
    msg:'',
})

const InputEvent = (event)=>{
  const {name,value} = event.target;
  console.log(value)
  setdata((preVal)=>{
      return{
          ...preVal,
          [name]:value
      }
  })

}


const formSubmit = (e)=>{
  
e.preventDefault();
alert(`${data.fullname} your form has been submitted`)
}


    return (
        <>
            <div className='my-5'>
                <h1 className='text-center'>Contact Us</h1>
            </div>
            <div className='container contact_div'>
                <div className='row'>
                    <div className='col-md-6 col-10 mx-auto'>
                        <form action="" onSubmit={formSubmit}>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">
                                    Full Name</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter Your Name"
                                name= 'fullname'
                                // value= {data.fullname}
                                onchange ={InputEvent} />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">
                                    Phone</label>
                                <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="mobile no."
                                 name= 'phone'
                                // value= {data.phone}
                                onchange ={InputEvent} />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">
                                    Email address</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"
                                 name= 'email'
                                // value= {data.email}
                                onchange ={InputEvent} />
                            </div>

                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">
                                    Message</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                                name= 'msg'
                                // value= {data.msg}
                                onchange ={InputEvent}></textarea>
                            </div>
                            <div class="col-12">
                                <button class="btn btn-outline-primary" type="submit">Submit form</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;