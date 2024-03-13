const errorMiddleware=(error,req,res,next)=>{
    let statusCode=res.statusCode === 200?500:res.statusCode;
    let message=err.message;

    //Check for Mongoose cast error when wrong Oid is given
    if(error.name==='CastError' && error.kind === 'ObjectId')
    {
        message="Resoruce not found";
        statusCode=404;
    }

    res.status(statusCode).json({
        message,
        stack:false ? '---' : error.stack
    });
}