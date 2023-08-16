// // 3 functions
// // -upload in s3
// // -upload in local
// // -upload (storage type, naming, validation) type = s3/local
var multer = require("multer");
const multerS3 = require("multer-s3");
const aws = require("aws-sdk");
const config = require("../config/config.json");
const { constant } = require("../constants/server.constant");

const env = process.env.NODE_ENV || "development";
const region = config[env].region;
const accessKeyId = config[env].accessKeyId;
const secretAccessKey = config[env].secretAccessKey;
const s3Bucket = config[env].bucket;
const acceptedType = ["pdf", "doc", "docx", "jpg", "jpeg", "png"];

aws.config.update({
  region: region, // Put your aws region here
  accessKeyId: accessKeyId,
  secretAccessKey: secretAccessKey,
});

var s3 = new aws.S3({
  /* ... */
});

const validation = {
  file_count: "single",
  mimeType: [
    "image/jpeg",
    "image/png",
    "image/jpg",
    "image/svg",
    "image/gif",
    "image/bmp",
    "video/mp4",
    "application/pdf",
  ],
  maxSize: 5000000,
};

function uploadS3({filename, req, res, next}) {
	try {
		const uploadFile = multer({
			limits: {
				fileSize: validation.maxSize,
			},
			storage: multerS3({
				s3: s3,
				bucket: s3Bucket,
				acl: "public-read",
				metadata: function (req, file, cb) {
					cb(null, { fieldName: file.fieldname });
				},
				contentType: multerS3.AUTO_CONTENT_TYPE,
				key: function (req, file, cb) {
					// console.error('file.originalname.split(".") = ', file.originalname.split('.'));
					// cb(null, "prescriptionDocuments/"+Date.now().toString()+"."+file.originalname.split('.')[1])
					console.error(
						'file.originalname.split(".") = ',
						file.originalname.split(".")
					);
					temp = file.originalname.split(".");
					type = temp[temp.length - 1];
					console.error("type = ", type);
					if (acceptedType.indexOf(type) > -1) {
						cb(null, file.fieldname + "-" + Date.now().toString() + "." + type);
						// callback(null, file.fieldname + '-' + Date.now() +"."+ type);
					} else {
						throw "Wrong file type";
					}
				},
			}),
		});
	
		// if(count === 1) {
			let uploadSingleFile = uploadFile.single(filename);
	
			// Here call the upload middleware of multer
			uploadSingleFile(req, res, function (err) {
				if (err instanceof multer.MulterError) {
					// A Multer error occurred when uploading.
					const err = new Error("Multer error");
					next(err);
				} else if (err) {
					// An unknown error occurred when uploading.
					const err = new Error("Server Error");
					next(err);
				}
		
				// Everything went fine.
				next();
			});
		// } else {
		// 	let uploadFiles = uploadFile.array(filename, count);

		// 	// Here call the upload middleware of multer
		// 	uploadFiles(req, res, function (err) {
		// 		if (err instanceof multer.MulterError) {
		// 			// A Multer error occurred when uploading.
		// 			const err = new Error("Multer error");
		// 			next(err);
		// 		} else if (err) {
		// 			// An unknown error occurred when uploading.
		// 			const err = new Error("Server Error");
		// 			next(err);
		// 		}
		
		// 		// Everything went fine.
		// 		next();
		// 	});
		// }

		
	} catch (error) {
		console.error(error);
	}
}


function uploadLocal({filename, req, res, next}) {
	try {
		var storage = multer.diskStorage({
			destination: function (req, file, callback) {
				callback(null, "./src/wrappid/prescriptionDocuments/");
			},
			filename: function (req, file, callback) {
				console.error(
					'file.originalname.split(".") = ',
					file.originalname.split(".")
				);
				temp = file.originalname.split(".");
				type = temp[temp.length - 1];
				console.error("type = ", type);
				if (acceptedType.indexOf(type) > -1) {
					callback(null, file.fieldname + "-" + Date.now() + "." + type);
				} else {
					throw "Wrong file type";
				}
			},
		});
	
		const uploadFile = multer({
			storage: storage,
			limits: {
				fileSize: validation.maxSize,
			},
		});
	
		// if(count === 1) {
			const uploadSingleFile = uploadFile.single(filename);
	
			// Here call the upload middleware of multer
			uploadSingleFile(req, res, function (err) {
				if (err instanceof multer.MulterError) {
					// A Multer error occurred when uploading.
					const err = new Error("Multer error");
					next(err);
				} else if (err) {
					// An unknown error occurred when uploading.
					const err = new Error("Server Error");
					next(err);
				}
		
				// Everything went fine.
				next();
			});
		// } else {
		// 	let uploadFiles = uploadFile.array(filename, count);

		// 	// Here call the upload middleware of multer
		// 	uploadFiles(req, res, function (err) {
		// 		if (err instanceof multer.MulterError) {
		// 			// A Multer error occurred when uploading.
		// 			const err = new Error("Multer error");
		// 			next(err);
		// 		} else if (err) {
		// 			// An unknown error occurred when uploading.
		// 			const err = new Error("Server Error");
		// 			next(err);
		// 		}
		
		// 		// Everything went fine.
		// 		next();
		// 	});
		// }
	} catch (error) {
		console.error(error);
		res.send("Error:", error.message);
	}
}

function upload({storageType, filename, req, res, next}) {
	if (storageType === constant.storageType.AWS_S3) {
		uploadS3({filename, storageType, req, res, next});
	} else if (storageType === constant.storageType.LOCAL) {
		uploadLocal({filename, storageType, req, res, next});
	}
}

module.exports = upload;