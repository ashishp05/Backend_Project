const cloudinary  =require("cloudinary").v2;
 const File = require("../model/File");

 exports.fileUpload = async(req ,res) =>
 {
    try{
        //fatch file
    const file = req.files.file;
    console.log(file);

    let path = __dirname + "/files/" + Date.now() + `.${file.name.split(".")[1]}`;

    file.mv(path , (err) =>
    [
        console.log(err.message)
    ])

    res.json({
        success :true,
        message : "local file uploaded successfully."
    })
    }
    catch(err)
    {
        return res.status(500).json({
            success :false,
            message: "error in file uploading."
        })
    }
 }

function mediaTypeSupported(mediaType ,supportedTypes)
{
   return supportedTypes.includes(mediaType);
}

 async function uploadFileToCloudinary(file ,folder ,quality)
{ const option ={folder}
  option.resource_type ="auto";
  if(quality)
  {
    option.quality =quality;
  }
 return  await  cloudinary.uploader.upload(file.tempFilePath ,option);

}

 // imageupload in cloudinary


 exports.imageUpload = async (req ,res) =>
 {
    try{
      const {name ,email , tag } = req.body;
      console.log(name ,tag ,email)
      
      const file = req.files.imageFile ;
      console.log( "File" ,file);

      const supportedTypes = ["png" ,"jpg" , "jpeg","JPG"];
      const imageType = file.name.split('.')[1];
      console.log("imageType" ,imageType);
      if(!mediaTypeSupported(imageType ,supportedTypes))
      {
          return res.status(400).json(
              {
                  success:false,
                  message :"invalid file type."
                }
                )
            }
            
            const response = await uploadFileToCloudinary(file , "MyFolder");
             console.log("response :",response);
            console.log("this is runnig")

       const imageData = await File.create( { name ,email ,tag ,imageUrl:response.secure_url})

       res.status(200).json(
        {
            success :true,
            data:imageData,
            message :"image uploaded successfully"
        }
       )


    }catch(error)
    {
         return res.status(400).json({
            success :false,
            data : "media not uploaded.",
            message:error.message
         })

    }
 }

 // video uploader

 exports.videoUpload = async (req ,res) =>
 {
    try{

        //fetch the data and create file instance
      const {name ,email , tag} = req.body;
      console.log(name ,tag ,email)
      
      const file = req.files.videoFile ;
      console.log( "File" ,file);
   // validation karo

      const supportedTypes = ["mov" ,"mp4" , "mp3"];
      const videoType = file.name.split('.')[1];
      console.log("videoType" ,videoType);
      if(!mediaTypeSupported(videoType ,supportedTypes))
      {
          return res.status(400).json(
              {
                  success:false,
                  message :"invalid file type."
                }
                )
            }
            //cloudinary ma upload karo
            
            const response = await uploadFileToCloudinary(file , "MyFolder");
             console.log("response :",response);
            console.log("this is runnig")

       const videoData = await File.create( { name ,email ,tag ,imageUrl:response.secure_url})

       res.status(200).json(
        {
            success :true,
            data:videoData,
            message :"image uploaded successfully"
        }
       )


    }catch(error)
    {
         return res.status(400).json({
            success :false,
            data : "media not uploaded.",
            message:error.message
         })

    }
 }
 // reducer imageupload\



 exports.imageReducer = async (req ,res) =>
 {
    try{
      const {name ,email , tag } = req.body;
      console.log(name ,tag ,email)
      
      const file = req.files.imageFile ;
      console.log( "File" ,file);

      const supportedTypes = ["png" ,"jpg" , "jpeg"];
      const imageType = file.name.split('.')[1];
      console.log("imageType" ,imageType);
      if(!mediaTypeSupported(imageType ,supportedTypes))
      {
          return res.status(400).json(
              {
                  success:false,
                  message :"invalid file type."
                }
                )
            }
            
            const response = await uploadFileToCloudinary(file , "MyFolder" ,80 );
             console.log("response :",response);
            console.log("this is runnig")

       const imageData = await File.create( { name ,email ,tag ,imageUrl:response.secure_url})

       res.status(200).json(
        {
            success :true,
            data:imageData,
            message :"image uploaded successfully"
        }
       )


    }catch(error)
    {
         return res.status(400).json({
            success :false,
            data : "media not uploaded.",
            message:error.message
         })

    }
 }

 //pdf uploader

 exports.pdfUpload =async(req ,res) =>
 {
   try{
    
    const {name ,email ,tag} =req.body;
    console.log(name,email ,tag);

    const file = req.files.pdfFile;
    console.log(file);

    const supportedTypes = ["pdf" ,"PDF"];
    const pdfType = file.name.split('.')[1];
    console.log("pdfType" ,pdfType);
    if(!mediaTypeSupported(pdfType ,supportedTypes))
    {
        res.status(400).json(
            {
                success:false,
                data :"not found extention"
            }
        )
    }

    const response = await uploadFileToCloudinary(file , "MyFolder" ,80 );
     console.log("response" , response);

     const pdfData = await File.create({name ,email ,tag ,imageUrl:response.secure_url})

     res.status(200).json({
        success:true,
        data:pdfData,
        message:"pdf uploaded successfully."
     })

   }catch(error)
   {
    
    return res.status(400).json({
        success :false,
        data : "media not uploaded.",
        message:error.message
     })
   }
 }