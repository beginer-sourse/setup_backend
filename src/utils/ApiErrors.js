class ApiErrors extends Error{
  constructor(
    message="something went wrong",
    errors=[],
    statusCode,
    stack=""
  ){
    this.message=message;
    this.error=error;
    this.success=false;
    this.errors=errors;
    this.statusCode=statusCode;
    this.data=null;

    if(stack){
      this.stack=stack;
    }
    else{
      Error.captureStackTrace(this, this.constructor);
    }
  }
} 

export default ApiErrors;