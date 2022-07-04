
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import { Button } from 'react-bootstrap';
import "../Contexts/CSS/Booking.css";

export const Booking = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();
  

  // Function called on submit that uses emailjs to send email of valid contact form
  const onSubmit = async (data) => {
    // Destrcture data object
    const { Name, Email, MobileNumber,Card, CVV,message } = data;
    try {
      // Disable form while processing submission
      // setDisabled(true);

      // Define template params
      const templateParams = {
        Name,
        Email,
        MobileNumber,
        Card,
        CVV,
        message
      };

      // Use emailjs to email contact form data
      await emailjs.send(
        // process.env.REACT_APP_SERVICE_ID,
        // process.env.REACT_APP_TEMPLATE_ID,
        "service_kuyf0ki",
        "template_xix5txc",
        templateParams,
        // process.env.REACT_APP_USER_ID
        "bNNPHBJlzw-S7gGNs"
        
      );

      // Reset contact form fields after submission
      reset();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    // <div className='body'></div>
    <>
    <div className='BookingContainer'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 text-center'>
            <div className='Booking'>
              <form id='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate>
                {/* Row 1 of form */}
                <div className='row formRow'>
                  <div className='col-6'>
                    <input
                      type='text'
                      name='Name'
                      {...register('Name', {
                        required: {
                          value: true,
                          message: 'Please enter your name'
                        },
                        maxLength: {
                          value: 30,
                          message: 'Please use 30 characters or less'
                        }
                      })}
                      className='form-control formInput'
                      placeholder='Name'
                    ></input>
                    {errors.name && <span className='errorMessage'>{errors.name.message}</span>}
                  </div>

                  {/* This row is for the email */}
                  <div className='col-6'>
                    <input
                      rows={3}
                      name='Email'
                      {...register('Email', {
                        required: {
                          value: true,
                          message: 'Please enter a correct Email id'
                        },
                        maxLength: {
                          pattern:
                          /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                          message: 'Please use alphanumeric characters '
                        }
                      })}
                      className='form-control formInput'
                      placeholder='Email address'
                    ></input>
                    {errors.email && (
                      <span className='errorMessage'><h4>Please enter a valid email address</h4></span>
                    )}
                  </div>
                </div>
                {/* Row 2 of form */}
                
                <div className='row formRow'>
                  <div className='col'>
                    <input
                      rows={3}
                      name='MobileNumber'
                      {...register('MobileNumber', {
                        required: {
                          value: true,
                          message: 'Please enter a 10 digit Mobile Number'
                        },
                        maxLength: {
                          value: 10,
                          message: 'Please use numbers only'
                        }
                      })}
                      className='form-control formInput'
                      placeholder='Please Enter your 10 digit Mobile Number'
                    ></input>
                    {errors.message && <span className='errorMessage'><h4>Please enter a Correct 10 digit Mobile Number</h4></span>}
                  </div>
                </div>

                {/* This row is for the Card Number */}


                <div className='row formRow'>
                  <div className='col'>
                    <input
                      rows={3}
                      name='Card'
                      {...register('Card', {
                        required: {
                          value: true,
                          message: 'Please enter a 16 digit Card Number'
                        },
                        maxLength: {
                          value: 16,
                          message: 'Please use numbers only'
                        }
                      })}
                      className='form-control formInput'
                      placeholder='Please Enter your 16 digit Card Number'
                    ></input>
                    {errors.message && <span className='errorMessage'><h4>Please enter a Correct 16 digit Number</h4></span>}
                  </div>
                </div>

               
                  {/* This row is for the CVV Number*/}
                  <div className='row formRow'>
                  <div className='col'>
                    <input
                      rows={3}
                      name='CVV'
                      {...register('Card', {
                        required: {
                          value: true,
                          message: 'Please enter a 3 digit CVV Number'
                        },
                        maxLength: {
                          value: 4,
                          message: 'Please use numbers only'
                        }
                      })}
                      className='form-control formInput'
                      placeholder='Enter CVV'
                    ></input>
                    {errors.message && <span className='errorMessage'><h4>Please enter a Correct CVV Number</h4></span>}
                  </div>
                </div>


                {/* Row 3 of form */}
                <div className='row formRow'>
                  <div className='col'>
                    <textarea
                      rows={3}
                      name='message'
                      {...register('message', {
                        required: true
                      })}
                      className='form-control formInput'
                      placeholder='Message'
                    ></textarea>
                    {errors.message && <span className='errorMessage'><h4>Please enter a message</h4></span>}
                  </div>
                </div>

                <Button className='submit-btn'  type='submit'>
                  <h2 className="buttontext">Pay</h2>
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>  

  </>
  );
};