const path = require('path');
const fs = require('fs');
// const fileUpload = require("express-fileupload");

const cloudinary = require('cloudinary').v2;
// const cloudinary = require("./config");

const { response } = require('express');
const { v4: uuidv4 } = require('uuid');
const { actualizarImagen } = require('../helpers/actualizar-imagen');


// Configuration 
cloudinary.config({
    cloud_name: "dl3wvburt",
    api_key: "993166839882455",
    api_secret: "tWPhqKrnQ13uSxQZuoRcPxgLp1k"
  });


const fileUpload = async ( req, res = response ) => {

    useTempFiles: true;
    const tipo = req.params.tipo;
    const id   = req.params.id;

    // Validar tipo
    const tiposValidos = ['births','events','usuarios', 'pensodromos'];
    if ( !tiposValidos.includes(tipo) ){
        return res.status(400).json({
            ok: false,
            msg: 'No es un tipo valido birth ,events, usuarios, pensodromos (tipo)'
        });
    }

    // Validar que exista un archivo
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).json({
            ok: false,
            msg: 'No hay ningún archivo'
        });
    }

    // Procesar la imagen...
    const file = req.files.image;

    const nombreCortado = file.name.split('.'); // wolverine.1.3.jpg
    const extensionArchivo = nombreCortado[ nombreCortado.length - 1 ];
    
    // Validar extension
    const extensionesValidas = ['png','jpg','jpeg','gif'];
    if ( !extensionesValidas.includes( extensionArchivo ) ) {
        return res.status(400).json({
            ok: false,
            msg: 'No es una extensión permitida'
        });
    }

    // // Generar el nombre del archivo
     const nombreArchivo = `${ uuidv4() }.${ extensionArchivo }`;
    
    
    // // Path para guardar la imagen
    const path = `/home/main/${ tipo }/${ nombreArchivo }`;


    const uploadFile = req.files.uploadFile;

    // const result = await cloudinary.uploader.upload(uploadFile, {
    //   public_id: uploadFile.name,
    //   resource_type: "auto",
    //   folder: "uploaded",
    //   use_filename: true,
    //   unique_filename: false,
    // });
    // if (result.url) {
    //   res.render("media", {
    //     img: result.url,
    //     name: uploadFile.name.replace(/.jpeg|.jpg|.png|.webp/gi, ""),
    //   });
    // } else {
    //   res.render("/upload");
    // }
    

    // cloudinary.uploader
    // .upload(file.tempFilepath, 
    //     { public_id: `home/${tipo}/`,
    //     overwrite: true})
    //     .then(result=>console.log(result));
     
    // cloudinary.uploader.upload(file.tempFilePath, function(err, result){
    //     res.send({
    //         success:true
    //     });
        
    // });


  
    //     cloudinary.uploader
    //     .upload(file.tempFilepath)
    //     .then(result=>console.log(result));



    cloudinary.uploader.upload("/home/my_image.jpg", 
    function(error, result) {console.log(result, error)});



  actualizarImagen( tipo, id, nombreArchivo );

    // Mover la imagen
    file.mv( path , (err) => {
        console.log(path);
        if (err){
            console.log(err)
            return res.status(500).json({
                ok: false,
                msg: 'Error al mover la imagen'
            });
        }

        // Actualizar base de datos
        actualizarImagen( tipo, id, nombreArchivo );

        res.json({
            ok: true,
            msg: 'Archivo subido',
            nombreArchivo
        });
    });

// Cloudinary


}

const retornaImagen = ( req, res = response ) => {

    const tipo = req.params.tipo;
    const image = req.params.image;

    const pathImg = path.join( __dirname, `../uploads/${ tipo }/${ image }` );

    // imagen por defecto
    if ( fs.existsSync( pathImg ) ) {
        res.sendFile( pathImg );
    } else {
        const pathImg = path.join( __dirname, `../uploads/no-img.jpg` );
        res.sendFile( pathImg );
    }

}


module.exports = {
    fileUpload,
    retornaImagen
}