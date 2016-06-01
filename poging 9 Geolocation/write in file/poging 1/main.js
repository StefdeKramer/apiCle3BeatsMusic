var fso = new ActiveXObject("Scripting.FileSystemObject");
var FileObject = fso.OpenTextFile("test.txt", 8, true,0); // 8=append, true=create if not exist, 0 = ASCII
newObject.write(sText);
newFileObject.close();

